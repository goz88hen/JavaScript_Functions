// Exercise 1: Print Odds
function printOdds(count){
    for (let i = 1; i <= count; i++){
        if(i % 2 != 0){
            console.log(i);
        } 
    }
}

        printOdds(10);
        printOdds(100);

//Exercise 2: Check Age 
function checkAge(username, age){
let aboveSixteen = `Congrats ${username}! You are able to drink!`;
let belowSixteen = `Sorry  ${username}! You are too young to drink! Maybe in ${16 - age} years, you are able to. :(`;

if (age < 16){
    console.log(belowSixteen)
}else{
    console.log(aboveSixteen)
}
}

checkAge("Ben", 12)
checkAge("Seth", 16)
checkAge("Howard", 21)
checkAge("Marge", 32)

// function oldEnough(age, targetAge){
//     return age >= targetAge;
// }

// function checkLicense(name,age){
//     let canDrive = oldEnough(age, 16);
//     let canHavePermit = oldEnough (age, 15);
//     let canDrink = oldEnough (age, 21); 

//     if(canDrink){
//         console.log(`${name} can drink. ${name} can drive as well. JUST DON'T DRINK AND DRIVE.`);
//     }else if(canDrive){
//         console.log(`${name} can drive.`);
//     }else if(canHavePermit){
//         console.log(`${name} too young. Wait ${16 - age} more years.`);
//     }
// }

// checkLicense("Ben", 22)
// checkLicense("Seth", 17)
// checkLicense("Howard", 16)
// checkLicense("Marge", 32)

//Exercise 3 Section: Quadrant

function checkQuadrant(x,y) {
    if(x > 0 && y > 0) {
        return "Quadrant 1";
    } else if (x < 0 && y > 0) {
        return "Quadrant 2";
    } else if (x < 0 && y < 0) {
        return "Quadrant 3";
    } else if (x > 0 && y < 0) {
        return "Quadrant 4";
    } else if (x == 0 && y != 0) {
        return "X Axis";
    } else if (x != 0 && y == 0) {
        return "Y Axis";
    } else{
        return "Origin";
    }
}

console.log(checkQuadrant(1,1));
console.log(checkQuadrant(0,1));
console.log(checkQuadrant(1,0));
console.log(checkQuadrant(-1,1));
console.log(checkQuadrant(1,-1));
console.log(checkQuadrant(-1,-1));

//Exercise 4: Triangles 
function isValidTriangle(a, b, c) {
    return a + b > c && a + c > b && b + c > a;
}

function checkTriangle(a, b, c) {
    let isValid = isValidTriangle(a, b, c);
    if (isValid) {
        if (a == b && b == c) {
            return `Equilateral`;
        }else if (a == b || b == c || a == c){
            return `Isosceles`;
        }else{
            return  `Scalene`;
        }
    }else{
        return `Not a valid triangle.`;
    }
}

console.log(checkTriangle(2,3,4));
console.log(checkTriangle(2,2,2));
console.log(checkTriangle(1,2,2));
console.log(checkTriangle(1,1,2));


//Exercise 5: Data

function dataUsageFeedback(planLimit, day, usage){
    let periodlength = 30;
    let currentAvg = usage/day;
    let projectedAvg = planLimit/periodlength;
    let remainingDays = periodlength - day;
    let remainingData = planLimit - usage;
    let projectedUsage = remainingDays * currentAvg;
    let statusMsg;

    console.log(`${day} days used, ${remainingDays} days remaining`);

    console.log(`Average daily use: ${projectedAvg} GB/day`);

    if(currentAvg > projectedAvg){
        statusMsg = "EXCEEDING";
    }else if (currentAvg < projectedAvg) {
        statusMsg = "SUBCEED";
    }else {
        statusMsg = "AT";
    }

    console.log(`You are ${statusMsg} your average daily use ${currentAvg} GB/day), continuing this usage, you'll end up using ${(usage +  projectedUsage) - planLimit}
    GB from your data limit.To stay below your data plan, use no more than ${remainingData / remainingDays} GB/day.`);
}

dataUsageFeedback(50, 10, 25);