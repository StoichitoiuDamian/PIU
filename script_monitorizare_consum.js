
var dispozitive = {
    "Televizor": {
        consum: 100, // Consumul în watt
        temporizator: null,
        notificari: false
    },
    "Masina de spălat": {
        consum: 500,
        temporizator: null,
        notificari: false
    },
    "Sistem de iluminat": {
        consum: 50,
        temporizator: null,
        notificari: false
    }
    // Adaugă și alte dispozitive aici
};

function seteazaTemporizator(numeDispozitiv) {
    var dispozitiv = dispozitive[numeDispozitiv];

    // Simulează setarea temporizatorului pentru 30 de minute
    dispozitiv.temporizator = setTimeout(function() {
        alert('Temporizator pentru ' + numeDispozitiv + ' a expirat!');
        // logica specifică temporizatorului
    }, 30 * 60 * 1000); // 30 de minute în milisecunde
}

function activeazaNotificari(numeDispozitiv) {
    var dispozitiv = dispozitive[numeDispozitiv];

    if (!dispozitiv.notificari) {
        alert('Notificări pentru ' + numeDispozitiv + ' activate!');
        // logica specifică notificărilor
        dispozitiv.notificari = true;
    } else {
        alert('Notificări pentru ' + numeDispozitiv + ' sunt deja activate!');
    }
}