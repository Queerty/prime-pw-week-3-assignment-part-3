console.log('****** Part Supply *******');
// REQUIRED FEATURES

// 1. Create a variable called 'partsNeeded' with a value of the number 40
//    & console.log the variable
console.log('1. Number of partsNeeded:');
let partsNeeded = 40;
console.log(partsNeeded);
// 2. Create a variable call 'supplyChanges' set it to an array containing
//    the following numbers: 3, 5, -6, 0, 7, 11
console.log('2. Array of supplyChanges:');
let supplyChanges = [3, 5, -6, 0, 7, 11];
console.log(supplyChanges);
// 3. Console log the value of 'supplyChanges' at index 2
console.log('3. Item at index 2 is:');
console.log(supplyChanges[2]);
// 4. The last item was added by mistake. Remove it from the 'supplyChanges'
//    array & console.log the value removed.
console.log('4. Removed item:');
console.log(supplyChanges.pop());

// 5. A delivery of 25 more parts arrived. Add the value 25 to the end of the array
console.log('5. Adding 25 to supplyChanges.');
supplyChanges.push(25);
console.log(supplyChanges);

// 6. Write a `for` loop that shows each value in the 'supplyChanges' array
//    Use a console.log formatted as follows, where x is the value from the array
//    - if it is a positive number (greater than 0), log 'Added x parts.'
//    - if the value is 0, skip it. Do not log it to the console.
//    - if the value is negative, format the log as 'Part count -x.'
console.log('6. Showing supplyChanges...');

for (i = 0; i<(supplyChanges.length); i++){

  if(supplyChanges[i]>0){
    console.log('added', supplyChanges[i], 'parts.')}
     else if (supplyChanges[i]<0) {console.log('Part count', supplyChanges[i], ".")
}else {
}
}
// STRETCH GOALS
console.log('---  Stretch Goals  ---');
// 7. Rewrite the `for` loop from #6 as a `for of` loop.
console.log('7. Showing supplyChanges with "for of" loop');
for (parts of supplyChanges){
  console.log(parts);

}

// 8. Rewrite the `for` loop from #6 as a `while` loop.

console.log('8. Showing supplyChanges with "while" loop');
var i= 0;
const max= supplyChanges.length;
while( i < max){
  console.log( supplyChanges[i]);
  i++;
}

// 9. Write a loop to determine the total number of parts available by
//    adding up all the numbers in the 'supplyChanges' array.

//I am trying to create a variable 'sum' to add all the array items to, but it doesn't seem to be working-
//when I declare it in the for loop it says it isn't defined,
//and when I declare it before my for loop it defaults that value (0) when I console.log after the function

console.log('9. Total supplies available is:');
let sum = 0;
  for (i = 0; i< supplyChanges.length; i++){
    sum = (sum + supplyChanges[i]);
  };
  console.log(sum);
