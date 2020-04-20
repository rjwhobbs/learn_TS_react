class Robot {
  _color: string;
  static availableColors = ['green', 'yellow'];
  static isColorAvai(color: string) {
    return Robot.availableColors.includes(color);
  }
  protected _name: string;

  constructor(name: string) {
    this._name = name;
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

  set name(value: string) { // This method is called like this var.name = 'foo';
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
  private readonly jetpackSize: number; // Once the size is set inside the constructor we cannot change this value

  constructor(name: string, jetpackSize: number) {
    super(name); // Super refers to the constructor of the parent class
    this.jetpackSize = jetpackSize;
  }

  move(distance: number) {
    console.log(this.name + ' is flying');
      super.move(distance); // Calling parent class method
  }
}

const flyingRobot = new FlyingRobot('Tom', 42);
flyingRobot.move(99);
flyingRobot.name = "kevin";
flyingRobot.askName();