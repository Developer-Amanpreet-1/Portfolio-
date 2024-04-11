let menuBar = document.getElementById("menuBar");
menuBar.style.maxHeight ="0px";
function toggleMenu(){
 if (menuBar.style.maxHeight =="0px"){
    menuBar.style.maxHeight="300px";
 }
 else{
    menuBar.style.maxHeight="0px";
 }
}