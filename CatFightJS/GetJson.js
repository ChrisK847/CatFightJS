export function characters(){
  fetch('./Characters.json')
  .then(response => response.json())
  .then(data => { 
    //document.getElementById("1").innerHTML += data.Cats
    return data
  })
}