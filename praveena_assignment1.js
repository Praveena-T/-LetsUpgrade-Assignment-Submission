/*
=====================
QUESTION 01
=====================
*/

console.log(1 + "2" + "2");
/*
    Output: 122
    Explanation: Due to presence of "" to numbers, they are considered as String. the addition among them will act as concatanation.
    so 5 cannot be obtained as the answer, although 1 is representes as a number and rest of them as String
*/   

console.log(1 + +"2" + "2");
/*
    Output: 32
    Explanation: Due to ++ inbeween 1 and "2", 2 will become integer and then under go the unary operation . 
    So both will add together and give 3. 
    Then 3 + "2" =32 (concatanation) 
*/

console.log(1 + -"1" + "2");
/*
    Output: 02
    Explanation: initial 1 is a number, 
    then second "1" will be converted to integer 1, then due to unary operator it will be -1
    1 + -"1" = 0 because 1 + - 1 = 0
    Then 0 + "2" gives 02 due to concatanation
*/

console.log(+"1" + "1" + "2");
/*
    Output: 112
    Explanation: Due to unary operator +, "1" is type cased to integer 1, 
    then concatanation with String means again act as String concatanation which give 11 as output.
    Then 11 + "2" = 112 (String concatanation) 
*/

console.log( "A" - "B" + "2");
/*
    Output: NaN2
    Explanation: + operator is used to concatanate, other than + we cannot use any operator, 
    if any other operator is used it will give NaN(Not a Number) as the output 
    NaN will concatanate with string ("2") and will give the answer as NaN2
*/

console.log( "A" - "B" + 2);
/*
    Output: NaN
    Explanation: + operator is used to concatanate, other than + we cannot use any operator, 
    if any other operator is used it will give NaN(Not a Number) as the output.
    When there is a number ans when it undergo a numeric operation the result will be NaN. 
    NaN + 2 =  NaN
*/

/*
=====================
QUESTION 02
=====================
*/
var marks = 55;

if(marks > 90){
    console.log("AA");
}
else if(marks > 80 && marks <= 90){
    console.log("AB");
}
else if(marks > 70 && marks <= 80){
    console.log("BB");
}
else if(marks > 60 && marks <= 70){
    console.log("BC");
}
else if(marks > 50 && marks <= 60){
    console.log("CC");
}
else if(marks > 40 && marks <= 50){
    console.log("CD");
}
else if(marks > 30 && marks <= 40){
    console.log("DD");
}
else{
    console.log("FF");
}



