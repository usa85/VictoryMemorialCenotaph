

document.addEventListener("DOMContentLoaded", ()=>{

for (i = 0; i < cenotaph2.length; i++) {
    let list = document.querySelector("#list2");
    //console.log(list);
    //console.log(cenotaph2[i].name);
    let element = document.createElement("li");
    element.innerText = cenotaph2[i].name;
    console.log(element);
    
  
    list.appendChild(element);
}});

//bradleypauld@gmail.com
//thursday 12:30
