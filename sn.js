function orientacion(){
    if (window.innerHeight > window.innerWidth) {
       document.getElementById("main").style.display = "flex";
   } 
    else if (window.innerHeight < window.innerWidth) {
       document.getElementById("main").style.display = "none";
       location.replace('https://jorgetrueba85.github.io');
   } 
}