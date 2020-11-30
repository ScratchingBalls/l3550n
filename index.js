// Import stylesheets
import "./style.css";

// Write Javascript code!
const appDiv = document.getElementById("app"); //select element with id 'app'
//appDiv.innerHTML = `<h1>Ur mums a hoe</h1>`;    //inject something into that element

function reqListener() {
  appDiv.innerHTML = JSON.parse(this.responseText).extract_html; //inject something into that element
  console.log(this.responseText);
}

var oReq = new XMLHttpRequest();
oReq.addEventListener("load", reqListener);
oReq.open(
  "GET",
  "https://en.wikipedia.org/api/rest_v1/page/summary/Command_%26_Conquer"
);
oReq.send();
