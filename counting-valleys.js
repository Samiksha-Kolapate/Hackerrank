'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'countingValleys' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER steps
 *  2. STRING path
 */

function countingValleys(steps, path) {
    // Write your code here
    let valley = 0;
    let sealevel = 0;
    let array = [steps];
    for(let i=0;i<path.length;i++){
        if(path.charAt(i) == 'U'){
            sealevel += 1;
            array[i] = sealevel;
        }
        else if(path.charAt(i) == 'D'){
            sealevel -= 1;
            array[i] = sealevel;
        }
    }
    
    for(let i=0;i<array.length;i++){
            if(array[i]<0 && array[i+1] == 0){
                valley++;
            }
        }
    return valley;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const steps = parseInt(readLine().trim(), 10);

    const path = readLine();

    const result = countingValleys(steps, path);

    ws.write(result + '\n');

    ws.end();
}









/* function countingValleys(steps, path) {
    // Write your code here
    let valley = 0;
    let sealevel = 0;
    let array = [steps];
    for(let i=0;i<path.length;i++){
        if(path.charAt(i) == 'U'){
            sealevel += 1;
            array[i] = sealevel;
        }
        else if(path.charAt(i) == 'D'){
            sealevel -= 1;
            array[i] = sealevel;
        }
    }
    
    for(let i=1;i<array.length;i++){
            if(array[i-1]<0 && array[i] == 0){
                valley++;
            }a
        }
    return valley;
} */