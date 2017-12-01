function tabelleSortieren(n) {
  var tabelle, zeilen, switching, shouldSwitch, dir, switchcount = 0;
  tabelle = document.getElementById('tabellenformat');
  /*Zeilen werden vertauscht, wenn true*/
  switching = true;
  /*Aufsteigende Sortierung*/
  dir = "asc";

  /* Ausführung solange bist keine Sortierung stattgefunden hat */
  while (switching) {

    switching = false;
    zeilen = tabelle.getElementsByTagName("TR");

    /*Schleife über alle Zeile (Spaltenüberschrift ausgenommen)*/
    for (var i = 1; i < (zeilen.length - 1); i++) {
      // Standardwert = false
      shouldSwitch = false;

      /* Elemente vergleichen aktuelle Zeile mit nächster Zeile */
      var x = zeilen[i].getElementsByTagName("TD")[n];
      var y = zeilen[i + 1].getElementsByTagName("TD")[n];

      /* Prüft, ob die beiden Zeilen vertauscht werden müssen */
      if (dir == "asc") {
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          // trifft zu: Zeilen sollen aufsteigend getrauscht werden
          shouldSwitch= true;
          break;
        }
      } else if (dir == "desc") {
        if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
          // trifft zu: Zeilen sollen absteigend getrauscht werden
          shouldSwitch= true;
          break;
        }
      }
    }
    if (shouldSwitch) {
      /* Wenn ein Tausch durchgeführt werden soll, wird
      dieser durchgeführt und der Tausch auf true gesetzt*/
      zeilen[i].parentNode.insertBefore(zeilen[i + 1], zeilen[i]);
      switching = true;
      // Tauschzähler wird benötigt, um auch absteigend sortieren zu können
      switchcount ++;
    } else {
      /* Wenn aufsteigend sortiert wurde und der Zähler bei 0 steht wird die obere
       Schleife wieder durchlaufen */
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
}