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

