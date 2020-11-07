import {View} from './View';
import {Afinador} from '../model/Afinador';
export class ViewAfinador extends View{
    protected template(model:Afinador){
        return `<div class="frequencia">
                    <h2> ${model.Fr.toFixed(2)} Hz</h2>
                </div>
                <div class="cordas">
                ${model.Notas.map(n=>`
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
                `
    }
}