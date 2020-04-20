"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// let something: number = null; // Can't do this as strict null check is true in config
function capIt(str) {
    if (str) {
        return str[0].toUpperCase() + str.substr(1);
    }
}
exports.capIt = capIt;
