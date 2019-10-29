let basedescription;
basedescription = document.querySelector("#contents").innerHTML;

function clickfunction(primaryID){
    console.log(primaryID);
    let content = document.querySelector("#contents");
    content.innerHTML = cenotaph2[primaryID].name;
    //console.log(cenotaph2[primaryID].name);
};

document.addEventListener("DOMContentLoaded", ()=>{

    let description=document.querySelector("#descriptionHeader");
        description.addEventListener('click', ()=>{
            let content = document.querySelector("#contents");
            content.innerHTML=basedescription;
        }); 
    
    for (i = 0; i < cenotaph2.length; i++) {
        let cenotaphlist = document.querySelector("#cenotaphlist");
        console.log(cenotaphlist);
        //console.log(list);
        //console.log(cenotaph2[i].name);
        
      //let element = document.createElement("li");
      // element.innerHTML = cenotaph2[i].name;
       // console.log(element);
        
        let cenotaphelement = document.createElement("li");
        
        cenotaphelement.innerHTML ='<span onclick="clickfunction('+(i)+')">' + cenotaph2[i].name + '</span>'; 
        console.log(cenotaphelement);

        cenotaphlist.appendChild(cenotaphelement);
    }
});

//bradleypauld@gmail.com
//thursday 12:30
