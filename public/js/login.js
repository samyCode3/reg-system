const form = document.getElementById("form");
const err = document.getElementById("err");
const error = document.getElementById("error");
const loginUrl = "api/login"

form.addEventListener("submit", () => {
    const UserValue = {
        email: email.value,
        password: password.value,
     }
     const login = 
     {
        method : "POST",
        body : JSON.stringify(UserValue),
        headers : {
           "Content-type" : "application/json"
        }

     }
     fetch(loginUrl, login).then((res) => {
        res.json().then((data) => {
        const login = data
        if(login.status == "error")
        {
            error.setAttribute("style", "display : block;")
            err.innerHTML = `
            ${login.error}
            `
        } else 
        {
         if (login.status === "success") {
             location.assign("./home")
         } else 
         {
            location.assign("./login")
         }
        }
        })
     })
})

