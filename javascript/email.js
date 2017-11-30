function validierung(email) {

    /*Abfrage des gültigen Mailformats --> Quelle: https://www.w3resource.com/javascript/form/email-validation.php*/
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;


    if (email.value.match(mailformat)) {
        alert("Du hast dich erfolgreich für unseren Newsletter angemeldet!");
        /*Email wird ausgeblendet*/
        document.getElementById('form2').style.display = 'none';
        return true;
    }
    else {
        /*Bei falschem Email Format ändert sich der Hintergrund*/
        document.getElementById('email').style.backgroundColor = 'lightcoral';
        alert("Du hast eine ungültige E-Mail Adresse eingetragen!");
        document.form2.email.focus();
        return false;

    }
}