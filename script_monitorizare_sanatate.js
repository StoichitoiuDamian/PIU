function adaugaProgramare() {
    var numeMedic = document.getElementById("numeMedic").value;
    var dataProgramare = document.getElementById("dataProgramare").value;

    if (numeMedic && dataProgramare) {
        var listaProgramari = document.getElementById("listaProgramari");
        var listItem = document.createElement("li");

        listItem.innerHTML = `<strong>${numeMedic}</strong> - ${dataProgramare}`;
        listaProgramari.appendChild(listItem);

        document.getElementById("numeMedic").value = "";
        document.getElementById("dataProgramare").value = "";
    } else {
        alert("Te rugăm să completezi ambele câmpuri.");
    }
}

function adaugaIstoric() {
    var dataIstoric = document.getElementById("dataIstoric").value;
    var detaliiIstoric = document.getElementById("detaliiIstoric").value;

    if (dataIstoric && detaliiIstoric) {
        var listaIstoric = document.getElementById("listaIstoric");
        var listItem = document.createElement("li");

        listItem.innerHTML = `<strong>${dataIstoric}</strong>: ${detaliiIstoric}`;
        listaIstoric.appendChild(listItem);

        document.getElementById("dataIstoric").value = "";
        document.getElementById("detaliiIstoric").value = "";
    } else {
        alert("Te rugăm să completezi ambele câmpuri.");
    }
}

function seteazaNotificare() {
    alert('Notificare setată pentru administrarea medicamentului!');
}
function adaugaMedicament() {
    var numeMedicament = document.getElementById("numeMedicament").value;
    var oraAdministrare = document.getElementById("oraAdministrare").value;

    if (numeMedicament && oraAdministrare) {
        var listaMedicamente = document.getElementById("listaMedicamente");
        var listItem = document.createElement("li");

        listItem.innerHTML = `<strong>${numeMedicament}</strong> - Administrare la ora ${oraAdministrare}`;
        listaMedicamente.appendChild(listItem);

        document.getElementById("numeMedicament").value = "";
        document.getElementById("oraAdministrare").value = "";
    } else {
        alert("Te rugăm să completezi ambele câmpuri.");
    }
}