"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Notas_1 = require("./Notas");
class Afinador {
    constructor() {
        this.notas = [
            new Notas_1.Nota("Mi", 82),
            new Notas_1.Nota("Lá", 110),
            new Notas_1.Nota("Ré", 146),
            new Notas_1.Nota("Sol", 196),
            new Notas_1.Nota("Si", 247),
            new Notas_1.Nota("Mi", 330)
        ];
        this.fr = 0;
    }
    get Fr() {
        return this.fr;
    }
    get Notas() {
        return [...this.notas];
    }
    play(fr) {
        this.fr = fr;
        this.notas.forEach(n => n.change(this.fr));
    }
}
exports.Afinador = Afinador;
//# sourceMappingURL=Afinador.js.map