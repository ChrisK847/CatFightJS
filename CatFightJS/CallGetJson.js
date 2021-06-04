import {characters} from "./GetJson.js";
//let characters = import("./GetJson.js")//returns promise. Not sure what do to with it.

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function loop(characters){
  var i = 0
  document.getElementById("1").innerHTML += (typeof characters) + "<br>"
  while(characters() == undefined){
    document.getElementById("1").innerHTML += i + "<br>"
    if(i == 20){
      document.getElementById("1").innerHTML += "break" + "<br>"
      break;
    }
    await sleep(50);
    i++
  }
  document.getElementById("1").innerHTML += characters + "<br>"
}
loop(characters);