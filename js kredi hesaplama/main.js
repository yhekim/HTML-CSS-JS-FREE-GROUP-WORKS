var cekilecekTutar = document.getElementById("txtkrediTutari");
var liste = document.getElementById("listeVade");
var aylikTaksit, odenecekToplamTutar;


const buttonForm = document.getElementById("submitButton");

buttonForm.addEventListener("click", () => krediHesapla())

const krediHesapla = () => {
    alert("test")
    var vadeSayisi = liste.options[liste.selectedIndex].value;
    if (vadeSayisi == 12) {
        odenecekToplamTutar = parseInt(cekilecekTutar.value) * 1.1

    } else if (vadeSayisi == 24) {

        odenecekToplamTutar = parseInt(cekilecekTutar.value) * 1.2
    } else if (vadeSayisi == 36) {

        odenecekToplamTutar = parseInt(cekilecekTutar.value) * 1.3
    } else if (vadeSayisi == 48) {

        odenecekToplamTutar = parseInt(cekilecekTutar.value) * 1.45
    }

    aylikTaksit = odenecekToplamTutar / vadeSayisi;

    document.getElementById("sonuc").innerHTML = "Geri ödeme Toplamı : " + odenecekToplamTutar.toFixed(2) + "<br>" +
        "Aylık Taksit Tutarınız : " + aylikTaksit.toFixed(2);


}