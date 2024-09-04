export interface Fighter {
    attack(fighter: Fighter): void

    receive(value: number): void

    get isAlive(): boolean
}