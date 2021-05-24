function IsJsonString(str) {
    try {
        JSON.parse(str);
    } catch (e) {
        console.error("Not a valid JSON")
        return false;
    }
    console.log("Valid JSON")
    return true;
}

function tryParseJSON (jsonString){
    try {
        var o = JSON.parse(jsonString);

        // Handle non-exception-throwing cases:
        // Neither JSON.parse(false) or JSON.parse(1234) throw errors, hence the type-checking,
        // but... JSON.parse(null) returns 'null', and typeof null === "object", 
        // so we must check for that, too.
        if (o && typeof o === "object" && o !== null) {
            console.log("JSON past")
            return o;
        } else {
            console.error("Not a valid JSON")
        }
    }
    catch (e) { 
        console.error("Not a valid JSON")
    }

    return false;
};

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function makeTableHTML(myArray) {
    var result;
    result += "<tr>";
    result += "<td>"+myArray[0][1]+"</td>";
    result += "<td>"+(typeof myArray[2][1])+"</td>";
    result += "<td>"+myArray[1][1]+"</td>";
    result += "<td>"+myArray[2][1]+"</td>";
    result += "</tr>";
    result = result.replace('undefined','');
    return result;
};

async function demo() {
   let data = [];
   let tbl = [];
   tbl += "<th>Row</th>";
   tbl += "<th>TypeOf</th>";
   tbl += "<th>Name</th>";
   tbl += "<th>Value</th>";
   document.getElementById("1").innerHTML += tbl;
   var n = 0;
   var m = 0;

   for (var i in object) {
      if (!(object[i] == null || object[i] == "") && !(["function","number"].indexOf(typeof object[i])+1) ){
         await sleep(10);
         data = [["row",n],["name", i],["value", object[i]]];
         document.getElementById("cnt").innerHTML = (n + 1) + " of " + (m + 1) + " object members not null or zero length string";
         document.getElementById("1").innerHTML += makeTableHTML(data);
         n++;
      };
      m++
   }
}
var object = document.getElementById("d");

//ENTER TREE HERE
object = object.children[0];
//ENTER TREE HERE

document.getElementById("d").innerHTML += "object = [" + object + "]" + "<br>" + "typeOf object = [" + (typeof object) + "]" + "<br>" + "object.length = [" + object.length + "]";
demo(object);

//var object1 = JSON.parse('{"rollno":101, "name":"Mayank", "age":20}');
//document.getElementById("1").innerHTML += object1.rollno;
//object = import data from "./Characters.json"
//document.getElementById("demo").outerHTML += object;


//IsJsonString(object)
//tryParseJSON(object)
