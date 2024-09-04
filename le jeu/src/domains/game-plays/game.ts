import Character from "../models/character";
import { Hobbit } from "../models/hobbit";
import { Orc } from "../models/orc";
import { FightRule } from "./death-match";

export class Game {
    constructor(private readonly fightRule: FightRule) {}

    run(): void {
        const hobbit: Character = new Hobbit(100, 10)
        const orc: Character = new Orc(60)

        this.fightRule.run(hobbit, orc)
    }
}