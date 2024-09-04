export interface Fighter {
    attack(fighter: Fighter): void

    get isAlive(): boolean
}