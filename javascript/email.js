function validierung(email) {

    /*Abfrage des gültigen Mailformats --> Quelle: https://www.w3resource.com/javascript/form/email-validation.php*/
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;


    if (email.value.match(mailformat)) {
        document.getElementById('erfolgreicheAnmeldung').style.display = 'block';
        document.getElementById('falschesMailformat').style.display = 'none';
        /*Email wird ausgeblendet*/
        document.getElementById('form2').style.display = 'none';
        return true;
    }
    else {
        /*Bei falschem Email Format ändert sich der Hintergrund*/
        document.getElementById('email').style.backgroundColor = 'lightcoral';
        document.getElementById('falschesMailformat').style.display = 'block';
        document.getElementById('erfolgreicheAnmeldung').style.display = 'none';
        document.form2.email.focus();
        return false;

    }
}