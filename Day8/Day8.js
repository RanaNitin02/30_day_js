// ++++++++++ Activity 1 +++++++++++

let name = 'Hitesh'
let age = 32

let str = `${name}${age}`
console.log(str);


let str2 = `Hey akshay, welcome to 
the community. This dev community 
is one of most popular in industry`

console.log(str2 + '\n');


// ++++++++++ Activity 2 +++++++++++


const arr = [1,2,3,4,5,6];
const [first,second] = arr;
console.log(first + " " + second);


const book = {
    title: "Rich Dad Poor Dad",
    author: "Robert Kiyosaki",
    Published: 1997
}

const { title, author } = book
console.log(title + ", " + author + '\n');


// ++++++++++ Activity 3 +++++++++++


const arr2 = [...arr,7,8,9]
console.log(arr2 + '\n');


function sumArray(...arr){
    let sum = 0 ;
    for (let ele of arr) {
        sum += ele
    }
    return sum;
}

console.log(sumArray(1,2,3,4,5)+'\n');


// ++++++++++ Activity 4 +++++++++++


function mul(num1, num2 = 1){
    return num1 * num2 ;
}

console.log(mul(5));


// ++++++++++ Activity 5 +++++++++++


const book1 = {
    title: "Rich Dad Poor Dad",
    author: "Robert Kiyosaki",
    Published: 1997,
    library: {
        name: "olumpus",
        books: [
            {title: 'hindibook',year: 1992},
            {title: 'Englishbook', year: 1996},
            {title: 'Sanskritbook', year: 2000}
        ]
    },
    info: function(){
        return `${title} + "," + ${author}`
    },
    newYear: function(year){
        this.year = year
        return year;
    }
}

console.log(book1 + '\n');


let firstName = "firstname"
let obj1 = {
    firstName: 'Hitesh',
    lastName: 'Choudhary'
}
console.log(obj1);
