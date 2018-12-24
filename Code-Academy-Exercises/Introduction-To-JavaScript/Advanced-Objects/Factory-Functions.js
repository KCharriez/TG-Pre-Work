function robotFactory(model, mobile) {
  return {
    model: model,
    mobile: mobile,
    beep() {
      console.log('Beep Boop')
    }
  }
}

const tinCan = robotFactory('P-500', true);

tinCan.beep();

//Using parameters inside of functions to create a template for objects to use and be quickly created.
