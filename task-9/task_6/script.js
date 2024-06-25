fetch("https://jsonplaceholder.typicode.com/users")
  .then((result) => {
    return result.json();
  })
  .then((data) => {
    let content = "";
    data.forEach((element) => {
      content += `
            <h2>${element.name}</h2>
            <p>${element.username}</p>
            <p>${element.email}</p>
            <p><small>${element.address.street}, ${element.address.suite}, ${element.address.city}, ${element.address.zipcode}</small></p>
            `;
    });
    document.getElementById("users").innerHTML = content;
  })
  .catch((error) => {
    console.error("Error fetching comments:", error);
  });
