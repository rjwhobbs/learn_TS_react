"use strict";
class TeaKettle {
    constructor(volume) {
        this.volume = volume;
    }
}
class ElecKettle {
    constructor(volume) {
        this.volume = volume;
    }
}
function kettleFact(KettleClass) {
    const kettle = new KettleClass(21);
    // Code
    return kettle;
}
const teaKettle = kettleFact(TeaKettle);
console.log(teaKettle.volume);
