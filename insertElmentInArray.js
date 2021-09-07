//A program to insert 5 elements in array and display it using javascript:
var numbers=[];
console.log(numbers);
for(var i=10; i<15; i++){
    numbers.push(i); //Push method adds element at last index of an array.
}

console.log(numbers);
console.log(numbers.join()); /* The elements will be separated by a specified 
                            separator using join() method.
                            The default separator is comma (,).*/
/* Output will be as
[10,11,12,13,14]
10,11,12,13,14
*/
