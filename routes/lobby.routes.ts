import createLobby from '../controllers/lobby.controller'
import express, { Request, Response } from "express";
import { db } from '../models/sequelize';
import { PersonResponse } from '../responses/person.response';
import { LobbyResponse } from '../responses/lobby.response';
import { PairResponse } from '../responses/pair.response';
import { makeValidateBody } from 'express-class-validator';
import { CreateLobbyDto } from '../DTOs/create-lobby.dto';

const router = express.Router();

router.post("", makeValidateBody(CreateLobbyDto), createLobby);

router.get("/:lobbyId/:hash(*)", async (req: Request, res: Response) => {
    const hash: string  = req.params.hash;
    const lobbyId: number = Number(req.params.lobbyId);
    const personGiving = await db.Person.findOne({
        where: {
            hash: hash,
            lobbyId: lobbyId
        }
    })
    if(!personGiving){
        return res.status(404);
    }
    const personGivingId = personGiving.dataValues.id;
    const pairWithPersonGiving = await db.Pair.findOne({
        where: {
            personGivingId: personGivingId
        }
    })
    if(!pairWithPersonGiving){
        return res.status(404);
    }
    const personReceivingId = pairWithPersonGiving.dataValues.personReceivingId;
    const personReceiving = await db.Person.findOne({
        where: {
            id: personReceivingId
        }
    })
    if(!personReceiving){
        return res.status(404);
    }
    const personGivingToBeReturned = new PersonResponse(personGiving.dataValues.name, lobbyId, personGiving.dataValues.hash);
    const personReceivingToBeReturned = new PersonResponse(personReceiving.dataValues.name, lobbyId, personReceiving.dataValues.hash);
    res.json(new PairResponse(personGivingToBeReturned, personReceivingToBeReturned));
})

router.get('/:lobbyId', async (req: Request, res: Response) => {
    const lobbyId = Number(req.params.lobbyId);
    const peopleFromLobby = await db.Person.findAll({
        where: {
            lobbyId: lobbyId
        }
    })
    const peopleToBeReturned = peopleFromLobby.map(person => {
        return new PersonResponse(person.dataValues.name, lobbyId, person.dataValues.hash);
    })
    res.json(peopleToBeReturned);
})

export default router;