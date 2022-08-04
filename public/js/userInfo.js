const UserInfo = "api/loggedin";
const text = document.getElementById("name");
const StoreUser = 
{
    method : "GET",
    headers : 
    {
        "usersId" : localStorage.auth_key
    }
}
fetch(UserInfo, StoreUser).then((res) => {
    res.json().then((data) => {
        let collectData = data.user
      
         text.innerHTML = `
             ${collectData.fullname}
         `  
    })
})

