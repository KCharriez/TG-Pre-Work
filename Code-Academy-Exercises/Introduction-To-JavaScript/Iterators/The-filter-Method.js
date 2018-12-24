const randomNumbers = [375, 200, 3.14, 7, 13, 852];

// Call .filter() on randomNumbers below

const smallNumbers = randomNumbers.filter(rando => {
  return rando < 250;
})

const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];

// Call .filter() on favoriteWords below

const longFavoriteWords = favoriteWords.filter(faves => {
  let length = faves.length;
  return length > 7;
})

//Using the .filter() method to return an array without specified parameters with a quick function.
