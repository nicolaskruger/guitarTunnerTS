export function getFr(dataArray:Uint8Array,sampleRate:number):number{
    let data = [...dataArray].sort((a,b)=>a-b);
    let max = data[data.length-1];
    let pos = dataArray.indexOf(max);
    return pos*sampleRate/(data.length*2);
}