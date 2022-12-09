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
var item = document.getElementById('items');

//form submit event

form.addEventListener('submit' , additem);
function additem(e){
    e.preventDefault();

    //creat li item

    var n = document.getElementById('item').value;
    var d = document.getElementById('discription').value;
    var li = document.createElement('li');
    li.className = 'list-group-item';
    li.appendChild(document.createTextNode(n));

    //add discription

    li.appendChild(document.createTextNode(`${" "}${d}`));
    //li.appendChild(document.createTextNode(d));


    //create delete button

    var butt = document.createElement('button');
    butt.className = 'btn btn-danger btn-sm float-right delete';
    butt.appendChild(document.createTextNode('X'));
    li.appendChild(butt);

    //create edit button

    var ebutt = document.createElement('button');
    ebutt.className = 'btn btn-sm float-right editBtn';
    ebutt.appendChild(document.createTextNode('Edit'));
    //ebutt.style.marginLeft = '900px';
    li.appendChild(ebutt);

    //append li list item

    item.appendChild(li);


}
//delete event
item.addEventListener('click' , remove);
function remove(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are You Sure?')){
          var li = e.target.parentElement;
          item.removeChild(li);
        }
      }

}

//filter 

var filter = document.getElementById('filter');
filter.addEventListener('keyup' , fileritem);
var itemlist = document.getElementsByTagName('li');
function fileritem(e){
    var text = e.target.value.toLowerCase();
    //console.log(items);
    Array.from(itemlist).forEach(function(i){
        var itemname1 = i.firstChild.textContent;
        var itemname2 = i.childNodes;
        //var j = itemname2[2].textContent;
        // console.log(itemname2[2]);
        if(itemname1.toLowerCase().indexOf(text) != -1 || itemname2[1].textContent.toLowerCase().indexOf(text) != -1)
        {
            i.style.display = 'block';
        }
        else{
            i.style.display = 'none';
        }

    })

}
