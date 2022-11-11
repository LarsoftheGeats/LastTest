const perf = require('execution-time')();


function doublerAppend(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.push(num);
    }

}


function doublerInsert(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.unshift(num);
    }

}


function getSizedArray(size){
    let array = [];
    for (let i=0; i<size; i++){
        array.push(i);
    }
    return array
}


const tinyArray = getSizedArray(10);
const smallArray = getSizedArray(100);
const mediumArray = getSizedArray(1000);
const largeArray = getSizedArray(10000);
const extraLargeArray = getSizedArray(100000);



// How long does it take to double every number in a given 
// array? 

let resultsAppend = []
let answer = 0;
// Try it with first function
perf.start();                     // Starts timer
doublerAppend(extraLargeArray);
answer = perf.stop()
resultsAppend.push(answer);  // Stops timer and save time results
perf.start();                     // Starts timer
doublerAppend(largeArray);
answer = perf.stop()
resultsAppend.push(answer);  // Stops timer and save time results
perf.start();                     // Starts timer
doublerAppend(mediumArray);
answer = perf.stop()
resultsAppend.push(answer);  // Stops timer and save time results
perf.start();                     // Starts timer
doublerAppend(smallArray);
answer = perf.stop()
resultsAppend.push(answer);  // Stops timer and save time results
perf.start();                     // Starts timer
doublerAppend(tinyArray);
answer = perf.stop()
resultsAppend.push(answer);  // Stops timer and save time results


// Try it with second function
let resultsInsert = []
perf.start();
doublerInsert(extraLargeArray);
answer = perf.stop()
resultsInsert.push(answer);
perf.start();                     // Starts timer
doublerInsert(largeArray);
answer = perf.stop()
resultsInsert.push(answer);  // Stops timer and save time results
perf.start();                     // Starts timer
doublerInsert(mediumArray);
answer = perf.stop()
resultsInsert.push(answer);  // Stops timer and save time results
perf.start();                     // Starts timer
doublerInsert(smallArray);
answer = perf.stop()
resultsInsert.push(answer);  // Stops timer and save time results
perf.start();                     // Starts timer
doublerInsert(tinyArray);
answer = perf.stop()
resultsInsert.push(answer);  // Stops timer and save time results


console.log('Results for the extraLargeArray');
console.log("insert", resultsInsert[0].preciseWords);
console.log("append", resultsAppend[0].preciseWords);
console.log('Results for the largeArray');
console.log("insert", resultsInsert[1].preciseWords);
console.log("append", resultsAppend[1].preciseWords);
console.log('Results for the mediumArray');
console.log("insert", resultsInsert[2].preciseWords);
console.log("append", resultsAppend[2].preciseWords);
console.log('Results for the smallArray');
console.log("insert", resultsInsert[3].preciseWords);
console.log("append", resultsAppend[3].preciseWords);
console.log('Results for the tinyArray');
console.log("insert", resultsInsert[4].preciseWords);
console.log("append", resultsAppend[4].preciseWords);
