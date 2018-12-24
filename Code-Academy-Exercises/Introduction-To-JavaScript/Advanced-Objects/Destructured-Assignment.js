const robot = {
  model: '1E78V2',
  energyLevel: 100,
  functionality: {
    beep() {
      console.log('Beep Boop');
    },
    fireLaser() {
      console.log('Pew Pew');
    },
  }
};

const { functionality } = robot;
console.log(functionality);
console.log(functionality.beep());

//How to declare varibles to use in extracting with less work by putting them in curly braces. How those new varibles can also access functions within the parent object.
