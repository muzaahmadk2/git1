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

// let mul = function(x,y){
//     console.log(x * y);
// }
// let multwo = mul.bind(this,2);
// multwo(3);

// //...................................................

// let multiply = function(x){
//     return function (y){
//         console.log(x * y);
//     }
// }
    

//  let multiplytwo = multiply(2);
//  multiplytwo(3);


class student{
    static no = 0;
    constructor(n,a,p,b){
        this.name = n;
        this.age = a;
        this.phone = p;
        this.mark = b;
        student.no ++;
    }
    
    eligible(x)
    {
        return (y)=>{
            if(this.mark > x && this.age > y)
                console.log(this.name+' is eligible');
            else
                console.log(this.name+' is not eligible');
        }
    }




    static no_of_stud(){
        console.log(this.no);
    }
}

let s1 =new student('john',20,123,45);
let s2 =new student('ram',20,124,45);
let s3 =new student('kan',20,153,40);
let s4 =new student('mann',20,183,35);
let s5 =new student('ran',20,173,25);

 s5.eligible(35)(19);
 s1.eligible(35)(19);
 s2.eligible(35)(19);
 s3.eligible(35)(19);
 s4.eligible(35)(19);
//console.log(dd);
//student.no_of_stud();