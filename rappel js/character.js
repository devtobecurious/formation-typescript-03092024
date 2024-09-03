/**
 * klgflgjdfl
 */
export class Character { // esm => <script type="module" src="">
    #prenom = ''

    constructor(prenom) {
        this.#prenom = prenom
    }

    move() {
        console.info('Je me déplace', this)
    }

    get prenom() {
        return this.#prenom
    }

    set prenom(value) {
        this.#prenom = value
    }
}

export class Hobbit extends Character {
    constructor(prenom) {
        super(prenom)
    }
}

export class Orca extends Character {
    constructor(prenom) {
        super(prenom)
    }
}
