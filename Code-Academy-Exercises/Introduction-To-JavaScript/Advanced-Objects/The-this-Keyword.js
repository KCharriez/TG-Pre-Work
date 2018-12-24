const robot = {
  model: '1E78V2',
  energyLevel: 100,
  provideInfo(){
    return `I am ${this.model} and my current energy level is ${this.energyLevel}.`
  }
};

console.log(robot.provideInfo());

//Using the 'this' keyword to reference properties inside an object that otherwise wouldn't have access. Also this explains a lot of the errors I was having before!
