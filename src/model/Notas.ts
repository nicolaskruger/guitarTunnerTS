enum estado{
    undef,
    ok,
    notOk
}
export class Nota{
    private nome:string;
    private fr:number;
    private offser:number = 10;
    private valid:number = 1.5;
    private state:estado= estado.undef;
    constructor(nome:string,fr:number){
        this.nome = nome;
        this.fr = fr;
    }
    private inRange(fr,offset){
        return fr>=(this.fr-offset/2)&&fr<=(this.fr+offset/2);
    }
    get Nome(){
        return this.nome;
    }
    get State(){
        return estado[this.state];
    }
    get Fr(){
        return this.fr;
    }
    change(fr:number){
        this.state = estado.undef;
        if(this.inRange(fr,this.offser)){
            this.state = estado.notOk;
            if(this.inRange(fr,this.valid)){
                this.state = estado.ok;
            }
        }
    }
}