function modeSwitch() {
    var element1 = document.body;
    if(element1.classList.contains("bg-bright-theme"))
    {
        element1.classList.toggle("bg-dark-theme")
    }else{
        element1.classList.toggle("bg-bright-theme")
    }
 }