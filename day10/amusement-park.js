// It is your job to provide and maintain parts of the IT system of an amusement park. In particular, you are responsible for the program that manages 
// visitors and tickets.

// First, you will create a new visitor in the system. Then you will provide a function for revoking a ticket. In tasks 3 and 4, 
// you will work on the ticket tracking system that helps to prevent forgery. Lastly, you will help adapt the system to new legal requirements.

// Task 1: Create a new visitor

// When visitors come to the amusement park for the first time, they need to register by entering their name and age in a terminal and agreeing 
// to the terms and conditions. Of course, they also need to buy a ticket. Each ticket has an identifier like H32AZ123.

// Write a function createVisitor that accepts three arguments.

// The name of the visitor.
// The age of the visitor.
// The identifier of the ticket that the visitor bought.

// The function should return an object that holds this information. The keys in the object should be called name, age and ticketId

function createVisitor(name, age, ticketId) {
    const visitor = {
        name: name,
        age: age,
        ticketId: ticketId
    }
    return visitor;
}

createVisitor('Verena Nardi', 45, 'H32AZ123');

// Task 2: Revoke the ticket

// When people leave the amusement park, their ticket gets revoked. If they come back, they need to buy a new one. To save regular visitors some time,
// they only need to register once and the visitor information will be kept for subsequent visits.
// That means when a visitor leaves the park, only their ticket should be invalidated but the rest of the visitor object should stay the same.
// Implement the function revokeTicket that accepts a visitor object, sets the ticket identifier to null and returns the object afterwards.

function revokeTicket(visitor) {
    visitor.ticketId = null;
    return visitor
}

const visitor = {
    name: 'Verena Nardi',
    age: 45,
    ticketId: 'H32AZ123',
};

revokeTicket(visitor);

// Task 3: Determine the ticket status

// To prevent forgery, the ticket identifiers are unique. Once a ticket is printed, its identifier is added as a key in an object in the system
// so it can be tracked.

// Before the ticket is sold to a visitor, it is stored with the value null in the ticket tracking object. When it is sold to a visitor, 
// the visitor's name is assigned as a value. When employees have doubts about the validity of a ticket, they need to check the status of the ticket 
// in the system.

// Implement a function ticketStatus that accepts the tracking object and a ticket identifier as arguments. It should return one of the following results.

// 'unknown ticket id' if the identifier was not found in the tracking object
// 'not sold' in case the ticket was printed but not sold
// 'sold to {name}' where {name} is the name of the visitor if the ticket was sold

export function ticketStatus(tickets, ticketId) {
    console.log(tickets, "tickets")
    if (!tickets.hasOwnProperty(ticketId)) {
        return "unknown ticket id"
    } else if (tickets[ticketId] === null) {
        return tickets[ticketId] ?? "not sold"
    } else {
        return `sold to ${tickets[ticketId]}`;
    }
}

const tickets = {
    '0H2AZ123': null,
    '23LA9T41': 'Verena Nardi',
};

ticketStatus(tickets, 'RE90VAW7');
ticketStatus(tickets, '0H2AZ123');
ticketStatus(tickets, '23LA9T41');