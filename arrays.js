var friends = ["Tim", "Sue", "Fran", "Bob"];
var ages = [4, 7, 10, 12];
var bool = [true, true, false, true];

// the unshift arrya method will add  the string "Primo" to the beginning of the friends array
friends.unshift("Primo");

// the shift array method will remove the first knumber from the ages array
ages.shift();

// the pop array method will remove the last element from the bool array
bool.pop();

// index positions relate to the order of the elements in an array
// the positions start with position 0
// in the array ["Tim", "Luke", "Mary"], "Tim" is in position 0, "Luke" is in pos 1, and "Mary" is in pos 2
// these position numbers are helpful in defining which elements will be acted upon
// for example:  calling slice(1, 3) will clip positions 1 and 2, but not 0 or 3