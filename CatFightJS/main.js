import {callGetJson} from "./CallGetJson.js";

callGetJson("British Shorthair Cat","STR",1,"get").then(response =>{
  var hp = response;
  console.log(hp);
});
 