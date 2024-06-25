fetch("https://jsonplaceholder.typicode.com/comments?postId=1 ")
  .then((result) => {
    return result.json();
  })
  .then((data) => {
    let content = "";
    data.forEach((element) => {
      content += `
            <h2>${element.name}</h2>
            <p>${element.email}</p>
            <p><small>${element.body}</small></p>
            `;
    });
    document.getElementById("comments").innerHTML = content;
  })
  .catch((error) => {
    console.error("Error fetching comments:", error);
  });