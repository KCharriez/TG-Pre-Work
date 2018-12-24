/*First Attempt:

import {availableAirplanes, flightRequirements, meetsStaffRequirements} from './airplane';

var displayFuelCapacity = () => {
  availableAirplanes.forEach(function(element){
  console.log(`Fuel Capacity of ${element.name}: ${element.fuelCapacity}`);
  });
}

displayFuelCapacity();

function displayStaffStatus() {
  availableAirplanes.forEach(function(element) {
  console.log(`${element.name} meets staff requirements: ${meetsStaffRequirements(element.availableStaff, flightRequirements.requiredStaff)}`);
};

displayStaffStatus();*/

import {availableAirplanes, flightRequirements, meetsStaffRequirements} from './airplane';

function displayFuelCapacity() {
  availableAirplanes.forEach(function(element) {
    console.log('Fuel Capacity of ' + element.name + ': ' + element.fuelCapacity);
  });
}

displayFuelCapacity();

function displayStaffStatus() {
  availableAirplanes.forEach(function(element) {
   console.log(element.name + ' meets staff requirements: ' + meetsStaffRequirements(element.availableStaff, flightRequirements.requiredStaff) );
  });
};

displayStaffStatus();

//How to access properties and other data from modules using named imports.
