/*****************************
* CODING CHALLENGE 1
*/
/*
Harry and Salman are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

1. Store Harry's and Salman's mass and height in variables
2. Calculate both their BMIs
3. Create a boolean variable containing information about whether Harry has a higher BMI than Salman.
4. Print a string to the console containing the variable from step 3. (Something like "Is Harry's BMI higher than Salman's? true"). 

GOOD LUCK 😀
*/
/*
var massHarry = 78; // kg
var heightHarry = 1.69; // meters

var massSalman = 92;
var heightSalman = 1.95;

var BMIHarry = massHarry / (heightHarry * heightHarry);
var BMISalman = massSalman / (heightSalman * heightSalman);
console.log(BMIHarry, BMISalman);

var HarryHigherBMI = BMIHarry > BMISalman;
console.log('Is Harry\'s BMI higher than Salman\'s? ' + HarryHigherBMI);
*/
/*****************************
* CODING CHALLENGE 2
*/

/*
Salman and Mike both play basketball in different teams. In the latest 3 games, Salman's team scored 89, 120 and 103 points, while Mike's team scored 116, 94 and 123 points.

1. Calculate the average score for each team
2. Decide which teams wins in average (highest average score), and print the winner to the console. Also include the average score in the output.
3. Then change the scores to show different winners. Don't forget to take into account there might be a draw (the same average score)

4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before, log the average winner to the console. HINT: you will need the && operator to take the decision. If you can't solve this one, just watch the solution, it's no problem :)
5. Like before, change the scores to generate different winners, keeping in mind there might be draws.

GOOD LUCK 😀
*/
/*
var scoreSalman = (189 + 120 + 103) / 3;
var scoreMike = (129 + 94 + 123) / 3;
var scoreMary = (97 + 134 + 105) / 3;
console.log(scoreSalman, scoreMike, scoreMary);

if (scoreSalman > scoreMike && scoreSalman > scoreMary) {
    console.log('Salman\'s team wins with ' + scoreSalman + ' points');
} else if (scoreMike > scoreSalman && scoreMike > scoreMary) {
    console.log('Mike\'s team wins with ' + scoreMike + ' points');
} else if (scoreMary > scoreSalman && scoreMary > scoreMike) {
    console.log('Mary\'s team wins with ' + scoreMary + ' points');
} else {
    console.log('There is a draw');
}


if (scoreSalman > scoreMike) {
    console.log('Salman\'s team wins with ' + scoreSalman + ' points');
} else if (scoreMike > scoreSalman) {
    console.log('Mike\'s team wins with ' + scoreMike + ' points');
} else {
    console.log('There is a draw');
}
*/
/*****************************
* CODING CHALLENGE 3
*/

/*
Salman and his family went on a holiday and went to 3 different restaurants. The bills were $124, $48 and $268.

To tip the waiter a fair amount, Salman created a simple tip calculator (as a function). He likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.

In the end, Salman would like to have 2 arrays:
1) Containing all three tips (one for each bill)
2) Containing all three final paid amounts (bill + tip).

(NOTE: To calculate 20% of a value, simply multiply it with 20/100 = 0.2)

GOOD LUCK 😀
*/
/*
function tipCalculator(bill) {
    var percentage;
    if (bill < 50) {
        percentage = .2;
    } else if (bill >= 50 && bill < 200) {
        percentage = .15;
    } else {
        percentage = .1;
    }
    return percentage * bill;
}

var bills = [124, 48, 268];
var tips = [tipCalculator(bills[0]),
            tipCalculator(bills[1]),
            tipCalculator(bills[2])];

var finalValues = [bills[0] + tips[0],
                   bills[1] + tips[1],
                   bills[2] + tips[2]];

console.log(tips, finalValues);
*/
/*****************************
* CODING CHALLENGE 4
*/

/*
Let's remember the first coding challenge where Harry and Salman compared their BMIs. Let's now implement the same functionality with objects and methods.
1. For each of them, create an object with properties for their full name, mass, and height
2. Then, add a method to each object to calculate the BMI. Save the BMI to the object and also return it from the method.
3. In the end, log to the console who has the highest BMI, together with the full name and the respective BMI. Don't forget they might have the same BMI.

Remember: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

GOOD LUCK 😀
*/
/*
var Salman = {
    fullName: 'Salman Smith',
    mass: 110,
    height: 1.95,
    calcBMI: function() {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
}

var Harry = {
    fullName: 'Harry Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function() {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
}

if (Salman.calcBMI() > Harry.calcBMI()) {
    console.log(Salman.fullName + ' has a higher BMI of ' + Salman.bmi);
} else if (Harry.bmi > Salman.bmi) {
    console.log(Harry.fullName + ' has a higher BMI of ' + Harry.bmi);
} else {
    console.log('They have the same BMI');
}
*/
/*****************************
* CODING CHALLENGE 5
*/

/*
Remember the tip calculator challenge? Let's create a more advanced version using everything we learned!

This time, Salman and his family went to 5 different restaurants. The bills were $124, $48, $268, $180 and $42.
Salman likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.

Implement a tip calculator using objects and loops:
1. Create an object with an array for the bill values
2. Add a method to calculate the tip
3. This method should include a loop to iterate over all the paid bills and do the tip calculations
4. As an output, create 1) a new array containing all tips, and 2) an array containing final paid amounts (bill + tip). HINT: Start with two empty arrays [] as properties and then fill them up in the loop.


EXTRA AFTER FINISHING: Harry's family also went on a holiday, going to 4 different restaurants. The bills were $77, $375, $110, and $45.
Harry likes to tip 20% of the bill when the bill is less than $100, 10% when the bill is between $100 and $300, and 25% if the bill is more than $300 (different than Salman).

5. Implement the same functionality as before, this time using Harry's tipping rules
6. Create a function (not a method) to calculate the average of a given array of tips. HINT: Loop over the array, and in each iteration store the current sum in a variable (starting from 0). After you have the sum of the array, divide it by the number of elements in it (that's how you calculate the average)
7. Calculate the average tip for each family
8. Log to the console which family paid the highest tips on average

GOOD LUCK 😀
*/

/*
var Salman = {
    fullName: 'Salman Smith',
    bills: [124, 48, 268, 180, 42],
    calcTips: function() {
        this.tips = [];
        this.finalValues = [];
                
        for (var i = 0; i < this.bills.length; i++) {
            // Determine percentage based on tipping rules
            var percentage;
            var bill = this.bills[i];
            
            if (bill < 50) {
                percentage = .2;
            } else if (bill >= 50 && bill < 200) {
                percentage = .15;
            } else {
                percentage = .1;
            }
            
            // Add results to the corresponing arrays
            this.tips[i] = bill * percentage;
            this.finalValues[i] = bill + bill * percentage;
        }
    }
}

var Harry = {
    fullName: 'Harry Miller',
    bills: [77, 475, 110, 45],
    calcTips: function() {
        this.tips = [];
        this.finalValues = [];
                
        for (var i = 0; i < this.bills.length; i++) {
            // Determine percentage based on tipping rules
            var percentage;
            var bill = this.bills[i];
            
            if (bill < 100) {
                percentage = .2;
            } else if (bill >= 100 && bill < 300) {
                percentage = .1;
            } else {
                percentage = .25;
            }
            
            // Add results to the corresponing arrays
            this.tips[i] = bill * percentage;
            this.finalValues[i] = bill + bill * percentage;
        }
    }
}

function calcAverage(tips) {
    var sum = 0;
    for (var i = 0; i < tips.length; i++) {
        sum = sum + tips[i];
    }
    return sum / tips.length;
}

// Do the calculations
Salman.calcTips();
Harry.calcTips();

Salman.average = calcAverage(Salman.tips);
Harry.average = calcAverage(Harry.tips);
console.log(Salman, Harry);

if (Salman.average > Harry.average) {
    console.log(Salman.fullName + '\'s family pays higher tips, with an average of $' + Salman.average);
} else if (Harry.average > Salman.average) {
    console.log(Harry.fullName + '\'s family pays higher tips, with an average of $' + Harry.average);
}
*/
