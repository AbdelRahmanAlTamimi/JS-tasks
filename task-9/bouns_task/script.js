// function getData(apiLink) {
//   return new Promise((resolve, reject) => {
//     let myReq = new XMLHttpRequest();
//     myReq.onload = function () {
//       if (this.readyState === 4 && this.status === 200) {
//         resolve(JSON.parse(this.responseText));
//       } else {
//         reject(Error("take this"));
//       }
//     };
//     myReq.open("GET", apiLink);
//     myReq.send();
//   });
// }
// // post section
// const post = getData("https://jsonplaceholder.typicode.com/posts")
// const comment = getData("https://jsonplaceholder.typicode.com/comments");
// const user = getData("https://jsonplaceholder.typicode.com/users");
// let arrOfPromises = [post, user];

// function addComment(i) {
//   comment.then((data) => {
//     let content = "";
//     content += `
//        <p>${data[i].body}</p>
//       <br><br><br>`;
//     return content;
//   });
// }

// Promise.all(arrOfPromises).then(([postData, userData]) => {
//   let content = "";
//   for (let i = 0; i < 5; i++) {
//     content += `
//      <div class="post">
//         <h2> title: ${postData[i].title}</h2>
//        <p>${postData[i].body}</p>
//         <p>UserName: ${userData[i].username}</p>
//         <p>Email: ${userData[i].email}</p>
//         <button>Show Comment</button>
//         <div id="comments"></div>
//         </div>
//        </div>
//       <br>`;
    
//   };
  
//   document.querySelector("body").innerHTML = content;
 
//     document
//       .getElementById("comments")
//       .addEventListener("click", addComment());

// });

 
  function getData(apiLink) {
    return new Promise((resolve, reject) => {
      let myReq = new XMLHttpRequest();
      myReq.onload = function () {
        if (this.readyState === 4 && this.status === 200) {
          resolve(JSON.parse(this.responseText));
        } else {
          reject(Error("Failed to load data"));
        }
      };
      myReq.open("GET", apiLink);
      myReq.send();
    });
  }

  
  const post = getData("https://jsonplaceholder.typicode.com/posts");
  const comment = getData("https://jsonplaceholder.typicode.com/comments");
  const user = getData("https://jsonplaceholder.typicode.com/users");
  let arrOfPromises = [post, user];

  function addComment(commentsData, commentIndex, commentContainer) {
    const comment = commentsData[commentIndex];
    let content = `
    <p>${comment.body}</p>
    <br><br><br>`;
    commentContainer.innerHTML = content;
  }

  Promise.all(arrOfPromises)
    .then(([postData, userData]) => {
      comment.then((commentData) => {
        let content = "";
        for (let i = 0; i < 5; i++) {
          content += `
        <div class="post">
          <h2>Title: ${postData[i].title}</h2>
          <p>${postData[i].body}</p>
          <p>Username: ${userData[i].username}</p>
          <p>Email: ${userData[i].email}</p>
          <button id="show-comment-${i}">Show Comment</button>
          <div class="comments" id="comments-${i}"></div>
        </div>
        <br>`;
        }
        document.querySelector("body").innerHTML = content;

        for (let i = 0; i < 5; i++) {
          const button = document.getElementById(`show-comment-${i}`);
          const commentContainer = document.getElementById(`comments-${i}`);
          button.addEventListener("click", () =>
            addComment(commentData, i, commentContainer)
          );
        }
      });
    })
    .catch((error) => {
      console.error("Error:", error);
    });





  
