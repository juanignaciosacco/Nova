// Pagina Asfalto
const btnSealmaster = document.getElementById("sealmasterBtn")
const bntMetong = document.getElementById("metongBtn")
let btnTR300 
let btnTR575 
let btnCrackPro
let btnRA66
let btnChip
let btnDistr
let btnPlanta
const sectionSealmaster = document.getElementById("sealmaster")
const sectionTR300 = document.getElementById("sealmaster_tr300")
const sectionTR575 = document.getElementById("sealmaster_tr575")
const sectionCrackPro = document.getElementById("sealmaster_crackpro125")
const sectionMetong = document.getElementById("metong")



btnSealmaster.onclick = function() {
    sectionSealmaster.classList.contains("oculto") ? (
        sectionSealmaster.classList.remove("oculto"),
        btnTR300 = document.getElementById("btnTR300"),
        btnTR575 = document.getElementById("btnTR575"),
        btnCrackPro = document.getElementById("btnCrack"),
        btnTR300.onclick = () => {
            !sectionCrackPro.classList.contains("oculto") && sectionCrackPro.classList.add("oculto")
            !sectionTR575.classList.contains("oculto") && sectionTR575.classList.add("oculto")
            sectionTR300.classList.contains("oculto") ? (
                sectionTR300.classList.remove("oculto")
            ):(
                sectionTR300.classList.add("oculto")
                )
            },
        btnTR575.onclick = function() {
            !sectionCrackPro.classList.contains("oculto") && sectionCrackPro.classList.add("oculto")
            !sectionTR300.classList.contains("oculto") && sectionTR300.classList.add("oculto")
            sectionTR575.classList.contains("oculto") ? (
                sectionTR575.classList.remove("oculto")
            ):(
                sectionTR575.classList.add("oculto")
            )
        },
        btnCrackPro.onclick = function() {
            !sectionTR575.classList.contains("oculto") && sectionTR575.classList.add("oculto")
            !sectionTR300.classList.contains("oculto") && sectionTR300.classList.add("oculto")
            sectionCrackPro.classList.contains("oculto") ? (
                sectionCrackPro.classList.remove("oculto")
            ):(
                sectionCrackPro.classList.add("oculto")
            )
        }
    ):(
        !sectionCrackPro.classList.contains("oculto") && sectionCrackPro.classList.add("oculto"),
        !sectionTR575.classList.contains("oculto") && sectionTR575.classList.add("oculto"),
        !sectionTR300.classList.contains("oculto") && sectionTR300.classList.add("oculto"),
        sectionSealmaster.classList.add("oculto")
    )
}

bntMetong.onclick = function() {
    sectionMetong.classList.contains("oculto") ? (
        !sectionSealmaster.classList.contains('oculto') && sectionSealmaster.classList.add("oculto"),
        sectionMetong.classList.remove('oculto'),
        btnRA66 = document.getElementById('btnRA66'),
        btnChip = document.getElementById('btnChip'),
        btnDistr = document.getElementById('btnDistr'),
        btnPlanta = document.getElementById('btnPlantaProd'),
        btnRA66.onclick = () => {

        }
    ):(
        sectionMetong.classList.add('oculto')
    )
}
