var form = document.getElementById('addForm');
var exp = document.getElementById('expenses');
var expense = document.getElementById('expense');
var dis = document.getElementById('discription');
var cat = document.getElementById('catogory');

// submit event

form.addEventListener('submit' , addexpense);
  
function addexpense(e){
    e.preventDefault();

        const n = expense.value;
        const d = dis.value;
        const c = cat.value;

        var ele ={
          n,
          d,
          c
        };

        axios.post('https://crudcrud.com/api/08a61d70bb4b4f9785bcabf251d22a68/expensedata',ele)
            .then((res)=>{

                addele(res.data)
                
            })
            .catch((err)=>{
               
                msg.innerHTML += `<h4>${err}<h4>`
            })
        

        expense.value = '';
        dis.value = '';
        cat.value = '';
        
      }

// load content

window.addEventListener('DOMContentLoaded',()=> {

    axios.get('https://crudcrud.com/api/08a61d70bb4b4f9785bcabf251d22a68/expensedata')
        .then((res)=>{
            for(let i = 0;i < res.data.length;i ++)
                addele(res.data[i])
        })
        .catch((err)=>{
            msg.innerHTML += `<h6>${err}</h6>`
        })
})

//function add element

function addele(element){
        

    child = `<li id =${element._id} >${element.n} - ${element.d} - ${element.c} 
    <button onclick=edit('${element.n}','${element.d}','${element.c}','${element._id}') class='btn btn-dark btn-sm float-right'>Edit-expense</button> 
    <button onclick=remove('${element._id}') class='btn btn-danger btn-sm float-right '>Delete-user</button>
    </li>`
    exp.innerHTML += child;

  }

  //function to delete

  function remove(e){
      
    axios.delete(`https://crudcrud.com/api/08a61d70bb4b4f9785bcabf251d22a68/expensedata/${e}`)
        .then(()=>{

            let li = document.getElementById(e);
            exp.removeChild(li)
            
        })
        .catch((err)=>{

            msg.innerHTML += `<h6>${err}</h6>`

        })

  }

  //function to edit


  function edit(n,d,c,id){
    

    expense.value = n;
    dis.value = d;
    cat.value = c;
    remove(id);

  }
