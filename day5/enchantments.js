// As a magician-to-be, Elyse needs to practice some basics. She has a stack of cards that she wants to manipulate.

// To make things a bit easier she only uses the cards 1 to 10 so her stack of cards can be represented by an array of numbers.
// The position of a certain card corresponds to the index in the array.
// That means position 0 refers to the first card, position 1 to the second card etc.

// Note: All functions should update the array of cards and then return the modified array - a common way of working known as the Builder pattern, 
// which allows you to nicely daisy-chain functions together.

// Task 1: Retrieve a card from a stack
// To pick a card, return the card at index position from the given stack.

function getItem(cards, position) {
    return cards[position]
}

const position = 2;
getItem([1, 2, 4, 1], position);

// Task 2: Exchange a card in the stack
// Perform some sleight of hand and exchange the card at index position with the replacement card provided. Return the adjusted stack.

function setItem(cards, position, replacementCard) {
    cards[position] = replacementCard;
    return cards
}

const position = 2;
const replacementCard = 6;
setItem([1, 2, 4, 1], position, replacementCard);

// Task 3: Insert a card at the top of the stack
// Make a card appear by inserting a new card at the top of the stack. Return the adjusted stack.

function insertItemAtTop(cards, newCard) {
    cards.push(newCard)
    return cards
}

const newCard = 8;
insertItemAtTop([5, 9, 7, 1], newCard);

// Task 4: Remove a card from the stack
// Make a card disappear by removing the card at the given position from the stack. Return the adjusted stack.

function removeItem(cards, position) {
    console.log(cards.splice(position, 1))
    return cards
}

const position = 2;
removeItem([3, 2, 6, 4, 8], position);

// Task 5: Remove the top card from the stack
// Make a card disappear by removing the card at the top of the stack. Return the adjusted stack.

function removeItemFromTop(cards) {
    cards.pop()
    return cards
}

removeItemFromTop([3, 2, 6, 4, 8]);

// Task 6: Insert a card at the bottom of the stack
// Make a card appear by inserting a new card at the bottom of the stack. Return the adjusted stack.

function insertItemAtBottom(cards, newCard) {
    cards.unshift(newCard)
    return cards
}

const newCard = 8;
insertItemAtBottom([5, 9, 7, 1], newCard);

// Task 7: Remove a card from the bottom of the stack
// Make a card disappear by removing the card at the bottom of the stack. Return the adjusted stack.

function removeItemAtBottom(cards) {
    cards.shift()
    return cards
}

removeItemAtBottom([8, 5, 9, 7, 1]);

// Task 8: Check the size of the stack
// Check whether the size of the stack is equal to stackSize or not.

function checkSizeOfStack(cards, stackSize) {
    return cards.length === stackSize
}

const stackSize = 4;
checkSizeOfStack([3, 2, 6, 4, 8], stackSize);