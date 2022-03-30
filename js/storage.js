// membuat kunci/key
const KEY = "calculator_history";

// mengecek apakah storage ada isinya
function cekStorage() {
    return typeof(Storage) !== "undefined";
    // typeof(Storage);
}


function ambilHistory(data) {
    if( cekStorage() ) {
        let dataHistory = null;

        // getItem(key)
        if( localStorage.getItem(KEY) === null ) {
            dataHistory = [];
        } else {
            dataHistory = JSON.parse(localStorage.getItem(KEY));
        }

        dataHistory.unshift(data);

        // jika data history lebih dari 5 maka ambil yang 5 terbaru
        if( dataHistory.length > 5 ) {
            dataHistory.pop();
        }

        // setItem(key, value)
        localStorage.setItem(KEY, JSON.stringify(dataHistory));
    }
}


function tampilHistory() {
    if( cekStorage() ) {
        return JSON.parse(localStorage.getItem(KEY)) || [];
    } else {
        return [];
    }
}


function renderHistory() {
    // mengambil data history dari tampilData
    const historyData = tampilHistory();
    let historyList = document.getElementById('historyList');

    historyList.innerHTML = "";

    // pengulangan untuk tabel
    for( let history of historyData ) {
        let row = document.createElement('tr');
        
        row.innerHTML = `<td> ${history.angkaPertama} </td>`;
        row.innerHTML += `<td> ${history.operator} </td>`;
        row.innerHTML += `<td> ${history.angkaKedua} </td>`;
        row.innerHTML += `<td> ${history.hasil} </td>`;

        historyList.appendChild(row);
    }
}
renderHistory();
