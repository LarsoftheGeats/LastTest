// Write your code below
// Given a word, return true if that word contains only unique characters. Return false otherwise.

// For example:

// hasUniqueChars("Monday")
// // returns true
// hasUniqueChars("Moonday")
// // returns false
// Uppercase and lowercase letters should be considered separately:

// hasUniqueChars("Bob")
// // returns true

function hasUniqueChars(word){
 
    ///*pseudo code*/
    //repeat til word === ""
    let str1=word.split('');
    let destination = []
    //console.log(str1)
    while (str1.length>0 ){
  
    let letter = str1.pop();
    //does dest contain var ->yes return false -> no continue
    if (destination.includes(letter)){
        return false;
    }
    destination.push(letter);
    }return true;

    //destination array = dest
    //var=word.pop(). 
    //does dest contain var ->yes return false -> no continuecle
 }

 //This is O(n^2) as the .includes function is itself linear, so we will run n operations each having a time complexity 
 //themselves of n.
 
//Ex. cred
//this has spce complexity of n, a new array size n is made, and a nother array of size n( destination) is also made
 console.log(hasUniqueChars("Monday"))
 console.log(hasUniqueChars("Moonday"))
 console.log(hasUniqueChars("2sday"))

