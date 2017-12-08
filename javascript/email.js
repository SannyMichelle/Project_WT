function validierung(email) {

    /*Abfrage des gültigen Mailformats --> Quelle: https://www.w3resource.com/javascript/form/email-validation.php*/
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;


    if (email.value.match(mailformat)) {
        /*erfolgreiche Meldung erscheint*/
        document.getElementById('erfolgreicheAnmeldung').style.display = 'block';
        /*Wenn zuvor eine Fehlermeldung erschienen ist, wird diese ausgeblendet*/
        document.getElementById('falschesMailformat').style.display = 'none';
        /*Email wird ausgeblendet*/
        document.getElementById('form2').style.display = 'none';
        return true;
    }
    else {
        /*Bei falschem Email Format ändert sich der Hintergrund*/
        document.getElementById('email').style.backgroundColor = 'lightcoral';
        /*Fehlermeldung erscheint*/
        document.getElementById('falschesMailformat').style.display = 'block';
        /*Wenn zuvor eine erfolgreiche Meldung erschienen ist, wird diese ausgeblendet*/
        document.getElementById('erfolgreicheAnmeldung').style.display = 'none';
        document.form2.email.focus();
        return false;
    }
}