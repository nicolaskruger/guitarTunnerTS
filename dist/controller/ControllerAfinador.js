"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getFr_1 = require("../helper/getFr");
const Afinador_1 = require("../model/Afinador");
const ViewAfinador_1 = require("../view/ViewAfinador");
class ControllerAfinador {
    constructor() {
        this.fre = Math.pow(2, 15);
        this.Constrant = { audio: true };
        this.$ = document.querySelector.bind(document);
        this.main = this.$('main');
        this.afinador = new Afinador_1.Afinador();
        this.viewAfinado = new ViewAfinador_1.ViewAfinador(this.main);
        console.log("afinador");
        if (navigator.mediaDevices.getUserMedia) {
            console.log('getUserMedia supported');
            navigator.mediaDevices.getUserMedia(this.Constrant).then(this.onSuccess.bind(this), this.onError.bind(this));
        }
    }
    visualize(stream) {
        if (!this.audioCtx) {
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
    onSuccess(stream) {
        this.visualize(stream);
    }
    onError(err) {
        console.log('occoreu um erro: ' + err);
    }
    draw() {
        this.analyser.getByteFrequencyData(this.dataArray);
        requestAnimationFrame(this.draw.bind(this));
        const fr = getFr_1.getFr(this.dataArray, this.audioCtx.sampleRate);
        this.afinador.play(fr);
        this.viewAfinado.set(this.afinador);
    }
}
exports.ControllerAfinador = ControllerAfinador;
//# sourceMappingURL=ControllerAfinador.js.map