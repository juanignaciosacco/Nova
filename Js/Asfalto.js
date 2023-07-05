// Pagina Asfalto
const btnSealmaster = document.getElementById("sealmasterBtn")
const bntMetong = document.getElementById("metongBtn")
const btnEnuo = document.getElementById("enuoBtn")
const sectionSealmaster = document.getElementById("sealmaster")
const sectionProdSealmaster = document.getElementById("productosSeal")
const sectionTR300 = document.getElementById("sealmaster_tr300")
const sectionTR575 = document.getElementById("sealmaster_tr575")
const sectionCrackPro = document.getElementById("sealmaster_crackpro125")
const sectionMetong = document.getElementById("metong")
const sectionRA66 = document.getElementById("metong_RA66")
const sectionChipSealer = document.getElementById("metong_chipSealer")
const sectionDistAsfaltoTiro = document.getElementById("metong_distAsfTiro")
const sectionEnuo = document.getElementById("enuo")


// Mostrar / ocultar seccion Sealmaster
btnSealmaster.onclick = function() {

    if (sectionSealmaster.classList.contains("oculto")) {
        sectionSealmaster.classList.remove("oculto");
        sectionMetong.classList.add('oculto');
        sectionEnuo.classList.add('oculto');

        const btnTR300 = document.getElementById("btnTR300")
        const btnTR575 = document.getElementById("btnTR575")
        const btnCrackPro = document.getElementById("btnCrack")

        // Funcion mostrar solo TR300
        btnTR300.onclick = () => {
            !sectionCrackPro.classList.contains("oculto") && sectionCrackPro.classList.add("oculto")
            !sectionTR575.classList.contains("oculto") && sectionTR575.classList.add("oculto")
            sectionTR300.classList.contains("oculto") ? (
                sectionTR300.classList.remove("oculto")
            ):(
                sectionTR300.classList.add("oculto")
                )
        }

        // Funcion mostrar solo TR575
        btnTR575.onclick = function() {
            !sectionCrackPro.classList.contains("oculto") && sectionCrackPro.classList.add("oculto")
            !sectionTR300.classList.contains("oculto") && sectionTR300.classList.add("oculto")
            sectionTR575.classList.contains("oculto") ? (
                sectionTR575.classList.remove("oculto")
            ):(
                sectionTR575.classList.add("oculto")
            )
        }

        // Funcion mostrar solo Crack Pro
        btnCrackPro.onclick = function() {
            !sectionTR575.classList.contains("oculto") && sectionTR575.classList.add("oculto")
            !sectionTR300.classList.contains("oculto") && sectionTR300.classList.add("oculto")
            sectionCrackPro.classList.contains("oculto") ? (
                sectionCrackPro.classList.remove("oculto")
             ): (
                sectionCrackPro.classList.add("oculto")
            )
        }

    } else {
        !sectionCrackPro.classList.contains("oculto") && sectionCrackPro.classList.add("oculto"),
        !sectionTR575.classList.contains("oculto") && sectionTR575.classList.add("oculto"),
        !sectionTR300.classList.contains("oculto") && sectionTR300.classList.add("oculto"),
        sectionSealmaster.classList.add("oculto")
    }
}

// Mostrar / Ocultar seccion Metong
bntMetong.onclick = function () {

    // Verificar si la clase "oculto" está presente en sectionMetong
    if (sectionMetong.classList.contains("oculto")) {
        // Mostrar sectionMetong y ocultar sectionSealmaster
        sectionMetong.classList.remove('oculto');
        sectionSealmaster.classList.add("oculto");
        sectionEnuo.classList.add('oculto');

        // Obtener elementos por su ID
        const btnRA66 = document.getElementById('btnRA66');
        const btnChip = document.getElementById('btnChip');
        const btnDistrAsfTiro = document.getElementById('btnDistr');
        const btnPlanta = document.getElementById('btnPlantaProd');

        // Asignar eventos click a los botones
        btnRA66.onclick = () => {
            // Mostrar u ocultar sectionRA66, y ocultar otras secciones
            sectionDistAsfaltoTiro.classList.add('oculto');
            sectionChipSealer.classList.add('oculto');
            sectionRA66.classList.toggle('oculto');
        };

        btnChip.onclick = () => {
            // Mostrar u ocultar sectionChipSealer, y ocultar otras secciones
            sectionDistAsfaltoTiro.classList.add('oculto');
            sectionRA66.classList.add('oculto');
            sectionChipSealer.classList.toggle('oculto');
        };

        btnDistrAsfTiro.onclick = () => {
            // Mostrar u ocultar sectionDistAsfaltoTiro, y ocultar otras secciones
            sectionChipSealer.classList.add('oculto');
            sectionRA66.classList.add('oculto');
            sectionDistAsfaltoTiro.classList.toggle('oculto');
        };

        btnPlanta.onclick = () => {
            // Ocultar todas las otras secciones
            sectionDistAsfaltoTiro.classList.add('oculto');
            sectionChipSealer.classList.add('oculto');
            sectionRA66.classList.add('oculto');
        };
    } else {
        // Ocultar sectionMetong si la clase "oculto" está presente
        sectionMetong.classList.add('oculto');
    }
}

btnEnuo.onclick = function () {
    // Verificar si la clase "oculto" está presente en sectionMetong
    if (sectionEnuo.classList.contains("oculto")) {
        // Mostrar sectionEnuo y ocultar sectionSealmaster y sectionMetong
        sectionEnuo.classList.remove('oculto');
        sectionMetong.classList.add('oculto');
        sectionSealmaster.classList.add("oculto");
    } else {
        sectionEnuo.classList.add('oculto');
    }
}