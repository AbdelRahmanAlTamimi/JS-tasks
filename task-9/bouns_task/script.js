
let post = fetch("https://jsonplaceholder.typicode.com/posts")
let user = post.then((user) => {
  user = fetch("https://jsonplaceholder.typicode.com/users");
  return user
});
let comment = user.then(comment => {
  comment = fetch("https://jsonplaceholder.typicode.com/comments");
  return comment;
})
let postResponse = post.then(response => {
  return response.json();
})
let userResponse = user.then(response => {
  return response.json();
})
let commentResponse = comment.then(response => {
  return response.json();
})


postResponse.then(postData => {
  userResponse.then(userData => {
    commentResponse.then(commentData => {
      let content = "";
      for (let i = 0; i < 5; i++) {
        content += `
        <div class="post">
          <h2>Title: ${postData[i].title}</h2>
          <p>${postData[i].body}</p>
          <p>Username: ${userData[i].username}</p>
          <p>Email: ${userData[i].email}</p>
          <button id="toggleButton${i}">Show Comment</button>
          <div id="myComment${i}" class="hidden">
          ${commentData[i].body}
          </div>
        </div>
        <br>`;
      };
      document.querySelector("body").innerHTML = content;
      for (let i = 0; i < 5; i++) {
        const toggleButton = document.getElementById(`toggleButton${i}`);
        const myComment = document.getElementById(`myComment${i}`);

        toggleButton.addEventListener("click", () => {
          if (myComment.classList.contains("hidden")) {
            myComment.classList.remove("hidden");
            myComment.classList.add("visible");
          } else {
            myComment.classList.remove("visible");
            myComment.classList.add("hidden");
          }
        })
      
      
      }
    });
    })
  })



  
