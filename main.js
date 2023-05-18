function closeNav() {
    document.getElementById("mySidebar").style.display = "none";
    
  }

  function openNav() {
    document.getElementById("mySidebar").style.display = "block";
    
  }

//   const form = document.getElementById("form")
//  const first = document.getElementById("first")
//  const last = document.getElementById("last")
// //  const save =  document.getElementById("form")
 
// form.addEventListener('submit', e=>{
//   e.preventDefault()
//   validateInputs();
// })

// const setError = (element, message) =>{
//   const inputControl = element.parentElement;
//   const errorDisplay = inputControl.querySelector('.error');

//   errorDisplay.innerText = message;
//   inputControl.classList.add('error');
//   inputControl.classList.remove('success')
// }
// const setSuccess = element => {
//   const inputControl = element.parentElement;
//   const errorDisplay = inputControl.querySelector('.error');

//   errorDisplay.innerText = '';
//   inputControl.classList.add('success');
//   inputControl.classList.remove('error');
// };


// const validateInputs = ()=>{
//   const firstnameValue = first.value.trim()
//   const lastValue = last.value.trim()

//   if(firstnameValue===''){
//     setError(first,'first is required')
//   }else{
//     setSuccess(first)
//   }
//   if(lastValue===''){
//     setError(last,'first is required')
//   }else{
//     setSuccess(last)
//   }
// }

const form = document.getElementById('form');
const first = document.getElementById('first');
const last = document.getElementById('last');
const email = document.getElementById('email')



form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const firstValue = first.value.trim();
    const lastValue = last.value.trim();
    const emailValue = email.value.trim()

    if(firstValue === '') {
   
        document.getElementById('first').style.border = "1px solid red"
    } else {
        setSuccess(first);
    }


    if(lastValue === '') {
       
        document.getElementById('last').style.border = "1px solid red"
    }  else {
        setSuccess(last);
    }

    if(emailValue === '') {
      setError(email, 'Email is required');
      document.getElementById('email').style.border = "1px solid red"
  } else if (!isValidEmail(emailValue)) {
      setError(email, 'Provide a valid email address');
      document.getElementById('email').style.border = "1px solid red"
  } else {
      setSuccess(email);
      
  }

};
