//2-airplane.js
var Airplane = {};

module.exports = {
  myAirplane: "CloudJet",
  displayAirplane: function() {
    return this.myAirplane;
  }
};

//2-missionControl.js
const Airplane = require('./2-airplane.js');
//Why is 'const' neccessary here?

console.log(Airplane);

//More practice in writing modules and exposing them. Review on creating keys.
