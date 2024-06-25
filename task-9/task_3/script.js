
function getData(apiLink) {
    return new Promise((resolve, reject) => {
        let myReq = new XMLHttpRequest;
        myReq.onload = function () {
            if (this.readyState === 4 && this.status === 200) {
                resolve(JSON.parse(this.responseText));
            } else {
                reject(Error("No data found"))
            }
        }
        myReq.open("GET", apiLink);
        myReq.send();
    })
}

getData("https://jsonplaceholder.typicode.com/albums?userId=1 ")
    .then((data) => {
        let content = "";
        data.forEach(element => {
            content += `
            <p> <b>title is</b> ${element.title}</p>
            <br><br><br>
            `;
        });
        document.getElementById("albums").innerHTML = content;
})