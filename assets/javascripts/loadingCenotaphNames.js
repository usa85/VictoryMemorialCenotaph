let basedescription;
basedescription = document.querySelector("#contents").innerHTML;

function clickfunction(index){
   
    let content = document.querySelector("#contents");
    content.innerHTML = '<h5>'+cenotaph2[index].name + '</h5><p>' + cenotaph2[index].rank + '<br>' + cenotaph2[index].unit + '</p><p>Death Type: ' + cenotaph2[index].deathType + '</p><p>Relative: ' + cenotaph2[index].nearestRelative + '</p><p>Description: ' + cenotaph2[index].description  + '</p><p>Journey: ' + cenotaph2[index].journey + '<p>Cenotaph Picture: ' + cenotaph2[index].imageFilename +'</p><p>Battlefields: n/a</p><p>Unit Campgrounds: n/a</p><p>burrial sites: n/a </p><p>Last known address: n/a</p><p>Last known Resting Place: n/a</p><p>Family Input: n/a</p><p>';
    filterMarkers(cenotaph2[index].primaryID);
    //'<br>Cenotaph: ' + cenotaph2[index].imageFilename console.log(cenotaph2[index].name);
};

function filterMarkers(primaryID){
    for (var marker in markers){
            if (marker != primaryID){ 
                markers[marker].setMap(null);
            }
    }
}

//document.addEventListener("DOMContentLoaded", ()=>{

    let description=document.querySelector("#descriptionHeader");
        description.addEventListener('click', ()=>{
            let content = document.querySelector("#contents");
            content.innerHTML=basedescription;
            resetMarkers();
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
//});

//bradleypauld@gmail.com
//thursday 12:30
