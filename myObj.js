 //Create and object and add five key values pair to it in JavaScript:

var obj = {};// an empty object has created
for(var i = 1; i<=5; i++){ // A loop has added to add key- values in above object
    obj['number'+i] = i; //here we are using Square brackets [] to add keys & after assignment symbol values. here values are numbers
}
console.log(obj);

/* Output will be
{number1: 1, number2: 2, number3: 3, number4: 4, number5: 5}
*/
