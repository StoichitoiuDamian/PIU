function authenticate() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Resetează mesajul de eroare
    closeErrorModal();

    // Verifică dacă câmpurile sunt goale
    if (username.trim() === "" || password.trim() === "") {
        openErrorModal("Completați toate câmpurile!");
        return;
    }

    // Verifică credențialele hardcodate
    if (username === "parinte" && password === "parinte") {
        window.location.href = "pagina_parinte.html";
    } else if (username === "copil" && password === "copil") {
        window.location.href = "pagina_copil.html";
    } else {
        openErrorModal("Username or password are wrong. Please try again.");
    }
}

function openErrorModal(message) {
    var errorModal = document.getElementById("errorModal");
    var errorMessageModal = document.getElementById("error-message-modal");

    errorMessageModal.innerHTML = message;
    errorModal.style.display = "flex";

    // Închide fereastra modală după 2000 de milisecunde (2 secunde)
    setTimeout(function () {
        closeErrorModal();
    }, 2000);
}

function closeErrorModal() {
    var errorModal = document.getElementById("errorModal");
    errorModal.style.display = "none";
}


function logout() {
    // Redirecționează către pagina de login
    window.location.href = "login.html";
}