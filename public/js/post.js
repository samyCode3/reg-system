const form = document.getElementById("form");
const post = "api/post";
const err = document.getElementById("err");
const error = document.getElementById("error");
const succ = document.getElementById("succ");
const success = document.getElementById("success");



form.addEventListener("submit", () => {
          const  PostUpdate = 
         {
            product : product.value,
            price :price.value,
            quality :quality.value,
            shipping :shipping.value,
            tax :tax.value,
            describtion  :describtion .value,
            
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
         

          fetch(post, updateInfo).then((res) => {
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
                 
                    success.setAttribute("style", "display : block;")
                    succ.innerHTML = `
                    ${UpdateSuccess.success}`;
                }
            })
          })
        })
    

  
  
  
