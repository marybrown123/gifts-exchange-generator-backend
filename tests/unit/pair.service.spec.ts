import sinon from 'sinon'
import { db } from '../../models/sequelize'
import { createPairs } from '../../services/pair.service';

describe('pair.service', () => {
    it('should make pairs', async () => {
        const bulkCreateStub = sinon.stub(db.Pair, 'bulkCreate').resolves([])
        const response = await createPairs(1, [1, 2, 3])
        expect(response.length).toBe(3);
        expect(bulkCreateStub.calledOnce).toBe(true);
        const peopleReceiving: number[] = [];
        const peopleGiving: number[] = [];
        response.forEach((pair) => {
            peopleReceiving.push(pair.personReceivingId);
            peopleGiving.push(pair.personGivingId);
        })
        expect(peopleReceiving.includes(1)).toBe(true);
        expect(peopleReceiving.includes(2)).toBe(true);
        expect(peopleReceiving.includes(3)).toBe(true);
        expect(peopleGiving.includes(1)).toBe(true);
        expect(peopleGiving.includes(2)).toBe(true);
        expect(peopleGiving.includes(3)).toBe(true);
    })
})

