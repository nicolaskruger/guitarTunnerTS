"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getFr(dataArray, sampleRate) {
    let data = [...dataArray].sort((a, b) => a - b);
    let max = data[data.length - 1];
    let pos = dataArray.indexOf(max);
    return pos * sampleRate / (data.length * 2);
}
exports.getFr = getFr;
//# sourceMappingURL=getFr.js.map