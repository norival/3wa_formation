class Light {
    constructor() {
        this.state = false;
    }

    on() {
        this.state = true;
    }

    off() {
        this.state = false;
    }

    toggle() {
        this.state != this.state;
    }

    toString() {
        return `The light is ${this.state ? 'on' : 'off'}`;
    }
}

class Lamp {
    constructor(light) {
        this.pluggedIn = false;
        this.state     = true;
        this.light     = light;
    }

    plug() {
        this.pluggedIn = true;
        if (this.state) this.light.on();
    }

    unPlug() {
        this.pluggedIn = false;
        this.light.off();
    }

    on() {
        if (!this.pluggedIn) {
            console.warn('WARNING: The lamp is unplugged, it will not work');
            this.state = true;
            return ;
        }

        this.light.on();
    }

    off() {
        this.state = false;
        this.light.off();
    }

    toggle() {
        console.warn('WARNING: The lamp is unplugged, it will not work');
        this.light.toggle();
    }

    toString() {
        return `The lamp is${this.pluggedIn ? '' : ' not'} plugged in and it is switched ${this.light.state ? 'on' : 'off'}`;
    }
}

const lamp = new Lamp(new Light());
lamp.on();
lamp.plug();
console.log(`La lampe : ${lamp}`);
console.log(`La lumière : ${lamp.light}`);
lamp.off();
console.log(`La lampe : ${lamp}`);
console.log(`La lumière : ${lamp.light}`);
