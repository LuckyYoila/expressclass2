
const form = document.querySelector('form');

// add submit event listenter
form.addEventListener('submit', (event) => { 
    displayDetails(event)
});

function displayDetails(event){
    event.preventDefault()
    console.log("submitted")
    let username = document.getElementById("username").value
    let password = document.getElementById("password").value
    

    alert(`username is ${username}, and password is ${password}`)
}