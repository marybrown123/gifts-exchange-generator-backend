import { db } from '../models/sequelize'
import { Request, Response } from "express";
import { CreatePairDto } from '../DTOs/create-pair.dto';

const Pair = db.Pair;

export const createPairs = async (lobbyId: number, peopleIds: number[]) => {
    const peopleIdsCopy = [...peopleIds];
    let personReceivingId: number;
    const pairs = peopleIds.map(personGivingId => {
        do {
            personReceivingId = peopleIdsCopy[Math.floor(Math.random() * peopleIdsCopy.length)]
        } while (personGivingId === personReceivingId)
        peopleIdsCopy.splice(peopleIdsCopy.indexOf(personReceivingId), 1);
        return {
            personGivingId,
            personReceivingId,
            lobbyId
        }    
    })
    await Pair.bulkCreate(pairs);
    return pairs;
}

