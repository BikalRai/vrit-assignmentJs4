// 1)Write a JavaScript method that takes an array of numbers and returns the array of second and third  smallest number.
//  Input: [12,33,5,27,1]
//  output =[5,27]

const input = [12, 33, 5, 27, 1];

function outputArr(arr) {
    let temp = arr[0];
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                temp = arr[j];
                arr[j] = arr[i];
                arr[i] = temp;
            }
        }
    }

    return arr.slice(1, 3);
}

console.log(outputArr(input));

// 2)Write a JavaScript method that takes an array of numbers and returns false if every number is not prime. Otherwise return true
// [1,7,11,13] =>true
// [2,3,45]=>false
const numsArr = [2, 3, 45];

const checkPrime = numsArr.reduce((ele) => {
    if (ele % 2 === 0) {
        return false;
    } else {
        return true;
    }
});

console.log(checkPrime);

// 3)Given an array of nums and an integer target, return index of the two numbers such that they add up to target.
//  You may assume that each input would have exactly one solution, and you may not use the same element twice
//  Input: nums = [2,7,11,15], target = 9
//  Output: [0,1]
//  Input: nums = [3,2,4], target = 6
//  Output: [1,2]
const inputArr = [3, 2, 4];
const target = (arr) => {
    const t = 6;
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === t) {
                return [i, j];
            }
        }
    }
};
console.log(target(inputArr));

// 4))Write a JavaScript method that takes array of objects
//   const data = [
//     { food: {name:"pizza", id: 2 }, qty: 1 },
//     { food: {name:"momo",id: 3 }, qty: 5 },
//     { food: { name:"pizza",id: 2 }, qty: 9 }
//   ];
// //should be unique according to id and should sum the qty with same id
// output=[food:{name:"pizza",qty:10}]

const data = [
    { food: { name: "pizza", id: 2 }, qty: 1 },
    { food: { name: "momo", id: 3 }, qty: 5 },
    { food: { name: "pizza", id: 2 }, qty: 9 },
];
const reducedData = (arr) => {
    const filteredArr = arr.filter((obj) => {
        return obj.food.id === 2;
    });

    const qty = filteredArr.reduce((acc, obj) => {
        return acc + obj.qty;
    }, 0);

    const newData = filteredArr.reduce((acc, obj) => {
        return { name: obj.food.name, qty: qty };
    }, []);
    return newData;
};

console.log(reducedData(data));

//5.Write a method to Factorialize a Number
// Example:
// Input:factorialize(5)
// Output:120
// i.e.=>5! = 1 * 2 * 3 * 4 * 5 = 120
// factorialize(6)
// i.e.=>6! = 1 * 2 * 3 * 4 * 5*6 = 720

const factorialize = (n) => {
    if (n === 0 || n === 1) {
        return 1;
    }
    for (let i = n - 1; i >= 1; i--) {
        n *= i;
    }

    return n;
};

console.log(factorialize(6));
