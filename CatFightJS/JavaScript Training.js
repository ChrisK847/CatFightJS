function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function makeTableHTML(myArray) {
    var result
    result += "<tr>"
    result += "<td>"+myArray[0][1]+"</td>";
    result += "<td>"+(typeof myArray[2][1])+"</td>";
    result += "<td>"+myArray[1][1]+"</td>";
    result += "<td>"+myArray[2][1]+"</td>";
    result += "</tr>"
    result = result.replace('undefined','');
    return result;
}

async function demo() {
   let data = [];
   let tbl = []
   tbl += "<th>Row</th>";
   tbl += "<th>TypeOf</th>";
   tbl += "<th>Name</th>";
   tbl += "<th>Value</th>";
   document.getElementById("1").innerHTML += tbl;
   var n = 0;

   for (var i in object) {
      await sleep(10);
      data = [["row",n],["name", i],["value", object[i]]];
      document.getElementById("cnt").innerHTML = "current count = " + (n + 1)
      document.getElementById("1").innerHTML += makeTableHTML(data);
      n++
   }
}
var object = document.getElementById("data");

//ENTER TREE HERE
object = object.attributes[3].ownerDocument.body.innerHTML
//ENTER TREE HERE

document.getElementById("d").innerHTML += "object = [" + object + "]" + "<br>" + "typeOf object = [" + (typeof object) + "]" + "<br>" + "object.length = [" + object.length + "]"
demo(object);

exit();

var x = 0
for (var i in object.childNodes[0]){
   document.getElementById("demo").innerHTML += i + "<br>";
   //document.getElementById("cnt").innerHTML = x;
   x++
};
//document.getElementById("demo").innerHTML += object.childNodes[0].wholeText