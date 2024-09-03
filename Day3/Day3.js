// ++++++++++ Activity 1 +++++++++++

function checkNumber(num){
    if( num == 0 )
        return 'num is zero';
    else if( num > 0  )
        return `${num} is +ve`;
    else
     return `${num} is -ve`
}

function eligibleToVote(age) {
    if( age >= 18 )
        return `Person is eligible to vote with age ${age}`
    else
        return `Person is not eligible to vote with age ${age}`
}

console.log(checkNumber(12));
console.log(eligibleToVote(12) + '\n');


// +++++++++ Activity 2 ++++++++++

function largetNumber(num1,num2,num3){
    if( num1 > num2 && num1 > num3 )
        return `${num1} is greater`;
    else if( num2 > num1 && num2 > num3 )
        return `${num2} is greater`;
    else
        return `${num3} is greater`;
}

console.log(largetNumber(5,9,3) + '\n');


// +++++++++ Activity 3 ++++++++++ 

function checkWeekDays(day){
    switch(day){
        case 1 : 
            return "Monday";
            break;
            case 2 : 
            return "Tuesday";
            break;
            case 3 : 
            return "Wednesday";
            break;
            case 4 : 
            return "Thursday";
            break;
            case 5 : 
            return "Friday";
            break;
            case 6 : 
            return "Saturday";
            break;
            default : 
            return "Sunday";
            
    }
}

function gradeCheck(marks) {
    switch (marks) {
        case marks > 85:
            return "A";
            break;
        case marks > 75 && marks < 85 :
            return "B";
            break;
        case marks > 60 && marks < 75:
            return "C";
            break;
        case marks > 45 && marks < 60:
            return "D";
            break;
        default:
            return "F";
    }
}

console.log(checkWeekDays(4));
console.log(gradeCheck(33)  + '\n' );


// ++++++++++ Activity 6 ++++++++++

function oddOrEven(num){
    return num % 2 == 0 ? "Even" : "Odd";
}

console.log(oddOrEven(2) + '\n');


// ++++++++++ Activity 5 +++++++++

function leapYear(year){
    if( year % 400 == 0 )
        return "Leap Year";
    else if( year % 4 == 0 && year % 100 != 0)
        return "Leap Year";
    else
        return "Not a leap Year";
}

console.log(leapYear(2020));