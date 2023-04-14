import { db } from '../models/sequelize'
import { Request, Response } from "express";
import { CreateLobbyDto } from '../DTOs/create-lobby.dto'
import { createPeople } from '../services/person.service';
import { createPairs } from '../services/pair.service';
import { LobbyResponse } from '../responses/lobby.response';

const Lobby = db.Lobby;

const createLobby = async (req: Request, res: Response) => {
    const lobby: CreateLobbyDto = req.body;
    const lobbyForDb = {
        name: lobby.name
    }
    const lobbyFromDb = await Lobby.create(lobbyForDb);
    const people = await createPeople(req.body.people, lobbyFromDb.dataValues.id)
    const peopleFromLobby = await db.Person.findAll({
        where: {
            lobbyId: lobbyFromDb.dataValues.id
        }
    })
    const peopleFromLobbyIds = peopleFromLobby.map(person => {
        return person.dataValues.id
    })
    const peopleFromLobbyIdsArr: number[] = Object.values(peopleFromLobbyIds)
    await createPairs(lobbyFromDb.dataValues.id, peopleFromLobbyIdsArr);
    res.json(new LobbyResponse(lobby.name, people));
}

export default createLobby;