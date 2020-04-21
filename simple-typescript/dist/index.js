"use strict";
// Generics
// Generic functions
function genericFunc(x) {
    return x;
}
const genArrowFunc = (x) => x;
// We can use gen type params only on instance side of class
class GenClass {
    constructor(props) {
        this.props = props;
    }
    getProps() {
        return this.props;
    }
}
