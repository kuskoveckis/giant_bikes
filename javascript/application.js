var shopBoxx = document.getElementById("shopLink");
function testing() {
    document.getElementById('test').style.visibility = "visible";
}
function visi() {
    document.getElementById('test').style.visibility = "hidden";
}
shopBoxx.addEventListener('mouseover', testing);
shopBoxx.addEventListener('mouseleave', visi);


var ddm = document.getElementById("fullSizeMenu");
function dropdownMenu() {
    if (document.getElementById("menjushka").style.display == "none") {
        document.getElementById("menjushka").style.display = "grid";
        document.getElementById("opac").style.display = "block";
    } else {
        document.getElementById("menjushka").style.display = "none";
        document.getElementById("opac").style.display = "none";
    }
}
ddm.addEventListener('click', dropdownMenu);



/* --------- Contacts ----------------- */
/* ================================= */




