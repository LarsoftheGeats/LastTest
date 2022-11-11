//function that takes  in a string word
function findLongestWord(arr) {
    let longest = 0
    for (let i =0; i <arr.length; i++){
        let currentWordL=arr[i].length//length of the current string I'm looking at
        if (currentWordL>longest){
            longest=currentWordL
        }
    }
    return longest
}

console.log(findLongestWord(["hi", "hello"]))
console.log(findLongestWord(["hi", "hello", "howareyou"]))//9
console.log(findLongestWord(["hi", "hello", "howareyou", "iwaswondering"]))//13

//this has complexity n.  it only passes through the array once, and updates the value longest word as we iterate 
//through the loop

//ex. cred
//this has constant space complexity, 3 in this case, i create integer i, integer longest, and integer currentWordL.  