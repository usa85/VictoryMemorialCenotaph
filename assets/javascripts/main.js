let basedescription;
basedescription = document.querySelector("#contents").innerHTML;
let previousPrimaryID; 
let basePath = ''

function clickfunction(index){
   
    let content = document.querySelector("#contents");
    content.innerHTML = '<h5>'+cenotaph2[index].name + '</h5><p>' + cenotaph2[index].rank + '<br>' + cenotaph2[index].unit + '</p><p>Death Type: ' + cenotaph2[index].deathType + '</p><p>Relative: ' + cenotaph2[index].nearestRelative + '</p><p>Description: ' + cenotaph2[index].description  + '</p><p>Journey: ' + cenotaph2[index].journey + '<p>Cenotaph Picture: ' + cenotaph2[index].imageFilename +'</p><p>Battlefields: n/a</p><p>Unit Campgrounds: n/a</p><p>burrial sites: n/a </p><p>Last known address: n/a</p><p>Last known Resting Place: n/a</p><p>Family Input: n/a</p><p>';
   
   /*  function createImage() {
    let img = document.createElement('img');
img.src = `${basePath}/${filename}`;
returnn img;
}

content.appendChild(createImage(cenotaphData2[i].imageFilename));*/

    filterMarkers(cenotaph2[index].primaryID);/* that removes everymarker of the map except the one that is supposed shown */
    previousPrimaryID = cenotaph2[index].primaryID;
    
};

function filterMarkers(primaryID){
    if (markers.clean){
        filterCleanMarkers(primaryID);
    }else{
        swapSoldierMarkers(primaryID);   
        
    markers[primaryID].setMap(map);
}
}
/*function filterMarkers is always run in click event, and choosing between filtercleanmarkers and swaptSoldierMarkers*/

function filterCleanMarkers(primaryID){
    markers.clean = false;
    for (var marker in markers){
        if (marker != "clean" && marker != primaryID){ 
            markers[marker].setMap(null);
        }
    }
}

function swapSoldierMarkers(primaryID){
    if (previousPrimaryID && previousPrimaryID != primaryID){
        markers[previousPrimaryID].setMap(null);
        } 
    }
        

/*function filterCleanMarkers takes a map with all the markers and remove all of them except the one we want*/


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
