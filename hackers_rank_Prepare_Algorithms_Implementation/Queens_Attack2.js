{/* You will be given a square chess board with one queen and a number of obstacles placed on it. Determine how many squares the queen can attack.

A queen is standing on an n x n chessboard. The chess board's rows are numbered from  1 to n, going from bottom to top. Its columns are numbered from  to , going from left to right. Each square is referenced by a tuple, , describing the row, , and column, , where the square is located.

The queen is standing at position . In a single move, she can attack any square in any of the eight directions (left, right, up, down, and the four diagonals). In the diagram below, the green circles denote all the cells the queen can attack from :

image

There are obstacles on the chessboard, each preventing the queen from attacking any square beyond it on that path. For example, an obstacle at location  in the diagram above prevents the queen from attacking cells , , and :

image

Given the queen's position and the locations of all the obstacles, find and print the number of squares the queen can attack from her position at . In the board above, there are  such squares.

Function Description

Complete the queensAttack function in the editor below.

queensAttack has the following parameters:
- int n: the number of rows and columns in the board
- nt k: the number of obstacles on the board
- int r_q: the row number of the queen's position
- int c_q: the column number of the queen's position
- int obstacles[k][2]: each element is an array of  integers, the row and column of an obstacle

Returns
- int: the number of squares the queen can attack

Input Format

The first line contains two space-separated integers  and , the length of the board's sides and the number of obstacles.
The next line contains two space-separated integers  and , the queen's row and column position.
Each of the next  lines contains two space-separated integers  and , the row and column position of .

Constraints

A single cell may contain more than one obstacle.
There will never be an obstacle at the position where the queen is located.
Subtasks

For  of the maximum score:

For  of the maximum score:

Sample Input 0*/}

// 'use strict';

// const fs = require('fs');

// process.stdin.resume();
// process.stdin.setEncoding('utf-8');

// let inputString = '';
// let currentLine = 0;

// process.stdin.on('data', function (inputStdin) {
//     inputString += inputStdin;
// });

// process.stdin.on('end', function () {
//     inputString = inputString.split('\n');

//     main();
// });

// function readLine() {
//     return inputString[currentLine++];
// }

/*
 * Complete the 'queensAttack' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER k
 *  3. INTEGER r_q
 *  4. INTEGER c_q
 *  5. 2D_INTEGER_ARRAY obstacles
 */

function queensAttack(n, k, r_q, c_q, obstacles) {
    // Write your code here
    {/* int n: the number of rows and columns in the board
        int k: the number of obstacles on the board
        int r_q: the row number of the queen's position
        int c_q: the column number of the queen's position
        int obstacles[k][2]: each element is an array of  integers, the row and column of an obstacle */}
    const grid = Array.from({ length: n }, () => new Array(n).fill(0));
    console.log(grid)
    for (const [r, c] of obstacles) grid[r - 1][c - 1] = 1;
    grid[r_q - 1][c_q - 1] = "Q"
    console.log(grid);
    let counter = 0;
    let teen = k;
    console.log(teen)


    return counter
}

queensAttack(5, 3, 4, 3, 5, 5, 4, 2, 2, 3);

// function main() {
//     const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

//     const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

//     const n = parseInt(firstMultipleInput[0], 10);

//     const k = parseInt(firstMultipleInput[1], 10);

//     const secondMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

//     const r_q = parseInt(secondMultipleInput[0], 10);

//     const c_q = parseInt(secondMultipleInput[1], 10);

//     let obstacles = Array(k);

//     for (let i = 0; i < k; i++) {
//         obstacles[i] = readLine().replace(/\s+$/g, '').split(' ').map(obstaclesTemp => parseInt(obstaclesTemp, 10));
//     }

//     const result = queensAttack(n, k, r_q, c_q, obstacles);

//     ws.write(result + '\n');

//     ws.end();
// }
