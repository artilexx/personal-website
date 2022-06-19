function navBarScroll() {
    var prevScrollpos = window.pageYOffset;
    window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos && currentScrollPos >= 0 && prevScrollpos >= 0) {
        document.getElementById("navbar").style.top = "0";
    } else {
        document.getElementById("navbar").style.top = "-50px";
    }
    prevScrollpos = currentScrollPos;
    }
}


function myLoop(checkboxId) {
    setTimeout(function() {
    document.getElementById(checkboxId).checked = true; //  your code here
    checkboxId++
    console.log(checkboxId)                
    if (checkboxId < 7) {
        myLoop(checkboxId);
    }   //  decrement i and call myLoop again if i > 0
    }, 1000)
};         


window.onload=function(){
    navBarScroll();                
    myLoop(1); 
}