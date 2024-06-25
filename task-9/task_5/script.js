function checked(bool) {
    if (bool)
        return "checked";
}

fetch("https://jsonplaceholder.typicode.com/todos ")
  .then((result) => {
    return result.json();
  })
    .then(data => {
        data.length = 5;
        return data
    })
  .then((data) => {
    let content = "";
    data.forEach((element) => {
      content += `
            <input type = "checkbox" ${checked(element.completed)}>
            <lable>${element.title}</lable>
            <br><br><br>
            `;
    });
    document.getElementById("to-dos").innerHTML = content;
  })
  .catch((error) => {
    console.error("Error fetching comments:", error);
  });
