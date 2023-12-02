
/* display current year*/ 
const currentYear = new Date().getFullYear();
document.getElementById("display").innerHTML = currentYear; 
console.log(currentYear); 



/* sidebar */ 
function openNav() {
   document.getElementById("mySidebar").style.width = "250px";
   document.getElementById("main").style.marginLeft = "250px";
 }
 
 function closeNav() {
   document.getElementById("mySidebar").style.width = "0";
   document.getElementById("main").style.marginLeft= "0";
 }

 alert("yes")



