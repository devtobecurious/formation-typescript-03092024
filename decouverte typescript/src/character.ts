import Vector2D from './vector-2d'
import {Move} from './move'

export default class Character implements Move {
    // #name = 'Frodo'
    private  name = 'Frodo'
    private position = new Vector2D(10, 10)

    // move() {
    //     // console.log(this.#name)
    //     console.log(this.name)
    // }

    move(position: Vector2D): void {
        throw new Error('Method not implemented.')
    }
}

// // visible dans ce fichier
// class Vector2D {

// }