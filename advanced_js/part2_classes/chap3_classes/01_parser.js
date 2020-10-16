class Parser {
    constructor(motif) {
        this._motif = motif;
        this._str = '';
    }

    get motif() {
        return this._motif;
    }

    get str() {

        return this._str.join(' ');
    }

    parse(phrase) {
        this._str = phrase.split( this._motif ).map( word => word.trim() );
        // ALGO
        this._str = this._str.filter(Number);
    }
}

const parser = new Parser(':');
parser.parse('8790: bonjour le monde:8987:7777:Hello World:    9007');
console.log(parser.motif);
console.log(parser.str);
