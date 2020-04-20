class Robot {
  private _color: string; // This cannot be accessed by the child class
  private static availableColors = ['green', 'yellow'];
  static isColorAvai(color: string) {
    return Robot.availableColors.includes(color);
  }
  protected _name: string;

  constructor(name: string, color: string) {
    this._name = name;
    this._color = color;
  }
  // If we have a few props to define we can do that in the constructor args
  // constructor(protected name: string) {} // This has the same effect as the above
  // Even defining this.name for us

  askName() {
    console.log('Robot name: ' + this.name);
  }

  move(distance: number) {
    console.log(this.name + " moved " + distance + " meters.");
  }

  set color(color: string) {
    if (!Robot.isColorAvai(color)) {
      throw new Error(color + " not available");
    }
    this._color = color;
  }

  get color() {
    return this._color;
  }

  set name(value: string) { // This method is called like this var.name = 'foo';
    this._name = value;
  }

  get name() {
    return this._name;
  }
}

const robot = new Robot('Joe', 'green');
robot.name = 'Mike';
robot.askName();
robot.color = 'black';
console.log(robot.color); // throws error because color not available

class FlyingRobot extends Robot {
  private readonly jetpackSize: number; // Once the size is set inside the constructor we cannot change this value

  constructor(name: string, color: string,jetpackSize: number) {
    super(name, color); // Super refers to the constructor of the parent class
    this.jetpackSize = jetpackSize;
  }

  move(distance: number) {
    console.log(this.name + ' is flying');
      super.move(distance); // Calling parent class method
  }
}

const flyingRobot = new FlyingRobot('Tom', 'yellow', 42);
flyingRobot.move(99);
flyingRobot.name = "kevin";
flyingRobot.askName();

// ts classes hve two sides, Static and instance
