$(document).ready(function() {
    // membuat variabel
    const kalkulator = {
        angka: '0',
        operator: null,
        angkaPertama: null,
        angkaKedua: false
    };

    // meng-update angka di layar
    function updateLayar() {
        document.querySelector(".hasil").innerText = kalkulator.angka;
    }

    // meng-hapus angka di layar
    function hapusLayar() {
        kalkulator.angka = '0';
        kalkulator.operator = null;
        kalkulator.angkaPertama = null;
        kalkulator.angkaKedua = false;
    }

    function inputAngka(angkaTombol) {
        if( kalkulator.angka === '0' ) {
            kalkulator.angka = angkaTombol;
        } else {
            kalkulator.angka += angkaTombol;
        }
    }

    // jika negatif angka
    function negatif() {
        if( kalkulator.angka === '0' ) {
            return;
        }

        kalkulator.angka = kalkulator.angka * -1;
    }

    function operatorlayar(operator) {
        if( !kalkulator.angkaKedua ) {
            kalkulator.operator = operator;
            kalkulator.angkaKedua = true;
            kalkulator.angkaPertama = kalkulator.angka;
            kalkulator.angka = '0';
        } else {
            alert("Operator sudah ditetapkan");
        }
    }

    function samadengan() {
        if( kalkulator.angkaPertama == null || kalkulator.angkaKedua == null ) {
            alert("Anda belum menetapkan operator");
            return;
        }

        let hasil = 0;
        if( kalkulator.operator === "+" ) {
            hasil = parseInt(kalkulator.angkaPertama) + parseInt(kalkulator.angka);
        } else if( kalkulator.operator === "-" ) {
            hasil = parseInt(kalkulator.angkaPertama) - parseInt(kalkulator.angka);
        } else if( kalkulator.operator === "*" ) {
            hasil = parseInt(kalkulator.angkaPertama) * parseInt(kalkulator.angka);
        } else if( kalkulator.operator === "/" ) {
            hasil = parseInt(kalkulator.angkaPertama) / parseInt(kalkulator.angka);
        }
        kalkulator.angka = hasil;
    }







    // mendefinisikan semua variabel tombol
    const tombolAngka = document.querySelectorAll(".tombol");
    // perulangan untuk 1 tombol
    for( tombol of tombolAngka ) {
        tombol.addEventListener('click', function(event) {
            const target = event.target; //target tombol
            
            // pengkondisian jika melakukan operasi
            if( target.classList.contains('hapus') ) {
                hapusLayar();
                updateLayar();
                return;
            }
            if( target.classList.contains('negatif') ) {
                negatif();
                updateLayar();
                return;
            }
            if( target.classList.contains('samadengan') ) {
                samadengan();
                updateLayar();
                return;
            }
            if( target.classList.contains('operator') ) {
                operatorlayar(target.innerText);
                return;
            }

            inputAngka(target.innerText);
            updateLayar();
        });


    }



    // updateLayar();
    // inputAngka();
    // console.log(kalkulator);
});
