//this is the profile page for the user if they are signed in or after they sign up needs to have blog acess
const newFormHandler = async (event) => {
    event.preventDefault();
const name = document.querySelector('#posttitle').value.trim();
const date = document.querySelector('#date_created').value.trim();
const userId = document.querySelector('#user_id').value.trim();
const entry = document.querySelector('#entry').value.trim();
console.log (name, date, userId, entry)

if (name && date && userId && entry) {
    const response = await fetch(`/api/blogs`, {
      method: 'POST',
      body: JSON.stringify({ name, date, userId, entry }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to create blog entry');
    }
  }}
  
  
  
  document.querySelector('.new-blogEntry-form').addEventListener('submit', newFormHandler);
  
 // document.querySelector('.deletebtn').addEventListener('click', delButtonHandler);
  
