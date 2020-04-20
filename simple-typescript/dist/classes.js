"use strict";
class Robot {
    constructor(name) {
        this.name = name;
    }
    askName() {
        console.log('Robot name: ' + this.name);
    }
    move(distance) {
        console.log(this.name + " moved " + distance + " meters.");
    }
}
const robot = new Robot('Joe');
robot.askName();
class FlyingRobot extends Robot {
    constructor(name) {
        super(name); // Super refers to the constructor of the parent class
    }
    move(distance) {
        console.log(this.name + ' is flying');
        super.move(distance); // Calling parent class method
    }
}
