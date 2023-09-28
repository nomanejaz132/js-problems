// Elyse, magician-to-be, continues her training. She has a deck of cards she wants to manipulate.
// To make things easier, she usually only starts with cards numbered 1 to 10, although some of the tricks may involve additional cards.

// Task 1: Get the first card

// Elyse will summon the first card in the deck without using the array[index] or .shift(). It's just like magic.

const deck = [10, 7, 3, 8, 5];

function getFirstCard(deck) {
  const [firstElement] = deck;
  return firstElement
}

getFirstCard(deck);

// Task 2: Get the second card

// Elyse performs sleight of hand and summons the second card in the deck without using the array[index].

export function getSecondCard(deck) {
  const [first, second] = deck;
  return second;
}

getSecondCard(deck);

// Task 3: Swap the first two cards

// Elyse will make the top two cards of the deck switch places. She doesn't need to call a single function.

function swapTopTwoCards(deck) {
  const [first, second, ...restElements] = deck;
  return [second, first, ...restElements]
}

swapTopTwoCards(deck);

// Task 4: Discard the top card

// Elyse will separate the deck into two piles. The first pile will contain only the top card of the original deck, 
// while the second pile will contain all the other cards.

function discardTopCard(deck) {
  const [first, ...restElements] = deck;
  return [first, [...restElements]];
}

discardTopCard(deck);

// Task 5: Insert face cards

// Elyse will insert a set of face cards (i.e. jack, queen, and king) into her deck such that they become the second, third, and fourth cards, respectively.

function insertFaceCards(deck) {
  const [first, ...restElements] = deck;
  return [first, ...FACE_CARDS, ...restElements]
}

insertFaceCards(deck);
