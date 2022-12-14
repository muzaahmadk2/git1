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


// class student{
//     static no = 0;
//     constructor(n,a,p,b){
//         this.name = n;
//         this.age = a;
//         this.phone = p;
//         this.mark = b;
//         student.no ++;
//     }
    
//     eligible(x)
//     {
//         return (y)=>{
//             if(this.mark > x && this.age > y)
//                 console.log(this.name+' is eligible');
//             else
//                 console.log(this.name+' is not eligible');
//         }
//     }




//     static no_of_stud(){
//         console.log(this.no);
//     }
// }

// let s1 =new student('john',20,123,45);
// let s2 =new student('ram',20,124,45);
// let s3 =new student('kan',20,153,40);
// let s4 =new student('mann',20,183,35);
// let s5 =new student('ran',20,173,25);

//  s5.eligible(35)(19);
//  s1.eligible(35)(19);
//  s2.eligible(35)(19);
//  s3.eligible(35)(19);
//  s4.eligible(35)(19);
// //console.log(dd);
// //student.no_of_stud();

// document.getElementById('click-me')
// .addEventListener('click',function xyz(){
//     console.log('clicked me');
// })
// //...........................................

// document.addEventListener('DOMContentLoaded',function(){
//     console.log('DOM Loaded');
// })

// const posts =[
//     {title:'post one',body:'this is posst one',createdAt:new Date().getTime()},
//     {title:'post two',body:'this is post two',createdAt:new Date().getTime()}
// ];

// let interval;
// function getPost()
// {
//     clearInterval(interval);
//     interval = setInterval(() =>{

   
//     setTimeout(()=>{
//         let op ='';
//         posts.forEach((post)=>{
//             op += `<li>${post.title} created ${Math.floor((new Date().getTime() - post.createdAt)/1000)} seconds ago</li>`;
//         })
//         document.body.innerHTML = op;
        
//     },1000)
// },1000)
    
// }
// //getPost();

// function createPost(post,callback)
// {
//     setTimeout(() =>{
//         posts.push(post);
//         callback();
//     },2000)
// }

// createPost({title:'post three',body:'this is post three',createdAt:new Date().getTime()},getPost);

// function create4Post(post,callback)
// {
//   setTimeout(() =>{
//     posts.push(post);
//     callback();
//   },3000)
// }
// create4Post({title:'post four',body:'this is post four',createdAt:new Date().getTime()},getPost)


// var timer;
// var count = 0;
// function lastEditedInSecondsAgo()
// {
    
//     clearInterval(timer);
//     timer = setInterval(() =>{
//         count++;
//         console.log(count)
//     },1000)
// }
// lastEditedInSecondsAgo();
// //clearInterval(timer)

// const posts =[
//         {title:'post one',body:'this is posst one'},
//         {title:'post two',body:'this is post two'}
//     ];
    
// function getPost()
// {
//     setTimeout(()=>{
//         let op ='';
//         posts.forEach((post)=>{
//             op += `<li>${post.title}</li>`;
//         })
//         document.body.innerHTML = op;
        
//     },1000)
// }
// //getPost();
    
// function createPost(post)
// {
//     return new Promise((resolve, reject) => {
//         setTimeout(() =>{
//             posts.push(post);
            
//             const error = false;
//             if(!error){
//                 resolve();
//             }else{
//                 console.log('something went wrong');
//             }
//         },2000)
        
//     })
   
// }



// function deletePost()
// {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {

//             if(posts.length){
//                 posts.pop();
//                 resolve();
//             }else{
//                 console.log('something went wrong');
//             }
//         },1000)
//     })
// }


// createPost({title:'post three',body:'thi is post three'})
//     .then(()=>{
//         getPost();
//         deletePost().then(()=>{
//             getPost();
//             deletePost().then(()=>{
//                 getPost();
//                 deletePost().then(()=>{
//                     getPost();
//                     deletePost().then(getPost)
//                     .catch((err)=>{console.log(err)});
//                 })
//             }
//             )
//         });
        
//     })
//     .catch(err => console.log(err));





// const promise1 = Promise.resolve('hello world');
// const promise2 = 10;
// const promise3 = new Promise((resolve, reject) => {
//     setTimeout(resolve,2000,'good bye');
// })

// Promise.all([promise1,promise2,promise3]).then(values => console.log(values));

// //.........................................................

// const user={
//     name:'abc',
//     lastactivitytime:new Date()
// };

// function updateLastUserActivityTime()
// {
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{

//             user.lastactivitytime = new Date();
            
//             resolve(user.lastactivitytime);

//         },1000)
//     })
// }

// console.log('before creation user activity time = '+user.lastactivitytime)
// Promise.all([createPost({title:'post three',body:'thi is post three'}),updateLastUserActivityTime()])
//     .then(([a,b]) => {
//         console.log(posts);
//         console.log('user activity time = '+b);
//         deletePost().then(()=>console.log(posts));
//     });

    
//----------------------------------------------------------------------------

//promises using async await

console.log('person 1: shows ticket');
console.log('person 2:shows ticket');

const preMovie = async () =>{

    const pwife = new Promise((resolve, reject) => {
        setTimeout(()=>resolve('ticket'))
    },3000)

    const getpop = new Promise((resolve, reject) => {
        resolve('popcorn');
    })

    const getbutter = new Promise((resolve, reject) => {
        resolve('butter');
    })

    const getcold = new Promise((resolve, reject) => {
        resolve('coke');
    })

    let ticket = await pwife;

    // console.log('wife:i have tickets');
    // console.log('hus:we should go in');
    // console.log('wife:i need pop');

    // let pop = await getpop;

    // console.log('hus:i got popcorn');
    // console.log('wife:i need buttter on it');

    // let butt = await getbutter;

    // console.log('wife:we should go in');

    // let cold = await getcold;

    let [pop,butt,cold] = await Promise.all([getpop,getbutter,getcold]);


    

    return ticket;
}

preMovie().then((m) => console.log(m));

console.log('person 4:shows ticket');
console.log('person 5:shows ticket');

//_____________________________________________________________________


//createpost and delete post bt using async await
        



    const posts =[
        {title:'post one',body:'this is posst one'},
        {title:'post two',body:'this is post two'}
    ];


    function getPost()
        {
            return new Promise((resolve, reject) => {
                setTimeout(()=>{
                    let op ='';
                    posts.forEach((post)=>{
                        op += `<li>${post.title}</li>`;
                    })
                    document.body.innerHTML = op;
                    resolve('displayed');
                    
                },1000)
            })
           
        }

    function createPost(post){
        return new Promise((resolve, reject) => {
        setTimeout(() =>{
            posts.push(post);
            
            const error = false;
            if(!error){
                resolve('post created');
            }else{
                console.log('something went wrong');
            }
        },2000)
        
    })
    }
   





    function deletePost(){
        return new Promise((resolve, reject) => {
        setTimeout(() => {

            if(posts.length){
                posts.pop();
                resolve('post deleted');
            }else{
                reject('something went wrong');
            }
        },1000)
    })
    }

const postupdate = async ()=>{

    try{
        let create = await createPost({title:'post three',body:'this is post three'});
        console.log(create);
        let dis = await getPost();
        console.log(dis);
        let del = await deletePost();
        console.log(del);
        await getPost();
        await deletePost();
        await getPost();
        await deletePost();
        await getPost();
        await deletePost();

    }catch(err){ document.body.innerHTML = err;}
   



}
postupdate();