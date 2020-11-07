"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var estado;
(function (estado) {
    estado[estado["undef"] = 0] = "undef";
    estado[estado["ok"] = 1] = "ok";
    estado[estado["notOk"] = 2] = "notOk";
})(estado || (estado = {}));
class Nota {
    constructor(nome, fr) {
        this.offser = 10;
        this.valid = 1.5;
        this.state = estado.undef;
        this.nome = nome;
        this.fr = fr;
    }
    inRange(fr, offset) {
        return fr >= (this.fr - offset / 2) && fr <= (this.fr + offset / 2);
    }
    get Nome() {
        return this.nome;
    }
    get State() {
        return estado[this.state];
    }
    get Fr() {
        return this.fr;
    }
    change(fr) {
        this.state = estado.undef;
        if (this.inRange(fr, this.offser)) {
            this.state = estado.notOk;
            if (this.inRange(fr, this.valid)) {
                this.state = estado.ok;
            }
        }
    }
}
exports.Nota = Nota;
//# sourceMappingURL=Notas.js.map