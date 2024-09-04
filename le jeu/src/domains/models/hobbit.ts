import Character from "./character";
import { Fighter } from "./fighter";

export class Hobbit extends Character {
    // private lifePoint: number

    // constructor(lifePoint: number) {
    //     super()
    //     this.lifePoint = lifePoint
    // }
    constructor(lifePoint: number, private readonly force: number) {
        super(lifePoint)
    }


    move(): void {
        throw new Error("Method not implemented.")
    }
    
    attack(fighter: Fighter): void {
        // super.attack(fighter)
        fighter.receive(Math.floor(this.force / 10))
    }

    
}