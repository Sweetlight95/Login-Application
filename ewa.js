document.addEventListener("DOMContentLoaded", () =>{

    let user = JSON.parse(localStorage.getItem("ewauser"))
    document.getElementById("username").innerHTML = 'Hey ' + user.last_name; 
})