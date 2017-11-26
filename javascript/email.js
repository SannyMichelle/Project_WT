function Validierung(email)
{
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(email.value.match(mailformat))
{
alert("Du hast die erfolgreich für unseren Newsletter angemeldet!")
document.form1.email.focus();
return true;
}
else
{

alert("Du hast eine ungültige E-Mail Adresse eingetragen!");
document.form1.email.focus();
return false;
}
}