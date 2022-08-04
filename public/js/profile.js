const form = document.getElementById("form");
const UserInfo = "api/loggedin";
const update = document.getElementById("update")
const err = document.getElementById("err");
const error = document.getElementById("error");
const cancel = document.getElementById("cancel")
const changes = document.getElementById("changes")
changes.addEventListener("click", (e) => {
    update.style.display = "block";
})
cancel.addEventListener("click", (e) => {
    update.style.display = "none";
})

form.addEventListener("submit", () => {
    function update_user() {
      const GetMethod =
      {
        method: "GET",
        headers:
        {
          "usersId": localStorage.auth_key
        }
      }
      
      fetch(UserInfo, GetMethod).then((res) => {
        res.json().then((data) => {
          let UserId = data.user.userId
          const update_user = `api/update/${UserId}`
          const  PostUpdate = 
         {
            fullname : fullname.value,
            username : username.value,
            
         }
       
          const updateInfo =
          {
            method: "POST",
            body : JSON.stringify(PostUpdate),
            headers: 
            {
              "Content-Type" : "application/json"
            }
          }
         

          fetch(update_user, updateInfo).then((res) => {
            res.json().then((update_user) => {
              let UpdateSuccess = update_user
                if(UpdateSuccess.status == "error") 
                {
                  error.setAttribute("style", "display : block;")
                  err.innerHTML = `
                  ${UpdateSuccess.error}
                  `
                } else 
                {
                 
                    setTimeout(() => {
                      location.assign("./home")
                    }, 1000);
                }
            })
          })
        })
      })
  
    }
    update_user()
  
  
  
  })