import Airplane from './airplane';

var displayFuelCapacity = () => {
  Airplane.availableAirplanes.forEach(function(element){
  console.log(`Fuel Capacity of ${element.name}: ${element.fuelCapacity}`);
  });
}

displayFuelCapacity();

//How to access information from external modules using import statements.
