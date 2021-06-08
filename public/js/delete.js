// async function deletePost(event) {
//     event.preventDefault();
//     console.log("deleting")
//     //const id = //window.location.toString().split("/")[
//       //window.location.toString().split("/").length - 1
//     ];
//   //dynamically get the id
//     console.log(id);
  
//     const response = await fetch(`/api/blogs/${id}`, {
//       method: "DELETE",
//       body: JSON.stringify({
//       id: id,
//       }),
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });
  
//     if (response.ok) {
//       document.location.replace("/");
//     } else {
//       alert(response.statusText);
//     }
//   }
  
const delButtonHandler = async (event) => {
    event.preventDefault();
    console.log('btn works')
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
      console.log(id)
  
      const response = await fetch(`/api/blogs/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to delete blog entry');
      }
    }
  };

  document.querySelector(".deletePostBtn").addEventListener("click", delButtonHandler);