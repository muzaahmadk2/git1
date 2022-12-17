  const myForm = document.querySelector('#my-form');
  const nameInput = document.querySelector('#name');
  const emailInput = document.querySelector('#email');
  const msg = document.querySelector('.msg');
  const userList = document.querySelector('#users');

  
  myForm.addEventListener('submit', onSubmit);
  
  function onSubmit(e) {
    e.preventDefault();

        const name = nameInput.value;
        const email = emailInput.value

        var ele ={
          name,
          email
        };

        axios.post('https://crudcrud.com/api/4e6f4f561c134f5b81cf25df3acc8985/appoinmentData',ele)
            .then((res)=>{

                addele(res.data)
                
            })
            .catch((err)=>{
               
                msg.innerHTML += `<h4>${err}<h4>`
            })
        //addele(ele);

        nameInput.value = '';
        emailInput.value = '';
        
      }

window.addEventListener('DOMContentLoaded',()=> {

    axios.get('https://crudcrud.com/api/4e6f4f561c134f5b81cf25df3acc8985/appoinmentData')
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
        

        child = `<li id =${element._id}>${element.name} : ${element.email} 
        <button onclick=remove1('${element.name}','${element.email}','${element._id}')>Edit</button> 
        <button onclick=remove('${element._id}')>Delete-user</button>
        </li>`
        userList.innerHTML += child;
  
      }

//function to delete

    function remove(e){
      
        axios.delete(`https://crudcrud.com/api/4e6f4f561c134f5b81cf25df3acc8985/appoinmentData/${e}`)
            .then(()=>{

                let li = document.getElementById(e);
                userList.removeChild(li)
                
            })
            .catch((err)=>{

                msg.innerHTML += `<h6>${err}</h6>`

            })

      }
  
//function to edit


    function remove1(name,email,id){
    

        nameInput.value = name;
        emailInput.value = email;
        remove(id);

      }

