export function characters(){
  return fetch('./Characters.json')
  .then(response => response.json())
  .then(function(charactersObject) {
    var catBreeds = charactersObject.Cats;
    //console.log("done loading characters");
    return catBreeds;
  })
}