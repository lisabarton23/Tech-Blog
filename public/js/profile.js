//this is the profile page for the user if they are signed in or after they sign up needs to have blog acess
const newFormHandler = async (event) => {
    event.preventDefault();
const name = document.querySelector('#posttitle').value.trim();
const date = document.querySelector('#date_created').value.trim();
const entry = document.querySelector('#entry').value.trim();


if (name && date && contents) {
    const response = await fetch(`/api/blog`, {
      method: 'POST',
      body: JSON.stringify({ name, date, contents }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to create blog entry');
    }
  }}
  const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/api/blog/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to delete blog entry');
      }
    }
  };
  
  document
    .querySelector('.new-blogEntry-form')
    .addEventListener('submit', newFormHandler);
  
  document
    .querySelector('.blog-entries-list')
    .addEventListener('click', delButtonHandler);
  
