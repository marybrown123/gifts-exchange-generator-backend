import sinon from "sinon"
import { db } from "../../models/sequelize"
import randomstring from "randomstring";
import { createPeople } from "../../services/person.service";

describe('person.service', () => {
    it('should create people', async () => {
        const bulkCreateStub = sinon.stub(db.Person, 'bulkCreate').resolves([]);
        const generateStub = sinon.stub(randomstring, 'generate').returns('abcde');
        const response = await createPeople(['Marysia', 'Kamil', 'Grzesio'], 1);
        expect(bulkCreateStub.calledOnce).toBe(true);
        expect(generateStub.calledThrice).toBe(true);
        expect(response.length).toBe(3);
        expect(response[0].name).toBe('Marysia')
        expect(response[1].name).toBe('Kamil')
        expect(response[2].name).toBe('Grzesio')
        response.forEach((person) => {
            expect(person.lobbyId).toBe(1);
            expect(person.hash).toBe('abcde');
        })
    })
})