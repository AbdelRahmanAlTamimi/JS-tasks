const task1 = fetch("https://jsonplaceholder.typicode.com/posts");

const myReq = task1.then((result) => {

    return result.json();
});



myReq.then((data) => {
   let content = ""
    for (let i = 0; i < 5; i++) {
        content += `
        <div class="post"> 
        <p>${data[i].title}</p>
        <p>${data[i].body.slice(0, 50)}</p>
        </div>
        <br><br><br>`;

    }
    document.querySelector("body").innerHTML = content;
    
})




