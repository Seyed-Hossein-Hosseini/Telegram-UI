

var messageBox = document.querySelector('.input-field') ;


function openCity(evt, userName , name , time ) {

    var i, users, PV;
    users = document.getElementsByClassName("users");
    var names = document.querySelectorAll('.top_menu span');
    var times = document.querySelectorAll('.top_menu p');
    PV = document.getElementsByClassName("PV");

    messageBox.disabled = false;


    for (i = 0; i < users.length; i++) {
        users[i].style.display = "none";
        names[i].style.display = "none";
        times[i].style.display = "none" ;

    }




    for (i = 0; i < PV.length; i++) {
        PV[i].className = PV[i].className.replace(" active", "");
        names[i].className = names[i].className.replace(" active", "");
        times[i].className = times[i].className.replace(" active" , "");

    }

    document.getElementById(userName).style.display = "block";
    document.getElementById(name).style.display = "block";
    document.getElementById(time).style.display = "inline";

    evt.currentTarget.className += " active";



}




