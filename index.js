// console.log(document.getElementsByTagName("Body")[0].innerHTML)
document.addEventListener("DOMContentLoaded", function () {

    let registerObject ={}
    let loginObject = {}
    // let repository = [
    //     {first_name: "Rebecca", last_name: "Odoemela", phone_number: "08152728792", password:"2733"},
    //     {first_name: "ujay", last_name: "Eronmol", phone_number: "09876775554", password:"745643"},
    // ]
    function confirmRegistration() {
        if (Object.keys(registerObject).length === 4){
            try{
                let userRepository = LocalRepository.getItem("ewausers")
                if (userRepository === null){
                    let repository = [registerObject]
                    localStorage.setItem("ewausers", JSON.stringify(repository))
                } else {
                    let previousRepository = JSON.parse(userRepository)
                    let updatedRepository = [...previousRepository, registerObject]
                    localStorage.setItem("ewausers", JSON.stringify(updatedRepository))
                }
            } catch(error) {
                console.log(error)
            }
        } else {
            alert("Incomplete User Info")
        }
    }
    if(document.getElementsByClassName('register_btn').length > 0) {
    let button = document.getElementsByClassName("register_btn")[0]
    button.addEventListener("click", () => confirmRegistration())
}

    function handleInputChange(e) {
    registerObject = {...registerObject, [e.target.name]: e.target.value}
}

    function handleLoginChange(e) {
    loginObject = {...loginObject, [e.target.name]: e.target.value}
}
    if(document.getElementsByClassName('register_btn').length > 0) {
    let registerInputFields = document.getElementsByClassName('register_input')
    Array.from(registerInputFields).forEach((inputField) => 
    inputField.addEventListener("input", (e) => handleInputChange(e)))
    }

    if(document.getElementsByClassName('login_btn').length > 0){
    let loginInputFields = document.getElementsByClassName('login_input')
    Array.from(loginInputFields).forEach((inputField) => 
    inputField.addEventListener("input", (e) => handleLoginChange(e)))
    } 

    function confirmLogin(){
        let userRepository = JSON.parse(localStorage.getItem("ewausers"))
        let {email, password} = loginObject

            if(repository.findIndex(user => user.email === email) !== -1){

            if(repository.find(user => user.email === email).password === password){
                localStorage.setItem("ewauser", JSON.stringify(registerObject))
                location.href = 'home.html'
                // window.location.href = etc
            }else {
                alert('Please enter a correct password')
            }
        } else {
            alert('User Does Not Exist')
        }
    }
    let loginButton = document.getElementsByClassName("login_btn")[0]
    loginButton.addEventListener("click", () => confirmLogin())

})


    // for(let i = 0; i < inputFields.length; i++) {
    //     inputFields[i].addEventListener("input", (e) => handleInputChange(e))
    // }
// OR
    // function handleInputChange(e) {
    //     console.log(e)
    // }