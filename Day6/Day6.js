// ++++++++++ Activity 1 +++++++++++

let arr = [1,2,3,4,5,12];
console.log(arr);
console.log(`First element is ${arr[0]} and last element is ${arr[arr.length - 1]}` + '\n');


// ++++++++++ Activity 2 +++++++++++

arr.push(6);
console.log(arr);

arr.pop();
console.log(arr);

arr.shift();
console.log(arr);

arr.unshift();
console.log(arr);


// ++++++++++ Activity 3 +++++++++++

arr = arr.map((val) => {
    return val + 1;
   
})
console.log(arr);

const evenArray = arr.filter((ele) => {
    return ele % 2 == 0 ;
})

console.log(evenArray);


const sumArray = arr.reduce((acc,val) => {
    acc += val;
    return acc;
},0);

console.log(sumArray);


// ++++++++++ Activity 4 +++++++++++

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    
}

arr.forEach(element => {
    console.log(element);
});


// ++++++++++ Activity 5 +++++++++++


const array2D = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];


array2D.forEach((row, rowIndex) => {
    row.forEach((col, colIndex) => {
        console.log(`array2D[${rowIndex}][${colIndex}] = ${col}`);
    });
});


const rowIndex = 1; 
const colIndex = 2; 

const specificElement = array2D[rowIndex][colIndex];


console.log(`Element at array2D[${rowIndex}][${colIndex}] = ${specificElement}`);

