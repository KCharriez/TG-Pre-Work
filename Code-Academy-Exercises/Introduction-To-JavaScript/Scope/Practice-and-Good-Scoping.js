const logVisibleLightWaves = () => {
  let lightWaves = 'Moonlight';
	let region = 'The Arctic';

  if (region === 'The Arctic') {
    let lightWaves = 'Northern Lights';
    console.log(lightWaves);
  }

  console.log(lightWaves);
};

logVisibleLightWaves();
//How to avoid scope pollution by being mindful of where to put and instance variables.
