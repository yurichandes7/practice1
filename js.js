'use strict';
/*console.log("hi");
const mark={
    fullname: 'Mark Miller',
    weight:78,
    height:1.69,
    callbmi : function () {
        this.bmi=this.weight / this.height **2;
        return this.bmi;
    }
};
const john={
    fullname:'john smith',
    weight:92,
    height:1.95,
    callbmi : function () {
        this.bmi=this.weight / this.height **2;
        return this.bmi;
    }
};
mark.callbmi();
john.callbmi();
   if(mark.bmi>john.bmi){
    console.log(`${mark.fullname}'s bmi(${mark.bmi}) is bigger than ${john.fullname}'s bmi wich is (${john.bmi})`)
   }
   else console.log(`${john.fullname}'s BMI (${john.bmi}) is higher than ${mark.fullname}'s BMI (${mark.bmi})`)
/*const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function () {
      this.bmi = this.mass / this.height ** 2;
      return this.bmi;
    }
  };
  
  const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function () {
      this.bmi = this.mass / this.height ** 2;
      return this.bmi;
    }
  };
  
  mark.calcBMI();
  john.calcBMI();
  
  console.log(mark.bmi, john.bmi);
  
  // "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"
  
  if (mark.bmi > john.bmi) {
    console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi})`)
  } else if (john.bmi > mark.bmi) {
    console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s BMI (${mark.bmi})`)
  }*/
 ///////////////////////////////////////////////////////////////////////////
 // Coding Challenge #4

/*
Let's improve Steven's tip calculator even more, this time using loops!

1. Create an array 'bills' containing all 10 test bill values
2. Create empty arrays for the tips and the totals ('tips' and 'totals')
3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate tips and total values (bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations!

TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52

HINT: Call calcTip in the loop and use the push method to add values to the tips and totals arrays 😉

4. BONUS: Write a function 'calcAverage' which takes an array called 'arr' as an argument. This function calculates the average of all numbers in the given array. This is a DIFFICULT challenge (we haven't done this before)! Here is how to solve it:
  4.1. First, you will need to add up all values in the array. To do the addition, start by creating a variable 'sum' that starts at 0. Then loop over the array using a for loop. In each iteration, add the current value to the 'sum' variable. This way, by the end of the loop, you have all values added together
  4.2. To calculate the average, divide the sum you calculated before by the length of the array (because that's the number of elements)
  4.3. Call the function with the 'totals' array

GOOD LUCK 😀
*/