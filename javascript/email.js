function Validierung(email) {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email.value.match(mailformat)) {
        alert("Du hast dich erfolgreich für unseren Newsletter angemeldet!")
        document.form2.email.focus();
        return true;
    }
    else {
        /*Farbe des Textfeldes ändern?!*/
        alert("Du hast eine ungültige E-Mail Adresse eingetragen!");
        document.form2.email.focus();
        return false;
    }
}