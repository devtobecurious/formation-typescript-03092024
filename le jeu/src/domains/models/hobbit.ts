import Character from "./character";

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
    
    attack(): void {
        super.attack()
        console.info('et je saute')
    }

    
}