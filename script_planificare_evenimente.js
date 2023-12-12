function adaugaEveniment() {
    var numeEveniment = document.getElementById("numeEveniment").value;
    var dataEveniment = document.getElementById("dataEveniment").value;

    if (numeEveniment && dataEveniment) {
        // Crează un element pentru lista de evenimente
        var listaEvenimente = document.getElementById("listaEvenimente");
        var listItem = document.createElement("li");

        // Adaugă butonul de ștergere
        var deleteButton = document.createElement("button");
        deleteButton.innerHTML = "Șterge";
        deleteButton.onclick = function() {
            listItem.remove();
        };

        listItem.innerHTML = `<strong>${numeEveniment}</strong> <span>${dataEveniment}</span>`;
        listItem.appendChild(deleteButton);
        listaEvenimente.appendChild(listItem);

        // Resetează valorile formularului
        document.getElementById("numeEveniment").value = "";
        document.getElementById("dataEveniment").value = "";
    } else {
        alert("Te rugăm să completezi ambele câmpuri.");
    }
}