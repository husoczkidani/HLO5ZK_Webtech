function onLoad(){
    var element_body = document.body;
    var element_nav = document.getElementById("navbar")
    if(localStorage.getItem("mode") === null)
    {
        element_body.classList.add("bg-bright-theme")
        element_nav.classList.add("navbar-light")
        
    }else{
        element_body.classList.add(localStorage.getItem("mode"))
        element_nav.classList.add(localStorage.getItem("navmode"))
    }
}
function modeSwitch() {
    var element_body = document.body;
    var element_nav = document.getElementById("navbar")
    if(element_body.classList.contains("bg-bright-theme"))
    {
        element_body.classList.remove("bg-bright-theme");
        element_body.classList.add("bg-dark-theme");
        element_nav.classList.remove("navbar-light")
        element_nav.classList.add("navbar-dark")
        console.log("dark")
        localStorage.setItem("mode","bg-dark-theme")
        localStorage.setItem("navmode","navbar-dark")
    }else{
        element_body.classList.remove("bg-dark-theme");
        element_body.classList.add("bg-bright-theme");
        element_nav.classList.remove("navbar-dark")
        element_nav.classList.add("navbar-light")
        console.log("bright")
        localStorage.setItem("mode","bg-bright-theme")
        localStorage.setItem("navmode","navbar-light")
    }
 }