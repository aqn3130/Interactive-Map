
// modal canada
var modal_canada = document.getElementById('canada');
var btn_canada = document.getElementById("ca");
var span_canada = document.getElementsByClassName("close")[0];
btn_canada.onclick = function() {
    modal_canada.style.display = "block";
    if(modal_usa.display!="none"){
        modal_usa.style.display="none";
    }
}
span_canada.onclick = function() {
    modal_canada.style.display = "none";
}

// modal usa
var modal_usa = document.getElementById('usam');
// Get the button that opens the modal_usa
var btn_usa = document.getElementById("usa");
// Get the <span> element that closes the modal_usa
var span_usa = document.getElementsByClassName("close")[1];
// When the user clicks the button, open the modal_usa 
btn_usa.onclick = function() {
    modal_usa.style.display = "block";
    if(modal_canada.display!="none"){
        modal_canada.style.display="none";
    }
}
// When the user clicks on <span> (x), close the modal_usa
span_usa.onclick = function() {
    modal_usa.style.display = "none";
}

// modal North Cone-1
var modal_ncone1 = document.getElementById('nconem1');
var btn_ncone1 = document.getElementById("ncone1");
var span_ncone1 = document.getElementsByClassName("close")[2];
btn_ncone1.onclick = function() {
    modal_ncone1.style.display = "block";
}
span_ncone1.onclick = function() {
    modal_ncone1.style.display = "none";
}
// modal North Cone-2
var modal_ncone2 = document.getElementById('nconem2');
var btn_ncone2 = document.getElementById("ncone2");
var span_ncone2 = document.getElementsByClassName("close")[3];
btn_ncone2.onclick = function() {
    modal_ncone2.style.display = "block";
}
span_ncone2.onclick = function() {
    modal_ncone2.style.display = "none";
}

// modal Southern Cone
var modal_scone = document.getElementById('sconem');
// Get the button that opens the modal_usa
var btn_scone = document.getElementById("scone");
// Get the <span> element that closes the modal_usa
var span_scone = document.getElementsByClassName("close")[4];
// When the user clicks the button, open the modal_usa 
btn_scone.onclick = function() {
    modal_scone.style.display = "block";
}
// When the user clicks on <span> (x), close the modal_usa
span_scone.onclick = function() {
    modal_scone.style.display = "none";
}

// modal UK
var modal_uk = document.getElementById('ukm');
// Get the button that opens the modal_usa
var btn_uk = document.getElementById("uk");
// Get the <span> element that closes the modal_usa
var span_uk = document.getElementsByClassName("close")[5];
// When the user clicks the button, open the modal_usa 
btn_uk.onclick = function() {
    modal_uk.style.display = "block";
}
// When the user clicks on <span> (x), close the modal_usa
span_uk.onclick = function() {
    modal_uk.style.display = "none";
}

// modal SN European Territories
var modal_de = document.getElementById('exSNeuropem');
// Get the button that opens the modal_usa
var btn_de = document.getElementById("exSNeurope");
// Get the <span> element that closes the modal_usa
var span_de = document.getElementsByClassName("close")[6];
// When the user clicks the button, open the modal_usa 
btn_de.onclick = function() {
    modal_de.style.display = "block";
}
// When the user clicks on <span> (x), close the modal_usa
span_de.onclick = function() {
    modal_de.style.display = "none";
}

// modal Central Europe
var modal_za = document.getElementById('ceuropem');
// Get the button that opens the modal_usa
var btn_za = document.getElementById("ceurope");
// Get the <span> element that closes the modal_usa
var span_za = document.getElementsByClassName("close")[7];
// When the user clicks the button, open the modal_usa 
btn_za.onclick = function() {
    modal_za.style.display = "block";
}
// When the user clicks on <span> (x), close the modal_usa
span_za.onclick = function() {
    modal_za.style.display = "none";
}

// modal South Africa
var modal_es = document.getElementById('safricam');
// Get the button that opens the modal_usa
var btn_es = document.getElementById("safrica");
// Get the <span> element that closes the modal_usa
var span_es = document.getElementsByClassName("close")[8];
// When the user clicks the button, open the modal_usa 
btn_es.onclick = function() {
    modal_es.style.display = "block";
}
// When the user clicks on <span> (x), close the modal_usa
span_es.onclick = function() {
    modal_es.style.display = "none";
}

// modal Iberia and Turkey
var modal_au = document.getElementById('iberiaTurkeym');
// Get the button that opens the modal_canada
var btn_au = document.getElementById("iberiaTurkey");
// Get the <span> element that closes the modal_canada
var span_au = document.getElementsByClassName("close")[9];
// When the user clicks the button, open the modal_canada 
btn_au.onclick = function() {
    modal_au.style.display = "block";
}
// When the user clicks on <span> (x), close the modal_canada
span_au.onclick = function() {
    modal_au.style.display = "none";
}

// modal India
var modal_india = document.getElementById('indiam');
var btn_india = document.getElementById("india");
var span_india = document.getElementsByClassName("close")[10];
btn_india.onclick = function() {
    modal_india.style.display = "block";
}
span_india.onclick = function() {
    modal_india.style.display = "none";
}

// modal Iberia
var modal_iberia = document.getElementById('iberiam');
var btn_iberia = document.getElementById("iberia");
var span_iberia = document.getElementsByClassName("close")[11];
btn_iberia.onclick = function() {
    modal_iberia.style.display = "block";
}
span_iberia.onclick = function() {
    modal_iberia.style.display = "none";
}

// modal Japan
var modal_japan = document.getElementById('japanm');
var btn_japan = document.getElementById("japan");
var span_japan = document.getElementsByClassName("close")[12];
btn_japan.onclick = function() {
    modal_japan.style.display = "block";
}
span_japan.onclick = function() {
    modal_japan.style.display = "none";
}

// modal SEA China
var modal_seaChina = document.getElementById('seaChinam');
var btn_seaChina = document.getElementById("seaChina");
var span_seaChina = document.getElementsByClassName("close")[13];
btn_seaChina.onclick = function() {
    modal_seaChina.style.display = "block";
}
span_seaChina.onclick = function() {
    modal_seaChina.style.display = "none";
}

// modal Australia
var modal_australia = document.getElementById('australiam');
var btn_australia = document.getElementById("australia");
var span_australia = document.getElementsByClassName("close")[14];
btn_australia.onclick = function() {
    modal_australia.style.display = "block";
}
span_australia.onclick = function() {
    modal_australia.style.display = "none";
}

// modal Iran and Iraq
var modal_iranIraq = document.getElementById('iranIraqm');
var btn_iranIraq = document.getElementById("iranIraq");
var span_iranIraq = document.getElementsByClassName("close")[15];
btn_iranIraq.onclick = function() {
    modal_iranIraq.style.display = "block";
}
span_iranIraq.onclick = function() {
    modal_iranIraq.style.display = "none";
}

// modal North Africa
var modal_nafrica = document.getElementById('nafricam');
var btn_nafrica = document.getElementById("nafrica");
var span_nafrica = document.getElementsByClassName("close")[16];
btn_nafrica.onclick = function() {
    modal_nafrica.style.display = "block";
}
span_nafrica.onclick = function() {
    modal_nafrica.style.display = "none";
}

// modal Saudi Arabia
var modal_sarabia = document.getElementById('sarabiam');
var btn_sarabia = document.getElementById("sarabia");
var span_sarabia = document.getElementsByClassName("close")[17];
btn_sarabia.onclick = function() {
    modal_sarabia.style.display = "block";
}
span_sarabia.onclick = function() {
    modal_sarabia.style.display = "none";
}

// modal Scandinavia
var modal_scan = document.getElementById('scanm');
var btn_scan = document.getElementById("scan");
var span_scan = document.getElementsByClassName("close")[18];
btn_scan.onclick = function() {
    modal_scan.style.display = "block";
}
span_scan.onclick = function() {
    modal_scan.style.display = "none";
}

// modal Scandinavia
var modal_nzealand = document.getElementById('nzealandm');
var btn_nzealand = document.getElementById("nzealand");
var span_nzealand = document.getElementsByClassName("close")[19];
btn_nzealand.onclick = function() {
    modal_nzealand.style.display = "block";
}
span_nzealand.onclick = function() {
    modal_nzealand.style.display = "none";
}
// // When the user clicks anywhere outside of the modal_canada, close it
window.onclick = function(event) {
    if (event.target == modal_canada) {
        modal_canada.style.display = "none";
    }
    if (event.target == modal_usa) {
        modal_usa.style.display = "none";
    }
    if (event.target == modal_ncone1) {
        modal_ncone1.style.display = "none";
    }
    if (event.target == modal_za) {
        modal_za.style.display = "none";
    }
    if (event.target == modal_uk) {
        modal_uk.style.display = "none";
    }
    if (event.target == modal_de) {
        modal_de.style.display = "none";
    }
    if (event.target == modal_es) {
        modal_es.style.display = "none";
    }
    if (event.target == modal_au) {
        modal_au.style.display = "none";
    }
    if (event.target == modal_scone) {
        modal_scone.style.display = "none";
    }
    if (event.target == modal_ncone1) {
        modal_ncone1.style.display = "none";
    }
    if (event.target == modal_ncone2) {
        modal_ncone2.style.display = "none";
    }


    if (event.target == modal_india) {
        modal_india.style.display = "none";
    }
    if (event.target == modal_iberia) {
        modal_iberia.style.display = "none";
    }
    if (event.target == modal_japan) {
        modal_japan.style.display = "none";
    }
    if (event.target == modal_seaChina) {
        modal_seaChina.style.display = "none";
    }
    if (event.target == modal_australia) {
        modal_australia.style.display = "none";
    }
    if (event.target == modal_iranIraq) {
        modal_iranIraq.style.display = "none";
    }
    if (event.target == modal_nafrica) {
        modal_nafrica.style.display = "none";
    }
    if (event.target == modal_sarabia) {
        modal_sarabia.style.display = "none";
    }
    if (event.target == modal_scan) {
        modal_scan.style.display = "none";
    }
    if (event.target == modal_nzealand) {
        modal_nzealand.style.display = "none";
    }
    
}
$(document).ready(function() {
    $('map').imageMapResize();
$('[data-toggle="popover"]').popover({
    placement: 'right',
    trigger: 'hover',
    width: '500px',
    content:'Click region for contact information'
});
});