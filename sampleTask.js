// var obj ={
//     num : 2
// };

// var add = function(a,b){
//     return this.num + a + b;
// }

// console.log(add.call(obj,1,2));
// //..........................................

// var arr =[2,3];
// console.log(add.apply(obj,arr));

// //..........................................

// var bound = add.bind(obj);
// console.log(bound(8,6));

// //..........................................

// var student ={
//     age : 20
// };

// var print = function(){
//     console.log(this.age);
// }

// var ageprint = print.bind(student);
// ageprint();

let mul = function(x,y){
    console.log(x * y);
}
let multwo = mul.bind(this,2);
multwo(3);

//...................................................

let multiply = function(x){
    return function (y){
        console.log(x * y);
    }
}
    

 let multiplytwo = multiply(2);
 multiplytwo(3);
