function getData(apiLink) {
    return new Promise((resolve, reject) => {
        let myReq = new XMLHttpRequest();
        myReq.onload = function () {
            if (this.readyState === 4 && this.status === 200) {
                resolve(JSON.parse(this.responseText))
            } else {
                reject(Error("take this"))
            }
        }
        myReq.open("GET", apiLink);
        myReq.send();
    });
    
}

getData("https://jsonplaceholder.typicode.com/photos?albumId=1")
    .then(data => {
        content = ""
        data.forEach(element => {
            
            content += `
            <img src="${element.url}" >
            <br><br><br>
            `;
        });
        document.getElementById("photos").innerHTML = content;
})
