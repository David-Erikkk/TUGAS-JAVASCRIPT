let inputButton = document.querySelector("#input button");

//
//handing & handler
function klik() {
    alert("ok");
}
inputButton.onclick = klik;

//
//event listener
function gantiRed() {
    inputButton.style.background.Color = "red";
}
function gantiBlack() {
    inputButton.style.color = "black";
}
inputButton.addEventListner("mouesover", gantiRed);
inputButton.addEventListner("mouesover", gantiBlack);

//
//event click
inputButton.addEventListner("click", btnAktif);
function btnAktif() {
    console.log("button aktif");
}

//
//event submit & preventDefault
document.getElementById("input").addEventListener("submit", submitAktif);
function submitAktif(event) {
    event.preventDefault();
    if (input.value == "javascript") {
        console.log("data berhasil mengirim ke server");
    } else {
        console.log("data gagal di kirim");
    }
    //console.log("submit aktif");
}

//
//
// create element. TextNode, append & appendChild
function tambahTugas() {

    let list = document.getElementById("list");

    let divRow = document.createElement("div");
    divRow.classList.add("row", "mb-2");

    let divCol = document.createElement("div");
    divCol.className = "col-8";

    let divAuto = document.createElement("div");
    divAuto.classList.add("col-auto");

    let divForm = document.createElement("div");
    divForm.classList.add("form-check", "mt-2");

    let divBtn = document.createElement("div");
    divBtn.className = "btn";

    12

    let inputTugas = document.createElement("input");
    inputTugas.setAttribute("type", "checkbox");
    inputTugas.classList.add("form-check-input", "list");


    let label = document.createElement("label");
    label.className = "form-check-label";


    let namaTugas = document.createTextNode("${input.value)");
    label.appendChild(namaTugas);

    let icon = document.createElement("i");
    icon.classList.add("hi", "bi-trash", "delete");

    list.appendChild(divRow);
    divRow.append(divCol, divAuto);
    divForm.append(inputTugas, label);
    divAuto.appendChild(divBtn);
    divCol.appendChild(divForm);
    divBtn.appendChild(icon);

    input.value ="";
}

inputButton.addEventListener("click", tambahTugas);