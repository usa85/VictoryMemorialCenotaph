let basedescription;
basedescription = document.querySelector("#contents").innerHTML;

function clickfunction(primaryID){
    console.log(primaryID);
    let content = document.querySelector("#contents");
    content.innerHTML = '<h5>'+cenotaph2[primaryID].name + '</h5><p>' + cenotaph2[primaryID].rank + '<br>' + cenotaph2[primaryID].unit + '</p><p>Death Type: ' + cenotaph2[primaryID].deathType + '</p><p>Relative: ' + cenotaph2[primaryID].nearestRelative + '</p><p>Description: ' + cenotaph2[primaryID].description  + '</p><p>Journey: ' + cenotaph2[primaryID].journey + '<p>Cenotaph Picture: ' + cenotaph2[primaryID].imageFilename +'</p><p>Battlefields: n/a</p><p>Unit Campgrounds: n/a</p><p>burrial sites: n/a </p><p>Last known address: n/a</p><p>Last known Resting Place: n/a</p><p>Family Input: n/a</p><p>';
    //'<br>Cenotaph: ' + cenotaph2[primaryID].imageFilename console.log(cenotaph2[primaryID].name);
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
