export class ControllerAfinador{
    private audioCtx:AudioContext;
    private analyser:AnalyserNode;
    private dataArray:Uint8Array;
    private fre:number = Math.pow(2,15);
    private Constrant = {audio:true};
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
        let data = [...this.dataArray].sort((a,b)=>a-b);
        let max = data[data.length-1];
        let pos = this.dataArray.indexOf(max);
        console.log(`${max}, ${pos} ,${pos*this.audioCtx.sampleRate/(data.length*2)}`);
    }
}