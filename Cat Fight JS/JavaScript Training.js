function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}

async function getContent(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    localStorage.clear();
    localStorage.setItem('data', JSON.stringify(data.hits));
  } catch (error) {
    console.log('Request failed', error);
  }
}

var characters = getContent(".\Characters.txt")

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


