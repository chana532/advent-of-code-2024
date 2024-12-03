import { readFile } from '../util/readFile';

const solutionPartOne = (lines: any) => {
    var list1: number[] = [];
    var list2: number[] = [];

    // put numbers into array
    for(var line of lines) {
        list1.push(line.split('   ')[0])
        list2.push(line.split('   ')[1])
    }

    // sort array
    var sortedList1 = sortArray(list1);
    var sortedList2 = sortArray(list2);

    // sum difference
    var sum = 0;

    sortedList1.forEach((item, index) => {
        sum += Math.abs(item - sortedList2[index]);
    });

    console.log(sum)
}

const solutionPartTwo = (lines: any) => {
    var list1: number[] = [];
    var list2: number[] = [];

    // put numbers into array
    for(var line of lines) {
        list1.push(line.split('   ')[0])
        list2.push(line.split('   ')[1])
    }

    // sum difference
    var sum = 0;

    list1.forEach((item) => {
        let frequency = getOccurance(list2, item);
        sum += (item * frequency);
    });

    console.log(sum)
}

function sortArray(inputArray: number[]): number[] {
    return inputArray.slice().sort((a, b) => a - b);
}

function getOccurance (arr: number[], item: number): number {
    return arr.filter((currentItem) => currentItem == item).length;
};

(async () => {
    const lines = (await readFile('./inputs/day1')).split('\r\n');
    // const lines = (await readFile('./inputs/day1_example')).split('\r\n');
    solutionPartOne(lines)
    solutionPartTwo(lines)
})();;
