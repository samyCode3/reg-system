const form = document.getElementById("form");
const err = document.getElementById("err");
const error = document.getElementById("error");
const RegUrl = "api/register"


form.addEventListener("submit", () => {
    const UserValue = {
        fullname : fullname.value,
        username : username.value,
        email: email.value,
        number: number.value,
        date: date.value,
        password: password.value,
        confirmation : confirmation.value,  
     }
     const Reg = 
     {
        method : "POST",
        body : JSON.stringify(UserValue),
        headers : {
           "Content-type" : "application/json"
        }

     }
     fetch(RegUrl, Reg).then((res) => {
    
        res.json().then((data) => {
         console.log(res)
        const register = data
        if(register.status == "error")
        {
            error.setAttribute("style", "display : block;")
            err.innerHTML = `
            ${register.error}
            `
            
        } else 
        {
         if (register.status === "success") {
            location.assign("./login")
         }
        }
        })
     })
})

