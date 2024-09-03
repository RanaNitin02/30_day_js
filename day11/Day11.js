// ++++++++++ Activity 1 +++++++++++


const promise1 = new Promise((resolve,reject) => {
    setTimeout(() => resolve("Resolved"),2000);
})
.then((value)=>{
    console.log( `Promise 1 ` + `${value}`); 
})
const promise2 = new Promise((resolve,reject) => {
    setTimeout(() => reject("Rejected"),2000);
})
.then((value)=>{
    console.log(value); 
}).catch(e => {
    console.log(`Promise 2 ` + `${e}`);
    
})


// ++++++++++ Activity 2 +++++++++++

function fetch1(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => resolve('Data fetched from server 1.'),1000);
    })
}
function fetch2(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => resolve('Data fetched from server 2.'),1000);
    })
}
function fetch3(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => resolve('Data fetched from server 3.'),1000);
    })
}

fetch1().then((msg)=>{
    console.log(msg);
    return fetch2();
}).then((msg) => {
    console.log(msg);
    return fetch3();
})
.then((msg)=>{
    console.log(msg);
})



// ++++++++++ Activity 3 +++++++++++

async function asyncPromiseResolved(){
    await setTimeout((resolve,reject) => console.log('resolve'),1000)
}
asyncPromiseResolved()

function fetchData() {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>reject('Kuch toh gadbad hai!'),1000);
    })
}
async function asyncPromiseRejected() {
    try{
        const data = await fetchData();
        console.log(data);
    }catch(e){
        console.log(e);
        
    }
}
asyncPromiseRejected();


// ++++++++++ Activity 4 +++++++++++

async function fetchProductAPI1() {
    const res = await fetch('https://dummyjson.com/products');
    const data = await res.json(); 
    console.log(data);
    return data; 
}   

fetchProductAPI1()
    .then((msg) => {
        console.log(msg);
    })
    .catch((e) => {
        console.log(e);
    });

async function fetchProductAPI2() {
    try {
        const res = await fetch('https://dummyjson.com/products');
        const data = await res.json(); 
        console.log(data);
        return data; 
    } catch (e) {
        console.log(e);
    }
} 

fetchProductAPI2();



// ++++++++++ Activity 5 +++++++++++

const promiseExample1 = new Promise((resolve,reject) => {
    setTimeout(()=>resolve('Promise 1 resolved')
    ,1000)
})

const promiseExample2 = new Promise((resolve,reject) => {
    setTimeout(()=>resolve('Promise 2 resolved')
    ,1000)
})
const promiseExample3 = new Promise((resolve,reject) => {
    setTimeout(()=>resolve('Promise 3 resolved')
    ,1000)
})

Promise.all([promiseExample1,promiseExample2,promiseExample3])
.then((value) => {
    console.log(value); 
})
.catch((e)=>{
    console.log(e);  
})



const promiseExample4 = new Promise((resolve,reject) => {
    setTimeout(()=>resolve('Promise 4 resolved')
    ,1000)
})

const promiseExample5 = new Promise((resolve,reject) => {
    setTimeout(()=>resolve('Promise 5 resolved')
    ,1000)
})
const promiseExample6 = new Promise((resolve,reject) => {
    setTimeout(()=>resolve('Promise 6 resolved')
    ,1000)
})

Promise.race([promiseExample4,promiseExample5,promiseExample6])
.then((value) => {
    console.log(value); 
}).catch((e)=>{
    console.log(e);  
})