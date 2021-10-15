function validateEmail(email){
    const regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(email);
}

function sendFeedb(){
    var fullN = $("#fullName").val()
    var emailA =$("#emailAddress").val()
    var mainT = $("#mainText").val()
    var alert = document.getElementById('alertId');
    console.log(validateEmail(emailA))
    if(!(fullN === "" || mainT === "" ) && validateEmail(emailA))
    {
        alert.classList.remove("alert-danger")
        alert.classList.add("alert-success")
        alert.innerHTML = ("<strong>Success!</strong> Email sending was successfull!")
        alert.classList.remove('hidden')

        console.log("Sender: " + fullN +" ,Sender Email: "+ emailA + " ,Email content: " + mainT);
    }else{

        alert.classList.remove("alert-success")
        alert.classList.add("alert-danger")
        alert.innerHTML = ("<strong>Error!</strong> Email sending was unsuccesfull! Fill all block and try again!")
        alert.classList.remove('hidden')
        
    }
    
    event.preventDefault();
}