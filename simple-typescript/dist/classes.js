"use strict";
class Robot {
    constructor(name) {
        this._name = name;
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
    set name(value) {
        this._name = value;
    }
    get name() {
        return this._name;
    }
}
const robot = new Robot('Joe');
robot.name = 'Mike';
robot.askName();
class FlyingRobot extends Robot {
    constructor(name, jetpackSize) {
        super(name); // Super refers to the constructor of the parent class
        this.jetpackSize = jetpackSize;
    }
    move(distance) {
        console.log(this.name + ' is flying');
        super.move(distance); // Calling parent class method
    }
}
const flyingRobot = new FlyingRobot('Tom', 42);
flyingRobot.move(99);
flyingRobot.name = "kevin";
flyingRobot.askName();
