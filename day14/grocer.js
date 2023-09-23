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