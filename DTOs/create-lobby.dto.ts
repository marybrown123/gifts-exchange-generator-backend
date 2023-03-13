import { IsString } from "class-validator";
import { ArrayMinSize, IsNotEmpty, Matches, MinLength, ValidateIf } from "class-validator/decorator/decorators";
import { ArrayIsNotBlank } from "../common/decorators/array-is-not-blank";
import { IsNotBlank } from "../common/decorators/is-not-blank";

export class CreateLobbyDto {
    @IsNotBlank({
        message: 'Nazwa pokoju nie może być pusta!'
    })
    @IsString()
    name!: string;
    @ArrayMinSize(2, {
        message: 'Podaj nazwy conajmniej dwóch uczestników!'
    })
    @ArrayIsNotBlank({
        message: 'Nazwa uczestnika nie może być pusta!'
    })
    people!: string[]
}