// ++++++++++ Activity 1 ++++++++++

for(let i=1;i<=10;i++)
{
    console.log(i) ;
}
console.log('\n');


for(let i = 1 ; i<= 10 ;i++)
{
    console.log(`5 X ${i} = ${5*i}`);
}
console.log('\n');


// +++++++++ Activity 2 ++++++++++

let sum = 0 , i = 1;
while(i<=10)
{
    sum += i;
    i++;
}
console.log(sum +'\n');


let j = 10 ;
while(j>0)
{
    console.log(j);
    j--;
}
console.log('\n');


// ++++++++++ Activity 3 +++++++++++

let num = 1
do{
    console.log(num);
    num++;
}while(num<=5);
console.log('\n');


function factorial(n) {
  let result = 1;
  let i = n;

  do {
    result *= i;
    i--;
  } while (i > 0);

  return result;
}

const number = 5; 
console.log(`Factorial of ${number} is ${factorial(number)}` + '\n');


// +++++++++ Activity 4 +++++++++

function printPattern(n) {
    for (let i = 1; i <= n; i++) 
        {
        let pattern = '';
        for (let j = 1; j <= i; j++) 
            {
            pattern += '*';
        }
        console.log(pattern);
    }
}

printPattern(5);
console.log('\n');


// ++++++++++ Activity 5 ++++++++++++

function skip5(n){
    for(let i=1;i<=n;i++)
    {
        if( i == 5 )
            continue;
        console.log(i);
    }
}
skip5(10);
console.log('\n');


function breakAfter7(n){
    for(let i=1;i<=n;i++)
    {
        if( i > 7 )
            break;
        console.log(i);
    }
}

breakAfter7(10);




