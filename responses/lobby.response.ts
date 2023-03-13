import createPeople from "../services/person.service";
import { PersonResponse } from "./person.response";

export class LobbyResponse {
    constructor(name: string, people: PersonResponse[]) {
        this.name = name
        this.people = people
    }  
    name: string;
    people: PersonResponse[]
}