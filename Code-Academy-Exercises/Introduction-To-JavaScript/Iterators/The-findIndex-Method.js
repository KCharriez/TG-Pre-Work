const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];

const foundAnimal = animals.findIndex(critters => {
  return critters === 'elephant';
});

const startsWithS = animals.findIndex(critters => {
  return critters[0] === 's';
})

//How to iterate through an array and find the first location of a specific element called using the .findIndex().
