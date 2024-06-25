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

// Fetch data
const postsPromise = getData("https://jsonplaceholder.typicode.com/posts");
const commentsPromise = getData(
  "https://jsonplaceholder.typicode.com/comments"
);
const usersPromise = getData("https://jsonplaceholder.typicode.com/users");

let arrOfPromises = [postsPromise, usersPromise];

function showComment(commentData, postElement) {
  const comment = commentData[Math.floor(Math.random() * commentData.length)];
  const commentsDiv = postElement.querySelector(".comments");
  commentsDiv.innerHTML = `<p>${comment.body}</p>`;
}

Promise.all(arrOfPromises)
  .then(([postData, userData]) => {
    commentsPromise.then((commentData) => {
      let content = "";
      for (let i = 0; i < 5; i++) {
        const user = userData.find((user) => user.id === postData[i].userId);
        content += `
        <div class="post" id="post-${postData[i].id}">
          <h2>Title: ${postData[i].title}</h2>
          <p>${postData[i].body}</p>
          <p>Username: ${user.username}</p>
          <p>Email: ${user.email}</p>
          <button onclick="showComment(${JSON.stringify(
            commentData
          )}, this.parentElement)">Show Comment</button>
          <div class="comments"></div>
        </div>
        <br>`;
      }
      document.querySelector("body").innerHTML = content;
    });
  })
  .catch((error) => {
    console.error("Error:", error);
  });
