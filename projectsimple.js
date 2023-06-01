function getPosts(){
    return fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => {
        if(response.ok)    
            return response.json()
        else
            throw Error("Une erreur est survenue.");
    })
    .catch((error) => {
        console.log(error.message);
    })
}

function newRandomChild(parent, data, id = 0){ 
    let newChild = document.createElement("div");
    newChild.className = "post";
    newChild = document.createElement("div");
    let i = Math.floor(Math.random() * 100);
    if(id > 0) i=id-1; 
    newChild.innerHTML = `
    <div class="article" id="${data[i].id}">    
    <img class="https://github.com/dzc1/amazon-class01-apr23/blob/main/boiler-plates/midterm-boiler-plates/midterm-project-boiler/resources/images/projects-section/1.jpg?raw=true${(i % 6) + 1}.jpg" alt="Project-image">
        <h2>${data[i].title}</h2>
        <p>${data[i].body}</p>
    </div> 
    `;
    parent.appendChild(newChild);
}