const robot = {
  _energyLevel: 'high',
  recharge(){
    this._energyLevel += 30;
    console.log(`Recharged! Energy is currently at ${this._energyLevel}%.`)
  }
};

robot.recharge();

//How privacy in JavaScript is achieved by naming conventions and the _ is a common shorthand for property names that should not be changed.
