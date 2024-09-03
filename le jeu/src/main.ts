import Character from './domains/models/character'
import {Hobbit} from './domains/models/hobbit'

// let character: Character = new Character();
const character: Character = new Hobbit(100, 20);
const isAlive = character.isAlive


function displayCharacter(char: Character): void {
    console.info(char)
    char.move()
}
displayCharacter(character)
