console.log("Hello World!\n==========\n");

// Exercise 1 Section
for (let i = 1; i <= 100; i++) {
    if (i % 2 !== 0) {
        continue;
} else {
    console.log(i);
  }
}
let a = 1;
while (a < 100) {
    if (a % 2 !== 0) {
        console.log(a);
    }
}
// Exercise 2 Section

for (let i = 1; i < 100; i++) {
    console.log(i);
    if (i % 3 == 0 && i % 5 == 0) {
        console.log("FIZZBUZZ");
    } else {
        if(i % 3 == 0) {
            console.log("FIZZ")
        }
        if (i % 5 == 0) {
            console.log("BUZZ");
        }
    }
}


// Exercise 3 

let d = 1;

do {
    if (d % 2 !==0) {
        console.log(d);
    }
    d++;
} while (d < 100);

let c = 1;
while(c <= 100) {
    let output = "";
    if (c % 3 == 0) {
        output += "FIZZ";
    }
    if (c % 5 == 0) {
        output += "BUZZ"
    }
    console.log(`${i} ${output}`);
    i++;
}

// Exercise 4
console.log("EXERCISE 4: \n==========\n"); 
let value = Math.round((Math.random() * 500)); // creates a random number between 0 and 500
     
let n = Math.round(Math.random() * (500 - 100) + 100); // creates a random number between 100 and 500
console.log("Random value:")
console.log(value);
console.log("end point");
console.log(n);
console.log("Checking to see if we have the value....")

let isFound = false;
for( let i = 1; i <= n; i++) {
    if(i == value) {
        console.log("Found Value!!");
        isFound = true;
        break;
    }
    else {
        console.log("Did not find value");
        isFound = false;
    }
}
if(isFound == false) {
    console.log("Did not find value")
}