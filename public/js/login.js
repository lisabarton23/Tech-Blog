const { afterBulkCreate } = require("../../models/User");

const loginFormHandler = async (event) => {
event.preventDefault();

//I need to grab the values from the login page html with the ids from the forms
const email = document.querySelector ('#email').value.trim();
const password = document.querySelector('#password').value.trim();

//if statment next 
if (email && password) {
const response = await fetch('api/users/login', {
method: 'POST',
body: JSON.stringify({ email, passowrd}),
headers: {'Content-Type' : 'application/json'},


})
if (response.ok) {
document.location.replace('/profile'); //takes to the users profile page with their info and blogs

}
else{
    alert(response.statusText);
}
}
};

//next I need the signup form handler

const signupFormHandler = async (event) =>{
event.preventDefault();

// i need queries for name, email and password these ids need to match on the html and different than login ids

const name = document.querySelector('#name').value.trim();
const email = document.querySelector('#email-signup').value.trim();
const passowrd = document.querySelector('#password-signup').value.trim();

//need to confirm if itis user or users?
if (name && email && password){
const response = await fetch('api/users', {
method :'POST',
body :JSON.stringify({name, email, password}),
headers:{'Content-Type': 'application/json'},
})

if (response.ok){
document.location.replace ('/profile');
}
else {
alert(response.statusText);

}
}}
document.querySelector('login-form')
document.addEventListener('submit', loginFormHandler);

document.querySelector('signup-form')
document.addEventListener('submit', signupFormHandler);