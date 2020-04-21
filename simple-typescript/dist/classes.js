"use strict";
class Robot {
    constructor(name, color) {
        this._name = name;
        this._color = color;
    }
    static isColorAvai(color) {
        return Robot.availableColors.includes(color);
    }
    // If we have a few props to define we can do that in the constructor args
    // constructor(protected name: string) {} // This has the same effect as the above
    // Even defining this.name for us
    askName() {
        console.log('Robot name: ' + this.name);
    }
    move(distance) {
        console.log(this.name + " moved " + distance + " meters.");
    }
    set color(color) {
        if (!Robot.isColorAvai(color)) {
            throw new Error(color + " not available");
        }
        this._color = color;
    }
    get color() {
        return this._color;
    }
    set name(value) {
        this._name = value;
    }
    get name() {
        return this._name;
    }
}
Robot.availableColors = ['green', 'yellow'];
const robot = new Robot('Joe', 'green');
robot.name = 'Mike';
console.log(robot.color);
robot.askName();
// robot.color = 'black'; // throws error because color not available
console.log(robot.color);
class FlyingRobot extends Robot {
    constructor(name, color, jetpackSize) {
        super(name, color); // Super refers to the constructor of the parent class
        this.jetpackSize = jetpackSize;
    }
    move(distance) {
        console.log(this.name + ' is flying');
        super.move(distance); // Calling parent class method
    }
}
const flyingRobot = new FlyingRobot('Tom', 'yellow', 42);
flyingRobot.move(99);
flyingRobot.name = "kevin";
flyingRobot.askName();
// ts classes have two sides, Static and instance
