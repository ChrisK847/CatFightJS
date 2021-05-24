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
   
   //CREATE TABLE HEADER
   let header = [];
   let table = [];
   header += "<th>index</th>";
   header += "<th>TypeOf</th>";
   header += "<th>Name</th>";
   header += "<th>Value</th>";
   table.push(header);

   //FILTER FOR OBJECT MEMBERS AND TYPES
   var n = 0;
   let filterByDataType = ["function","number"]; //filter by data type
   let filteredData = []; // full filtered array for storing multiple data[] rows
   let data = []; // temp array for creating a row structure
   for (var i in object) {
      if (
         !(object[i] == null || object[i] == "") && 
         !(filterByDataType.indexOf(typeof object[i])+1) )
         {
            data = [["index",n],["type", (typeof object[i])],["name", i],["value", object[i]]];
            filteredData.push(data);
            n++;
         };
   }
   
/*
   //SORT FILTERED RESULTS
   let sortedData = [];
   sortedData = filteredData;
   sortedData = sortedData.sort( 
      function mysortfunction(a, b) {
         var p1 = a[1][1];
         var p2 = b[1][1];
         if (p1 < p2) return -1;
         if (p1 > p2) return 1;
         return 0;
      }
   )
*/

   //SORT FILTERED RESULTS
   let sortedData = [];
   sortedData = filteredData;
   sortedData = sortedData.sort( 
      function mysortfunction(a, b) {
         var p1 = a[1][1];
         var p2 = b[1][1];
         var p3 = a[2][1];
         var p4 = b[2][1];
         if (p1 < p2) return -1;
         if (p1 > p2) return 1;
         return 0;
      }
   )

   //THIS IS EXTRA INFO FOR SORTING FILTERED DATA. DO NOT UNCOMMENT
   //Sorting by column
   //(p1=a[0],p2=b[1])=column1 desc
   //(p1=a[1],p2=b[2])=column1 asc
   //Sort by second element in second column
   //var p1 = a[1][1];
   //var p2 = b[1][1];

   //CREATE HTML TABLE WITH SORTED RESULTS
   for (var i in sortedData) {
      table.push(makeTableHTML(sortedData[i])); 
   }

   //ADD RESULTS TO HTML FOR DISPLAY
   document.getElementById("1").innerHTML = table;

} //END async function demo()

//HTML OBJECT
var object = document.getElementById("d");

//ENTER TREE HERE
object = object;
//ENTER TREE HERE

//DISPLAY OBJECT NAME,TYPE,VALUE
document.getElementById("d").innerHTML += "object = [" + object + "]" + "<br>" + "typeOf object = [" + (typeof object) + "]" + "<br>" + "object.length = [" + object.length + "]";

//DISPLAY DATA TABLE IN HTML
demo(object);