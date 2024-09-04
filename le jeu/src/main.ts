import Character from './domains/models/character'
import {Hobbit} from './domains/models/hobbit'
import {Game} from './domains/game-plays/game'
import { DeathMatch, TwoTurnMatch } from './domains/game-plays/death-match';
// let character: Character = new Character();
const character: Character = new Hobbit(100, 20);
// const isAlive = character.isAlive

const game = new Game(new DeathMatch())
const game2 = new Game(new TwoTurnMatch())

// function displayCharacter(char: Character): void {
//     console.info(char)
//     char.move()
// }
// displayCharacter(character)
