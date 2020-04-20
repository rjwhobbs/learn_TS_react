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
  constructor(name: string) {
    super(name); // Super refers to the constructor of the parent class
  }
}