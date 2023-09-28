// You are creating a new online portal for your patrons to order their fruit fresh from the grocer. 
// The grocer has an API that you can use to see if they have the inventory desired by your customers. 
// You need to create a small library of functions for interacting with the grocer's API.

// Task 1: Create a callback to be called when the order is successful

// Write a callback function called onSuccess to be called when the order is successful. 
// It should invoke the imported notify function passing a success message to it.

import { notify } from './notifier';
import { order } from './grocer';

function onSuccess() {
  notify({ "message": "SUCCESS" });
}

onSuccess();

// Task 2: Create a callback to be called when the order fails with an error

// Write a callback function called onError to be called when the order encounters an error. 
// It should invoke the imported notify function passing an error message to it.

export function onError() {
  notify({ "message": "ERROR" });
}

onError();

// Task 3: Create a wrapper to wrap the external api function

// The grocer's API provides a function to order from their inventory called order. It receives three arguments: 
// a query, a callback function to be invoked when the order is successful, and a callback function to be invoked when the order encounters an error. 
// You decide to wrap the api function call in a newly defined function orderFromGrocer to insulate your codebase from external changes. 
// Your function should forward the arguments (which match the provided api function) to the api function.

export function orderFromGrocer(query, onSuccessCallback, onErrorCallback) {
  order(query, onSuccessCallback, onErrorCallback)
}

orderFromGrocer(
  { variety: 'pear', quantity: 12 },
  exampleSuccessCallback,
  exampleErrorCallback,
);

// Task 4: Create a convenient short fucntion

// You find that you are calling this function from many different places with the same functions. Seeing an opportunity to refactor your code, 
// you want to create a function where you can supply the variety and quantity to order as arguments.

export function postOrder(variety, quantity) {
  orderFromGrocer({ variety, quantity }, onSuccess, onError)
}

postOrder('peach', 100);