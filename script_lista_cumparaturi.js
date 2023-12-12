function adaugaProdus() {
    var numeProdus = document.getElementById("numeProdus").value;
    var cantitateProdus = document.getElementById("cantitateProdus").value;

    if (numeProdus && cantitateProdus) {
        // Crează un element pentru lista de cumpărături
        var listaProduse = document.getElementById("listaProduse");
        var listItem = document.createElement("li");

        // Adaugă butonul de ștergere
        var deleteButton = document.createElement("button");
        deleteButton.innerHTML = "Șterge";
        deleteButton.onclick = function() {
            listItem.remove();
        };

        listItem.innerHTML = `<strong>${numeProdus}</strong> <span>${cantitateProdus}</span>`;
        listItem.appendChild(deleteButton);
        listaProduse.appendChild(listItem);

        // Resetează valorile formularului
        document.getElementById("numeProdus").value = "";
        document.getElementById("cantitateProdus").value = "";
    } else {
        alert("Te rugăm să completezi ambele câmpuri.");
    }
}