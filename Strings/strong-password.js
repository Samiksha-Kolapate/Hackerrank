'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function (inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function () {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'minimumNumber' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. STRING password
 */

function minimumNumber(n, password) {
    // Return the minimum number of characters to make the password strong
    const numbers = "0123456789";
    const lower_case = "abcdefghijklmnopqrstuvwxyz";
    const upper_case = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const special_characters = "!@#$%^&*()-+";
    
    let small = false;
    let big = false;
    let num = false;
    let special = false;
    
    let count = 0;
    for (let i = 0; i < password.length; i++) {
        if(lower_case.includes(password.charAt(i))){   /// can also use like password[i]
            small=true;
        }
        else if(upper_case.includes(password.charAt(i))){
            big=true;
        }
        else if(numbers.includes(password.charAt(i))){
            num=true;
        }
        else if(special_characters.includes(password.charAt(i))){
            special=true;
        }
    }
    if(!big) count++;
    if(!small) count++;
    if(!num) count++;
    if(!special) count++;
    
    let missingLength = Math.max(0,6-n);
    
    return Math.max(missingLength,count);
}
function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const password = readLine();

    const answer = minimumNumber(n, password);

    ws.write(answer + '\n');

    ws.end();
}
