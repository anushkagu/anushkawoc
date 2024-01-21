const Signup =document.querySelector('.Signup');
const form=document.querySelector('.form');
const loginLink =document.querySelector('.login-link');
const signupLink =document.querySelector('.signup-link');

         signupLink.addEventListener('click',() =>{
         Signup.classList.add('active')
    form.classList.add('active1')
       })
         loginLink.addEventListener('click',() =>{
         Signup.classList.remove('active')
         form.classList.remove('active1')
       })