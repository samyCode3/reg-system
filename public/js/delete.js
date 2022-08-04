const accept = document.getElementById("yes");
const reject = document.getElementById("No");
const UserInfo = "api/loggedin";
accept.addEventListener("click", () => {
  function DelUser() {
    const GetMethod =
    {
      method: "GET",
      headers:
      {
        "usersId": localStorage.auth_key
      }
    }
    // const Del = "api/deleted/:userId";
    fetch(UserInfo, GetMethod).then((res) => {
      res.json().then((data) => {
        let UserId = data.user.userId
        const DelUser = `api/deleted/${UserId}`
        const Del =
        {
          method: "DELETE",
          headers:
          {
            "usersId": localStorage.auth_key
          }
        }
        fetch(DelUser, Del).then((res) => {
          res.json().then((deluser) => {
            let delSuccess = deluser
            if (delSuccess.status == "success") {
              setTimeout(() => {
                location.assign("./register")
              }, 2000);
            }
          })
        })
      })
    })

  }
  DelUser()



})

reject.addEventListener("click", () => {
   setTimeout(() => {
    location.assign("./home")

   }, 1000);
})
