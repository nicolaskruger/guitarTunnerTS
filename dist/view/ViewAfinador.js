"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const View_1 = require("./View");
class ViewAfinador extends View_1.View {
    template(model) {
        return `<div class="frequencia">
                    <h2> ${model.Fr.toFixed(2)} Hz</h2>
                </div>
                <div class="cordas">
                ${model.Notas.map(n => `
                <div class=" nota">
                    <div class="${n.State}">
                        
                    </div>
                    <h2>
                        ${n.Nome}
                    </h2>
                    <h2>
                        ${n.Fr} Hz
                    </h2>
                </div>
                `).join('')}
        
           
            </div>
        </div>
                `;
    }
}
exports.ViewAfinador = ViewAfinador;
//# sourceMappingURL=ViewAfinador.js.map