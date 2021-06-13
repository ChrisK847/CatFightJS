import {characters} from "./GetJson.js";

export function callGetJson(breed,attribute,value,change){

  var breeds;

  return characters().then(response =>{
      var resultsCharacters = response;
      //document.getElementById("1").innerHTML += "type = " + (typeof resultsCharacters) + "<br>";
      //document.getElementById("1").innerHTML += "length = " + resultsCharacters.length + "<br>";
      //document.getElementById("1").innerHTML += "content = " + resultsCharacters + "<br>";
      //console.log(response);
      breeds = response;
    }).then(response2 => {
      return main(breed,attribute,value,change);
    })


  function main(breed,attribute,value,change){

    console.log("breed = " + breed);
    console.log("attribute = " + attribute);
    console.log("value = " + value);
    console.log("change = " + change);
    
    if(change === "get"){
      //console.log("Key = " + Object.keys(breeds[breed].attribute) + " | Value = " + breeds[breed].attribute)
      console.log("if = get");
      var returnedObject = breeds[breed][attribute];
      return returnedObject
    }else if(change == "set"){
      console.log("elseif = set");
    }else if(change == null){
      console.log("elseif = null");

    }else{
      console.log("else = else");
    }

    console.log(breeds["British Shorthair Cat"].HP);
    breeds["British Shorthair Cat"].HP = 18;
    console.log(breeds["British Shorthair Cat"].HP);

      /*
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
    */
  }

  
}