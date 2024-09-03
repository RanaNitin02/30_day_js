// ++++++++++ Activity 1 +++++++++++

function throwError(num){
    try {
        const numbers = [1,2,3,4,5];
        if(numbers[num]){
            return numbers[num];
        }else{
            throw "Invalid number";
        }
    } catch (error) {
        console.log(error);
        
    }
}
throwError(7)


function divideByZero(){
    try {
        let num = 10 / 0 ;
        if( isFinite(num) )
            return num;
        else
            throw "Number is not divisible by 0"
    } catch (error) {
        console.log(error);
        
    }
}
divideByZero() + '\n'


// ++++++++++ Activity 2 +++++++++++

function testAll(){
    try {
        let num = 2 + 2;
        if( num > 0 )
            console.log(`${num} is +ve`);   
        else
            throw "Number is -ve"
    } catch (error) {
        console.log(error);
    }
    finally{
        console.log("Succesfully tested all try catch options");
    }
}
testAll() + '\n'


// ++++++++++ Activity 3 +++++++++++

class customError extends Error{
    constructor(msg){
        super(msg)
        this.name = 'Custom error'
        
    }
}
try {
    throw new customError('This is a custom error')
}catch(e){
    console.log(e.name);
    console.log(e.message);
}

function validateString(str){
    try {
        if( str === "")
            throw new Error('String is empty')
    } catch (error) {
        console.log(error.message);
        
    }
}
validateString("") + '\n'


// ++++++++++ Activity 4 +++++++++++

function randomPromise1() {
    return new Promise((resolve, reject) => {
        let randomNumber = Math.floor(Math.random() * 10 + 1);

        if (randomNumber % 2 === 0) {
            resolve("Number is even");
        } else {
            reject("Number is odd");
        }
    });
}

randomPromise1()
    .then((msg) => console.log(msg))
    .catch((e) => console.log(e));


async function randomPromise2(){
    return new Promise((resolve,reject) => {
        try {
            let randomNumber = Math.floor(Math.random() * 10 + 1);
            if (randomNumber % 2 === 0) {
                resolve("Number is even");
            } else {
                reject("Number is odd");
            }
        } catch (error) {
            console.log(error);
            
        }
    })
};

async function handlePromise(){
    try{
        const msg = await randomPromise2();
        console.log(msg);
    }catch(e){
        console.log(e);  
    }
}
handlePromise() + '\n'


// ++++++++++ Activity 5 +++++++++++

function fetchFromAPI1(){
    return new Promise((resolve,reject) => {
        fetch("https://assddsgd.com/data")
        .then(res => {
            if(!res.ok){
                throw new Error(`Error in fetching`)
            }
            return res.json()
        })
        .catch(err => {
            console.log(err.message);
        })
    }
)}
fetchFromAPI1()

async function fetchFromAPI2() {
    try {
        let res = await fetch("https://assddsgd.com/data")
        if(!res.ok){
            throw new Error("Eror in fetching")
        }
        return res.json();
    } catch (error) {
        console.log(error.message);
    }
}
fetchFromAPI2()
