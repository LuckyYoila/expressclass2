const form = document.querySelector('form');

console.log("Showing on the console")

// add submit event listenter
form.addEventListener('submit', (event) => { 
    displayDetails(event)
});

const displayDetails = (event)=>{
    event.preventDefault()
    console.log("submitted")
    let username = document.getElementById("username").value
    let password = document.getElementById("password").value
    
    alert(`username is ${username}, and password is ${password}`)
}