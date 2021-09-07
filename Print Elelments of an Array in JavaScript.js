//Example 1
var num = 5;
var members = ['Parameswar','Minta','Raju','Indu','Chandan']; 
function printArrayElements(arr,n){
    console.log('Elements of Array are:');
    for(var i=0; i<n; i++){
        console.log(arr[i]);
    }
}
printArrayElements(members,num);

/*Output of Example 1:
 Elements of Array are:
 Parameswar
 Minta
 Raju
 Indu
 Chandan */


//Example 2

var n = 5;
var numbers = [85,86,87,88,89]; 
function printElementsOfArray(arr,n){
    console.log('Elements of Array are:');
    arr.forEach(function(el,k){
        console.log(el);
    }); 
}
printElementsOfArray(numbers,n);

/*Output of Example 2:
 Elements of Array are:
 85
 86
 87
 88
 89*/
