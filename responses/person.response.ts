export class PersonResponse {
    constructor (name: string, lobbyId: number, hash?: string) {
        this.name = name;
        this.lobbyId = lobbyId;
        this.hash = hash;
    }
    name: string;
    lobbyId: number;
    hash?: string;
}