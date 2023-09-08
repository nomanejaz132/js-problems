// In this exercise you will be writing code to help a freelancer communicate with their clients about the prices of certain projects.
// You will write a few utility functions to quickly calculate the costs for the clients.

// Task 1: Calculate the day rate given an hourly rate.
// A client contacts the freelancer to enquire about their rates.
// The freelancer explains that they work 8 hours a day. However, the freelancer knows only their hourly rates for the project.
// Help them estimate a day rate given an hourly rate.

// The day rate does not need to be rounded or changed to a "fixed" precision.

// The day rate, given a rate per hour

function dayRate(ratePerHour) {
    return ratePerHour * 8;
}

// Task 2: Calculate the number of workdays given a fixed budget.
// Another day, a project manager offers the freelancer to work on a project with a fixed budget.
// Given the fixed budget and the freelancer's hourly rate, help them calculate the number of days they would work until the budget is exhausted.
// The result must be rounded down to the nearest whole number.

// Calculates the number of days in a budget, rounded down

function daysInBudget(budget, ratePerHour) {
    const RATE_OF_A_DAY = dayRate(ratePerHour);
    return Math.floor(budget / RATE_OF_A_DAY);
}

// Task 3: Calculate the discounted rate for large projects.
// Often, the freelancer's clients hire them for projects spanning over multiple months.
// In these cases, the freelancer decides to offer a discount for every full month, and the remaining days are billed at day rate.
// Every month has 22 billable days. Help them estimate their cost for such projects, given an hourly rate, the number of days the project spans,
// and a monthly discount rate. The discount is always passed as a number, where 42% becomes 0.42.
// The result must be rounded up to the nearest whole number.

// Calculates the discounted rate for large projects, rounded up

function priceWithMonthlyDiscount(ratePerHour, numDays, discount) {
    const RATE_OF_A_DAY = dayRate(ratePerHour);
    const DISCOUNT_RATE_OF_A_DAY = RATE_OF_A_DAY - (RATE_OF_A_DAY * discount)
    const MONTHS = Math.floor(numDays / 22);
    const MONTH_DISCOUNT_PRICE = DISCOUNT_RATE_OF_A_DAY * (MONTHS * 22)
    const DAY_PRICE = RATE_OF_A_DAY * (numDays % 22);
    const TOTAL_AMOUNT = Math.round(MONTH_DISCOUNT_PRICE + DAY_PRICE);

    return TOTAL_AMOUNT
}

dayRate(89);
daysInBudget(20000, 89);
priceWithMonthlyDiscount(89, 230, 0.42);