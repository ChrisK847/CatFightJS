var objectJson = document.getElementById("data"); 

objectJson.onload = function() { 
   var data = objectJson.contentDocument.body;
}
document.getElementById("demo").innerHTML += objectJson.tagName

'document.getElementById("demo").innerHTML += data'
'var characters = getContent(".\Characters.txt")'



/*
var strCharacters = JSON.stringify(characters);

alert(strCharacters)
var objCharacters = JSON.parse(strCharacters);
var str = objCharacters.Breeds[1].Breed;
document.getElementById("demo").innerHTML += "Row";
document.getElementById("demo2").innerHTML += "Value";
for (var i = 0;i < strCharacters.length;i++){
   document.getElementById("demo").innerHTML += i + "<br>";
   document.getElementById("demo2").innerHTML += strCharacters[i] + "<br>";
}
*/
/*
document.getElementById("demo").innerHTML = JSON.stringify(json)
for (var key in obj) {
  document.getElementById("demo").innerHTML =  obj[key];
}
*/


