//import {Character} from './character'
import { Path } from 'd3'
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

type NumberOrUndefined = number | undefined
type NumberOrUndefinedOrNull = NumberOrUndefined | null
const position: NumberOrUndefined = undefined

class Weapon {
    strength: NumberOrUndefinedOrNull
    magicalPower ?: number
}

const weapon = new Weapon()
weapon.strength = undefined

const weapon2: Weapon = {
    strength: null
}

type NamesAvailables = 'Sam' | 'Frodo' 

function setNameOfHobbit(surname: NamesAvailables): void {
    char.name = surname
}
setNameOfHobbit('Frodo')

function useNameOfHobit(name: NamesAvailables): void {
    console.info(name)
}

enum Names {
    'Frodo',
    'Sam',
    // 'Bilbo' = 1
}

function useNames(name: Names) {
    console.info(name)
}
const name: Names = Names.Sam


// const path: Path = {
    
// }