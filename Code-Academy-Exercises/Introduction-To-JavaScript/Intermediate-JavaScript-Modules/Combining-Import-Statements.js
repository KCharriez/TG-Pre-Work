import { availableAirplanes, flightRequirements, meetsStaffRequirements} from './airplane';

import meetsSpeedRangeRequirements from './airplane';

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

//How to combine ways to import modules and more practice.
