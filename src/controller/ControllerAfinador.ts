import {getFr} from '../helper/getFr';
import {Afinador} from '../model/Afinador';
import {ViewAfinador} from '../view/ViewAfinador';
export class ControllerAfinador{
    private audioCtx:AudioContext;
    private analyser:AnalyserNode;
    private dataArray:Uint8Array;
    private fre:number = Math.pow(2,15);
    private Constrant = {audio:true};
    
    private $ = document.querySelector.bind(document);
    private main:HTMLElement = this.$('main');

    private afinador:Afinador = new Afinador();
    private viewAfinado: ViewAfinador = new ViewAfinador(this.main);

    constructor(){
        console.log("afinador");
        if (navigator.mediaDevices.getUserMedia){
            console.log('getUserMedia supported')
            navigator.mediaDevices.getUserMedia(this.Constrant).then(this.onSuccess.bind(this),this.onError.bind(this));
        }
    }
    visualize(stream:MediaStream){
        if(!this.audioCtx){
            this.audioCtx = new AudioContext();
        }
        const source = this.audioCtx.createMediaStreamSource(stream);
        this.analyser = this.audioCtx.createAnalyser();
        this.analyser.fftSize = this.fre;
        const bufferLength = this.analyser.frequencyBinCount;
        this.dataArray = new Uint8Array(bufferLength);
        source.connect(this.analyser);
        this.draw();
    }
    onSuccess(stream:MediaStream){
        this.visualize(stream);
    }
    onError(err:Error){
        console.log('occoreu um erro: ' + err);
    }
    
    draw(){
        this.analyser.getByteFrequencyData(this.dataArray);
        requestAnimationFrame(this.draw.bind(this));

        const fr = getFr(this.dataArray,this.audioCtx.sampleRate);
        this.afinador.play(fr);
        this.viewAfinado.set(this.afinador)
    }
}