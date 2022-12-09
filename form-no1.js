//var secondli = document.querySelector('li:nth-child(2)');
//secondli.style.backgroundColor = 'green';
//var thirdli = document.querySelector('li:nth-child(3');
//thirdli.style.display = 'none';

//var item =document.querySelectorAll('.list-group-item');
//item[1].style.color = 'green';

//var odditem =document.querySelectorAll('li:nth-child(odd)');
//for(var i=0;i<odditem.length;i++){
//    odditem[i].style.backgroundColor = 'green';
//}

//parent node
// var item = document.querySelector("#items");
//console.log(item.parentNode);
//item.parentNode.parentNode.style.backgroundColor = 'grey';

//child node
//console.log(item.children);

//first element child
///console.log(item.firstElementChild);
//item.firstElementChild.textContent = 'hello';

//last elemnt child

//console.log(item.lastElementChild);
//item.lastElementChild.style.color ='yellow';

//previous siblinf
//console.log(item.previousElementSibling);

// //create element
// var newDiv = document.createElement('div');
// //add class
// newDiv.className = 'hello';
// newDiv.id ='helllo1';
// //add attr
// newDiv.setAttribute('title','hello world');
// //create text node
// var text = document.createTextNode('hello world');

// //add text to div
// newDiv.appendChild(text);

//var container = document.querySelector('header .container');
//var h1 = document.querySelector('header h1');

//container.insertBefore(newDiv , h1);
//newDiv.style.fontSize = '30px';
//newDiv.style.fontWeight = 'bold'

// var container = document.getElementById('main');
// //var newli = document.createElement('li');
// //newli.className ='list-group-item';
// //newli.appendChild(text);
// console.log(newDiv);
// var secondli = document.getElementById('items');
// container.insertBefore(newDiv,secondli);

var form = document.getElementById('addForm');
var exp = document.getElementById('expenses');
var expense = document.getElementById('expense');
var dis = document.getElementById('discription');
var cat = document.getElementById('catogory');

//form submit event

form.addEventListener('submit' , addexpense);
function addexpense(e){
    e.preventDefault();

    //add to local storage

    let item = localStorage.getItem('userdetails') || '[]';
        item = JSON.parse(item);
        item.push({expense: expense.value, discription: dis.value , catogory:cat.value});
        localStorage.setItem('userdetails', JSON.stringify(item));

    //creat li item

    var n = document.getElementById('expense').value;
    var d = document.getElementById('discription').value;
    var c = document.getElementById('catogory').value;
    var li = document.createElement('li');
    li.className = 'list-group-item';
    li.appendChild(document.createTextNode(`${n}${"-"}`));

    //add discription

    li.appendChild(document.createTextNode(d));

    //add catogory

    li.appendChild(document.createTextNode(`${"-"}${c}`));


    //create delete button

    var butt = document.createElement('button');
    butt.className = 'btn btn-danger btn-sm float-right delete';
    butt.appendChild(document.createTextNode('Delete expense'));
    li.appendChild(butt);

    //create edit button

    var ebutt = document.createElement('button');
    ebutt.className = 'btn btn-sm float-right editBtn';
    ebutt.appendChild(document.createTextNode('Edit expense'));
    //ebutt.style.marginLeft = '900px';
    li.appendChild(ebutt);

    //append li list item

    exp.appendChild(li);


}
//delete event
expenses.addEventListener('click' , remove);
function remove(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are You Sure?')){
          var li = e.target.parentElement;
          var d =li.childNodes[1].textContent;
          exp.removeChild(li);
          let k =JSON.parse(localStorage.getItem('userdetails'));
          if(k){
            k = k.filter(element => {
              return element.discription != d;
                
            });
        }
        localStorage.setItem('userdetails', JSON.stringify(k));
      }
    }

}

//edit event
expenses.addEventListener('click',edit);
function edit(e){
    if(e.target.classList.contains('editBtn')){
        var li = e.target.parentElement;
        var d =li.childNodes[1].textContent;
        console.log(d);
        exp.removeChild(li);
        let k =JSON.parse(localStorage.getItem('userdetails'));
          if(k){
            k = k.filter(element => {
              if(element.discription == d){
                expense.value = element.expense;
                dis.value = element.discription;
                cat.value = element.catogory;
              }
              return element.discription != d;
                
            });
    
          }
          localStorage.setItem('userdetails', JSON.stringify(k));
    }
}