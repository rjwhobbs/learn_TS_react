"use strict";
class TeaKettle {
    constructor(x) {
        this.volume = x;
    }
}
class ElecKettle {
    constructor(volume) {
        this.volume = volume;
    }
}
// A flexible way of creating objects, as long as the constructors match
function kettleFact(KettleClass) {
    const kettle = new KettleClass(21);
    // Code
    return kettle;
}
const teaKettle = kettleFact(TeaKettle);
console.log(teaKettle.volume);
