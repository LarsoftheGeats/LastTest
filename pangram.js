function isPangram (phrase) {
    phrase=phrase.toLowerCase()
    let alphObj = {
        'a': false, 'b': false, 'c':false, 'd':false, 
        'e': false, 'f': false, 'g':false, 'h':false, 'i':false,
        'j': false, 'k': false, 'l':false, 'm':false, 'n':false,
        'o': false, 'p': false, 'q':false, 'r':false, 's':false,
        't': false, 'u': false, 'v':false, 'w':false, 'x':false,
        'y': false, 'z': false
    }
    for (let i = 0; i< phrase.length; i++){
        alphObj[`${phrase[i]}`]=true
    }
    // console.log(alphObj)//testing purpsoses

    //97 is char code for a 122 is z
    let allLetters=true;
    for (let j = 97; j < 123; j++){
        allLetters=allLetters&&alphObj[`${String.fromCharCode(j)}`]
        // console.log(String.fromCharCode(j))//testing purposes
        // console.log(alphObj[`${String.fromCharCode(j)}`])
    }
    //this only returns true if all letters are true.  This is essentially an object of flags stating is the letter there
    //console.log(allLetters)
    return (allLetters)
}

//This has complexity O(n) this passes through the loop once, then has 26 operations to ensure all the flags are true.
//ex. cred
//this has constant space complexity, i create an object of size 26
console.log(isPangram("hi"))
console.log(isPangram("The quick brown fox jumps over the lazy dog!"))