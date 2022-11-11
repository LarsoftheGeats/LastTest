// Starting array
let arr1 = [1, 4, 11, 2, 37, -4]
let arr2 = [0, 21, 33, 6, 0, -9]
let arr3 = [0, 1, 2, 3, 4, 5]
// Write your solutionbelow:

function myFunction(array){
    for (let i = 0; i < array.length; i++){
        for (let j = i+1; j < array.length; j++){
            if (array[i]+array[j]=== 0)
            {
                return(true);
            }
        }
    
    }
    return false
}

//i copied my code from the morning exercises week2D1.  
//I believe this is O(n^2) since there are doubly nested for loops.
//The if statement on line 10 is a bit of a red herring, in general we should assume the worst case
//which would be an array with no solution. 

//extra credit
//this has  space complexity zero as no new variables are created

console.log(myFunction(arr1))
console.log(myFunction(arr2))
console.log(myFunction(arr3))