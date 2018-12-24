

let availableAirplanes = [
{
  name: 'AeroJet',
  fuelCapacity: 800,
  availableStaff: ['pilots', 'flightAttendants', 'engineers', 'medicalAssistance', 'sensorOperators']
 },
 {name: 'SkyJet',
  fuelCapacity: 500,
  availableStaff: ['pilots', 'flightAttendants']
 }
];

let flightRequirements = {
  requiredStaff: 4
};

function meetsStaffRequirements(availableStaff, requiredStaff) {
  if (availableStaff.length >= requiredStaff) {
    return true;
  } else {
    return false;
  }
};
//The instructions program really doesn't like it when I use '=>'.

export { availableAirplanes, flightRequirements, meetsStaffRequirements };

//The syntax for exporting portions of the module through named exports.
