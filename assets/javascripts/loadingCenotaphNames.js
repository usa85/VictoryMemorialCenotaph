
let rows=cenotaph.length;
var mylist;

for (let i = 0; i<rows; i++){
    let items = cenotaph[i].length;
    for(let n=0; n<items; n++ ){
        console.log(cenotaph[i][9],cenotaph[i][0], cenotaph[i][1],cenotaph[i][2]);
        mylist += "<li>" +cenotaph[i][2]+"</li>"; 
       
    }  
    
}
document.getElementById("list").innerHTML = mylist;
