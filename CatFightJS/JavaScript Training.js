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
    result += "<td>"+myArray[1][1]+"</td>";
    result += "<td>"+myArray[2][1]+"</td>";
    result += "<td>"+myArray[3][1]+"</td>";
    result += "</tr>";
    result = result.replace('undefined','');
    return result;
};

async function demo() {
   let data = [];
   let tbl = [];
   let results = [];
   let sortedResults = [];
   let tableResults = [];
   let filter = ["function","number"];
   tbl += "<th>Row</th>";
   tbl += "<th>TypeOf</th>";
   tbl += "<th>Name</th>";
   tbl += "<th>Value</th>";
   //document.getElementById("1").innerHTML += tbl;
   results.push(tbl)
   var n = 0;
   var m = 0;
   
   for (var i in object) {
      if (!(object[i] == null || object[i] == "") && !(filter.indexOf(typeof object[i])+1) ){
         data = [["row",n],["type", (typeof object[i])],["name", i],["value", object[i]]];
         //results.push(makeTableHTML(data));
	 results.push(data + "<br>");
         //results.push(data);
         n++;
      };
      m++
   }
   
   //SORT ARRAY
   //sortedResults = results.sort(
   //  function(a,b) 
   //   {
   //      return a[1][1]-b[1][1]
   //   }
   //);

   sortedResults = results;

   alert(sortedResults)
   
   sortedResults = sortedResults.sort(
      function mysortfunction(a, b) {
         var p1 = a[0].toLowerCase();
         var p2 = b[1].toLowerCase();
         if (p1 < p2) return -1;
         if (p1 > p2) return 1;
         return 0;
      }
   )

   //for (var i in sortedResults) {
      //tableResults.push(makeTableHTML(i)); 
   //}
   
   document.getElementById("1").innerHTML = sortedResults;
   document.getElementById("2").innerHTML = results;
}

//HTML OBJECT
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
