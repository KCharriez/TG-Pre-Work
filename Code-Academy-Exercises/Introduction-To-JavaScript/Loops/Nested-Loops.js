// Write your code below

let bobsFollowers = ['Kyle', 'Kenny', 'Stan', 'Cartman'];

let tinasFollowers = ['Kenny', 'Maya', 'Kyle'];

let mutualFollowers = [];

for (let i = 0; i < bobsFollowers.length; i++){
  for (let j = 0; j < tinasFollowers.length; j++){
    if (bobsFollowers[i] === tinasFollowers[j]) {
      mutualFollowers.push(bobsFollowers[i]);
      console.log(mutualFollowers);
    }
  }
}

//The introduction of having for loops inside other loops.
