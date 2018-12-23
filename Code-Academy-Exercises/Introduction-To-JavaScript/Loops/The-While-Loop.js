const cards = ['diamond', 'spade', 'heart', 'club'];

// Write your code below

let currentCard;

while (currentCard != 'spade'){
  currentCard = cards[Math.floor(Math.random() * 4)];
	console.log(currentCard);
}

//An introduction to the while loop, which can help with boolean conditions but can also easily lead to infinite loops.
