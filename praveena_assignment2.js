/*
=====================
QUESTION 01
=====================
*/
const clothes = ['jacket', 't-shirt'];
clothes.length = 0;
console.log(clothes[0]);

/**
 * Answer: undefined
 * Line 01 - the array has 2 elemnts totally which is found by clothes.length
 * Line 02 - the length(number of clothes) of the clothes is set to 0, which means elements in the array are deleted
 * Line 03 - As there are no any clothes(empty array), the final output will be undefined
*/

/* 
=====================
QUESTION 02
=====================
*/

var num = [14, 24, 13, 32, 50, 20, 41, 35];
var sum = 0;

for(var i = 0; i<num.length; i++){
    sum = sum + num[i]; 
}
console.log("Sum : " + sum);
