console.log("Hello World!\n==========\n");

// Exercise 1 Section
for (let i = 1; i <= 100; i++) {
    if (i % 2 !== 0) {
        continue;
} else {
    console.log(i);
  }
}

// Exercise 2 Section

for (let i = 1; i<= 100; i++)
{
    let output = "";

if (i % 3 == 0)
{
    output += "FIZZ";
}

if (i % 5 == 0)
{
    output += "BUZZ";
}
console.log(`${i} ${output}`);
}

// Exercise 3 

let c = 1;

while (c < 100)
{
    if (c % 2 !== 1)
    {
        console.log(c)
    }
    c++;
}

let a =1;

do 
{
    if (a % 2 !== 0 )
    {
        console.log(a);
    }
    a++;
} while(a < 100);


let d = 1;

do 
{
    let output = "";

    if (d % 3 == 0)
    {
        output += "FIZZ";
    }
    if (d %5 == 0)
    {
        output += "BUZZ";
    }
    console.log(`${d} ${output}`);

    d++;
} while (d <= 100);


// Exercise 4

let value = Math.round((Math.random() * 500)); // creates a random number between 0 and 500

let n = Math.round(Math.random() * (500 - 100) + 100); // creates a random number between 100 and 500

for (let i = 1; i <= n; i++)
{
    if (i == numberToFind)
    {
        console.log(`Found ${numberToFind}!`);
        break;
    }
}
if (i ==n){
console.log(`Did not find ${numberToFind} within 1 - ${n}..`);
}