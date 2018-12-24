import { aircrafts, flightReqs, meetsStaffReqs, meetsSpeedRangeReqs} from './airplane';

var displayFuelCapacity = () => {
  aircrafts.forEach(function(element){
  console.log(`Fuel Capacity of ${element.name}: ${element.fuelCapacity}`);
  });
}

function displaySpeedRangeStatus() {
  aircrafts.forEach(function(element) {
   console.log(element.name + ' meets speed range requirements: ' + meetsSpeedRangeReqs(element.maxSpeed, element.minSpeed, flightReqs.requiredSpeedRange));
  });
}

displayFuelCapacity();

displaySpeedRangeStatus();

function displayStaffStatus() {
  aircrafts.forEach(function(element) {
   console.log(element.name + ' meets staff requirements: ' + meetsStaffReqs(element.availableStaff, flightReqs.requiredStaff) );
  });
};

displayStaffStatus();

//Importing named exports that have changed names and how to use the 'as' keyword to change those exports names after export.
