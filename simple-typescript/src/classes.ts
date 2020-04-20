class Robot {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  askName() {
    console.log('Robot name: ' + this.name);
  }

  move(distance: number) {
    console.log(this.name + " moved " + distance + " meters.");
  }
}

const robot = new Robot('Joe');
robot.askName();

class FlyingRobot extends Robot {
  jetpackSize: number;

  constructor(name: string, jetpackSize: number) {
    super(name); // Super refers to the constructor of the parent class
    this.jetpackSize = jetpackSize;
  }

  move(distance: number) {
    console.log(this.name + ' is flying');
      super.move(distance); // Calling parent class method
  }
}