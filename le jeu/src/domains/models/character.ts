/**
 * 
 */
// export default class Character {

import { Fighter } from "./fighter";

// }

abstract class Character implements Fighter {
    // seDeplacer(): void {
    //     console.log('je me déplace')
    // }

    constructor(private lifePoint: number) {}

    abstract move(): void

    attack(fighter: Fighter): void {
        const value = Math.floor(Math.random() * 100)
        fighter.receive(value)
    }

    receive(value: number): void {
        this.lifePoint -= value
        if(this.lifePoint < 0) {
            this.lifePoint = 0
        }
    }

    get isAlive(): boolean {
        return this.lifePoint > 0
    }
}

export default Character;