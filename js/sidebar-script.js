
function openNav() {
    document.getElementById("mySidebar").style.width = "25vw"; //opens to 25% of screen, able to see words clearer
    document.getElementById("main").style.marginLeft = "0px"; //leaving the bottom unchanged
}
  
function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
}
