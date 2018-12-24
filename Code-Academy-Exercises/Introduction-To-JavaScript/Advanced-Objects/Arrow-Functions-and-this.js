const robot = {
  energyLevel: 100,
  checkEnergy(){
    console.log(`Energy is currently at ${this.energyLevel}%.`)
  }
}

robot.checkEnergy();

//How arrow functions differ from regular functions by binding to a global function and not the local object. Basically arrow functions and this keywords dont go together. Another mistake of mine earlier.
