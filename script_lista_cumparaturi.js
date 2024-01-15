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

function afiseazaPopup(aliment) {
    var popup = document.getElementById('popup');
    popup.style.display = 'flex';

    var popupContent = document.querySelector('.popup-content');
    popupContent.innerHTML = `
        <h3>Adăugare ${aliment}</h3>
        <div class="popup-input">
            <label for="cantitate${aliment}">Cantitate:</label>
            <input type="number" id="cantitate${aliment}" required>
        </div>
        <button class="popup-button" onclick="adaugaLaLista('${aliment}')">Adaugă la listă</button>
    `;
}

// Funcție pentru închiderea pop-up-ului
function inchidePopup() {
    var popup = document.getElementById('popup');
    popup.style.display = 'none';
}

// Funcție pentru adăugarea produsului la listă
function adaugaLaLista(aliment) {
    var cantitate = document.getElementById(`cantitate${aliment}`).value;
    
    if (cantitate) {
        // Adaugă produsul în lista de cumpărături
        var listaProduse = document.getElementById("listaProduse");
        var listItem = document.createElement("li");

        // Adaugă butonul de ștergere
        var deleteButton = document.createElement("button");
        deleteButton.innerHTML = "Șterge";
        deleteButton.onclick = function() {
            listItem.remove();
            inchidePopup();
        };

        listItem.innerHTML = `<strong>${aliment}</strong> <span>${cantitate}</span>`;
        listItem.appendChild(deleteButton);
        listaProduse.appendChild(listItem);

        // Resetează valorile formularului
        document.getElementById(`cantitate${aliment}`).value = "";

        // Închide pop-up-ul
        inchidePopup();
    } else {
        alert("Te rugăm să completezi cantitatea.");
    }
}