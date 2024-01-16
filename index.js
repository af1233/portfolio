// function show2() {
//     document.getElementById("detailbody1").style.display="none";
//     document.getElementById("detailbody2").style.display="initial";
//  }

function replace() {
  document.getElementById("detailbody2").style.display = "none";
  document.getElementById("detailbody3").style.display = "none";
  document.getElementById("detailbody1").style.display = "block";
}
function replace1() {
  document.getElementById("detailbody1").style.display = "none";
  document.getElementById("detailbody3").style.display = "none";
  document.getElementById("detailbody2").style.display = "block";
}
function replace2() {
  document.getElementById("detailbody1").style.display = "none";
  document.getElementById("detailbody2").style.display = "none";
  document.getElementById("detailbody3").style.display = "block";
}
function display1(){
   document.getElementById('nav').style.display='initial';
}
function cancel1(){
   document.getElementById('nav').style.display='none';
}