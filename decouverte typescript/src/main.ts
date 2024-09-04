//import {Character} from './character'
import Character from './character'
import { Move } from './move'
import Vector2D from './vector-2d'
// import {Vec} from './character'

const char = new Character()

char.move(new Vector2D(10, 10))

const charMove: Move = new Character()

function moveChara(charMove: Move): void {
    charMove.move(new Vector2D(10, 10))
}



// char.
//char.name = 1 
