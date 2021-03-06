$('#sendMessage').ready(function(){
    peopleList = new Array()
})



function validateEmail(email){
    const regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(email);
}

function sendFeedb(){
    var fullN = $("#fullName").val();
    var emailA =$("#emailAddress").val();
    var mainT = $("#mainText").val();
    var alert = document.getElementById('alertId');
    console.log(validateEmail(emailA));
    if(!(fullN === "" || mainT === "" ) && validateEmail(emailA))
    {
        checkList(fullN)
        alert.classList.remove("alert-danger");
        alert.classList.add("alert-success");
        alert.innerHTML = ("<strong>Success!</strong> Email sending was successfull!");
        alert.classList.remove('hidden');
        console.log("Sender: " + fullN +" ,Sender Email: "+ emailA + " ,Email content: " + mainT);
    }else{

        alert.classList.remove("alert-success");
        alert.classList.add("alert-danger");
        alert.innerHTML = ("<strong>Error!</strong> Email sending was unsuccesfull! Fill all block or enter a valid email address and try again!");
        alert.classList.remove('hidden');
        
    }

    event.preventDefault();
}

function checkList(fullN){
    var checkList = (element) => element == fullN;
    var isIn = peopleList.findIndex(checkList);
    console.log(peopleList)
    console.log(isIn)
    if(isIn == -1){
        var list = document.getElementById("people");
        var entry = document.createElement('li');
        entry.appendChild(document.createTextNode(fullN));
        list.appendChild(entry);
        peopleList.push(fullN)
    }

}