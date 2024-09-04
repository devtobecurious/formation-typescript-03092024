import { Fighter } from "../models/fighter";

export interface FightRule {
    run(fighter1: Fighter, fighter2: Fighter): void
}

export class DeathMatch implements FightRule {
    run(fighter1: Fighter, fighter2: Fighter): void {
        while(fighter1.isAlive && fighter2.isAlive) {
            fighter1.attack(fighter2)
            fighter2.attack(fighter1)
        }
    }
}

export class TwoTurnMatch implements FightRule {
    run(fighter1: Fighter, fighter2: Fighter): void {
        throw new Error("Method not implemented.");
    }

}