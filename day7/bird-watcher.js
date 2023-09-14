// You are an avid bird watcher that keeps track of how many birds have visited your garden. 
// Usually, you use a tally in a notebook to count the birds but you want to better work with your data. 
// You already digitalized the bird counts per day for the past weeks that you kept in the notebook.

// Now you want to determine the total number of birds that you counted, calculate the bird count for a specific week and correct a counting mistake.

// Note: To practice, use a for loop to solve each of the tasks below.

// Task 1: Determine the total number of birds that you counted so far

// Let us start analyzing the data by getting a high-level view. Find out how many birds you counted in total since you started your logs.
// Implement a function totalBirdCount that accepts an array that contains the bird count per day. It should return the total number of birds that you counted.

function totalBirdCount(birdsPerDay) {
    let count = 0;
    for (let i = 0; i < birdsPerDay.length; i++) {
        count += birdsPerDay[i]
    }
    return count;
}

birdsPerDay = [2, 5, 0, 7, 4, 1, 3, 0, 2, 5, 0, 1, 3, 1];
totalBirdCount(birdsPerDay);

// Task 2: Calculate the number of visiting birds in a specific week

// Now that you got a general feel for your bird count numbers, you want to make a more fine-grained analysis.
// Implement a function birdsInWeek that accepts an array of bird counts per day and a week number. 
// It returns the total number of birds that you counted in that specific week. You can assume weeks are always tracked completely.

function birdsInWeek(birdsPerDay, week) {
    let count = 0;
    let weekRangeStart = (week * 7) - 7;
    let weekRangeEnd = week * 7;

    for (let i = weekRangeStart; i < weekRangeEnd; i++) {
        count += birdsPerDay[i]
    }

    return count;
}

birdsPerDay = [2, 5, 0, 7, 4, 1, 3, 0, 2, 5, 0, 1, 3, 1];
birdsInWeek(birdsPerDay, 2);

// Task 3: Fix a counting mistake

// You realized that all the time you were trying to keep track of the birds, there was one hiding in a far corner of the garden. 
// You figured out that this bird always spent every second day in your garden. 
// You do not know exactly where it was in between those days but definitely not in your garden. 
// Your bird watcher intuition also tells you that the bird was in your garden on the first day that you tracked in your list.
// Given this new information, write a function fixBirdCountLog that takes an array of birds counted per day as an argument. 
// It should correct the counting mistake and return the modified array.

function fixBirdCountLog(birdsPerDay) {
    for (let i = 0; i < birdsPerDay.length; i++) {
        birdsPerDay[i] = birdsPerDay[i] + 1;
        i++;
    }
    return birdsPerDay;
}

birdsPerDay = [2, 5, 0, 7, 4, 1];
fixBirdCountLog(birdsPerDay);