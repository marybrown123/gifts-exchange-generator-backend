import { PersonResponse } from "./person.response";

export class PairResponse {
    constructor(personGiving: PersonResponse, personReceiving: PersonResponse) {
        this.personGiving = personGiving;
        this.personReceiving = personReceiving;
    }
    personGiving: PersonResponse;
    personReceiving: PersonResponse;
}