class HospitalEmployee {
  constructor(name, remainingVacationDays) {
    this._name = name;
    this._remainingVacationDays = 20;
  }
  get name() {
    return this._name;
  }
  get remainingVacationDays() {
    return this._remainingVacationDays;
  }

  takeVacationDays() {
    this._remainingVacationDays-=;
  }
}

//How to build methods inside of classes.
