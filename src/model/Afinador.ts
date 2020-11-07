import {Nota} from './Notas';
export   class Afinador{
    private notas:Nota[]=[
        new Nota("Mi",82),
        new Nota("Lá",110),
        new Nota("Ré",146),
        new Nota("Sol",196),
        new Nota("Si",247),
        new Nota("Mi",330)
    ]
    private fr:number = 0; 
    get Fr(){
        return this.fr;
    }
    get Notas(){
        return [...this.notas];
    }
    constructor(){

    }
    play(fr:number){
        this.fr=fr;
        this.notas.forEach(n=>n.change(this.fr));
    }
    
}