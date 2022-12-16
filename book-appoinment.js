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

        axios.post('https://crudcrud.com/api/ced4b69101d142afaf3fb884cff21435/appoinmentData',ele)
            .then((res)=>{
                addele(res.data);
                
            })
            .catch((err)=>{
               
                msg.innerHTML = `<h4>${err}<h4>`
            })
        //addele(ele);

        nameInput.value = '';
        emailInput.value = '';
        
      }

//function add element

      function addele(element){
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${element.name} : `));
        li.appendChild(document.createTextNode(element.email));
  
        // add edit button;
        var ebutt = document.createElement('button');
        ebutt.className = 'edit';
        ebutt.appendChild(document.createTextNode('Edit'));
        ebutt.style.marginLeft = '10px';
        li.appendChild(ebutt);
  
        //add delete button
        var dbutt = document.createElement('button');
        dbutt.className = 'delete';
        dbutt.appendChild(document.createTextNode('Delete'));
        dbutt.style.marginLeft = '10px';
        li.appendChild(dbutt);
  
  
        userList.appendChild(li);
  
      }

//function to delete

userList.addEventListener('click' , remove);
    function remove(e){
      if(e.target.classList.contains('delete')){
        
          var li = e.target.parentElement;
          userList.removeChild(li);
        }
      }
  
//function to edit

userList.addEventListener('click' , remove1);
    function remove1(e){
      if(e.target.classList.contains('edit')){

        
          var li = e.target.parentElement;
          var ri1 = li.childNodes[0].textContent
          var ri2 = li.childNodes[1].textContent
          nameInput.value = ri1;
          emailInput.value = ri2;
          userList.removeChild(li);

        }
      }

