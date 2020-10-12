class Letter {
    constructor(character) {
        this.character = character;
        this.guessed = !/[a-z1-9]/i.test(char);
    }

    toString() {
        if (this.guessed) {
            return this.character;
        }
        else {
            return "_";
        }
    }

    guess(char) {
        if (this.character.toLowerCase() === char.toLowerCase()) {
            this.guessed = true;
            return true;
        }
    }

    getSolution() {
        return this.character;
    }
}

module.exports = Letter;