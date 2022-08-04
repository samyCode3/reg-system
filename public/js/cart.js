
let itemCount = 0;

    function addTocart(item){
       itemCount += 1;
       
       const createDiv = document.createElement("div");
       createDiv.classList.add('cartImg')
       createDiv.setAttribute('id', createDiv)
       const img = document.createElement('img');
       img.setAttribute('src', item.children[0].currentSrc)
       let title = document.createElement('div');
       title.innerText = item.children[1].innerText
    //    var p = document.createElement('div');
    //    p.innerHTML = item.children[0].innerText;
    //    let select  = document.createElement('span');
    //    select.innerHTML = item.children[2].children[1].value
    //    p.append(select)
    //    console.log(p);
       const cartTitle = document.getElementById('title');
       createDiv.append(img)
       cartTitle.append(createDiv)
      
    }

    fetch(updateUrl).then(res => console.log(res))
  