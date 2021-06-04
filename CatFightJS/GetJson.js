function importCharacters(importedCharacters){
    document.getElementById("1").innerHTML += " This should be the first thing printed. importedCharacters can return my Json here." + "[" + importedCharacters.Cats + "]"
    return importedCharacters;
}

function jsonResponse(callBack){
   let data2
   fetch('./Characters.json')
  .then(response => response.json())
  .then(data => { 
     data2 = callBack(JSON.parse(JSON.stringify(data)));
   })
  .then(document.getElementById("1").innerHTML += "This should be the 2nd thing printed. data2 doesn't have any data." + "<br>" + "[" + data2 + "]");
}

var GetCharacters = new jsonResponse(importCharacters);
document.getElementById("1").innerHTML += " This should be the last thing printed." + "<br>" + "[" + GetCharacters + "]";