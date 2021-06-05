import {characters} from "./GetJson.js";

var breeds;

characters().then(response =>{
    var resultsCharacters = response;
    //document.getElementById("1").innerHTML += "type = " + (typeof resultsCharacters) + "<br>";
    //document.getElementById("1").innerHTML += "length = " + resultsCharacters.length + "<br>";
    //document.getElementById("1").innerHTML += "content = " + resultsCharacters + "<br>";
    //console.log(response);
    breeds = response;
  }).then(response2 => {
    main();
  })


function main(){
  
  console.log(breeds["British Shorthair Cat"]);
  for(var i in breeds){
    //var breedCharacteristics = Object.keys(breeds[i]);
    //console.log(breedCharacteristics);
    for(var x in breeds[i]){
       document.getElementById("1").innerHTML += x + ":" + breeds[i][x] + "<br>";
       //console.log(breedCharacteristics);
    }
    document.getElementById("1").innerHTML += "<br>";
    i++
  }
}

