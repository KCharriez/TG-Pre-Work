import {availableAirplanes, flightRequirements, meetsStaffRequirements, meetsSpeedRangeRequirements} from './airplane.js';

var displayFuelCapacity = () => {
  availableAirplanes.forEach(function(element){
  console.log(`Fuel Capacity of ${element.name}: ${element.fuelCapacity}`);
  });
}

function displaySpeedRangeStatus() {
  availableAirplanes.forEach(function(element) {
   console.log(element.name + ' meets speed range requirements: ' + meetsSpeedRangeRequirements(element.maxSpeed, element.minSpeed, flightRequirements.requiredSpeedRange));
  });
}

displayFuelCapacity();

displaySpeedRangeStatus();

function displayStaffStatus() {
  availableAirplanes.forEach(function(element) {
   console.log(element.name + ' meets staff requirements: ' + meetsStaffRequirements(element.availableStaff, flightRequirements.requiredStaff) );
  });
};

displayStaffStatus();

//More practice on named imports.
