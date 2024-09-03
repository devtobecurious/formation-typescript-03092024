/**
 * 
 */
// export default class Character {

// }

abstract class Character {
    // seDeplacer(): void {
    //     console.log('je me déplace')
    // }

    constructor(private lifePoint: number) {}

    abstract move(): void

    attack(): void {
        console.info('j\'attaque')
    }

    get isAlive(): boolean {
        return this.lifePoint > 0
    }
}

export default Character;