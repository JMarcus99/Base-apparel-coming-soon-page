const formError = document.querySelector('form')
const input = document.querySelector('input')
const small = document.querySelector('small')
const btnSubmit = document.querySelector('.btn-submit')


btnSubmit.onclick = () => {
  if(!validateEmail(input.value)){
    formError.classList.add('error')
  }else {
    formError.classList.remove('error')
    document.body.innerHTML= `<h1 style="font-size: 4rem;
  text-align: center;
  margin-top: 30vh;">Thank you!</h1>`
  }
}


function validateEmail(email) {
  var re = /\S+@\S+\.\S+/;
  return re.test(String(email).toLowerCase());
}