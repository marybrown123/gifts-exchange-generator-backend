import { db } from '../models/sequelize'
import { Request, Response } from "express";
import { PersonResponse } from '../responses/person.response';
import randomstring from "randomstring";
const Person = db.Person;

const createPeople = async (people: string[], lobbyId: number) => {
    const peopleForDb = await Promise.all(people.map(async person => {
        const hash = randomstring.generate({
            length: 20,
            charset: 'alphabetic'
        });
        return {
            name: person, 
            lobbyId,
            hash
        }
    }));
    await Person.bulkCreate(peopleForDb)
    const peopleToReturn = peopleForDb.map(person => {
        return new PersonResponse(person.name, person.lobbyId, person.hash)
    })
    return peopleToReturn;
}

export default createPeople;