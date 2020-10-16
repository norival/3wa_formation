class Rectangle {
    constructor(w, h) {
        this._w = w;
        this._h = h;
    }

    get w() {
        return this._w;
    }

    set w(w) {
        this._w = w;
    }

    get h() {
        return this._h;
    }

    set h(h) {
        this._h = h;
    }

    area() {
        return this._w * this._h;
    }

    dim() {
        return `Width: ${this._w}, Height: ${this._h}`;
    }
}

class Square extends Rectangle {
    constructor(s) {
        super(s, s);
    }
}

const square = new Square(30);
console.log(square.area());
console.log(square.dim());
