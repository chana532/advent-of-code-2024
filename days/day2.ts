import { readFile } from '../util/readFile';

const solutionPartOne = (lines: any) => {
    var safeReports = 0;

    for(var line of lines) {
        var currLine: number[] = (line.split(' '));

        if (isIncreasing(currLine) || isDecreasing(currLine)) {
            safeReports += 1;
        }
    }

    console.log(safeReports)
}

function isIncreasing(arr: number[]) {
    for (let i = 1; i < arr.length; i++) {
        var diff = arr[i] - arr[i-1];
        if (diff < 1 || diff > 3) {
            return false;
        }
    }
    return true;
}


function isDecreasing(arr: number[]) {
    for (let i = 1; i < arr.length; i++) {
        var diff = arr[i-1] - arr[i];
        if (diff < 1 || diff > 3) {
            return false;
        }
    }
    return true;
}



const solutionPartTwo = (lines: any) => {
    var safeReports = 0;

    for(var line of lines) {
        var currLine: number[] = (line.split(' '));


    }

    console.log(safeReports)
}



(async () => {
    const lines_example = (await readFile('./inputs/day2_example')).split('\r\n');
    solutionPartOne(lines_example)
    solutionPartTwo(lines_example)
    
    const lines = (await readFile('./inputs/day2')).split('\r\n');
    solutionPartOne(lines)
    solutionPartTwo(lines)
})();;
