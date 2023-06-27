const sectionMA = document.getElementById("sectionMA")
const btnElimOBS = document.getElementById("btnElimObs")
const btnLimpInd = document.getElementById("btnLimpInd")
const btnOptTransp = document.getElementById("btnOptTransp")
const btnPrestLipm = document.getElementById("btnPrestLipm")
const btnVolver = document.getElementById("btnVolver")
const sectionElimObs = document.getElementById('sectionElimObs')
const sectionLimpiezaInd = document.getElementById("sectionLimpiezaInd")
const sectionOptiTransp = document.getElementById("sectionOptiTransp")
const sectionPrestLimpSilos = document.getElementById("sectionPrestLimpSilos")

btnElimOBS.onclick = () => {
    sectionElimObs.classList.remove("oculto")
    sectionMA.classList.add('oculto')
    btnVolver.classList.remove("oculto")
    btnVolver.onclick = () => {
        sectionElimObs.classList.add("oculto")
        sectionMA.classList.remove("oculto")
        btnVolver.classList.add("oculto")
    }
}

btnLimpInd.onclick = () => {
    sectionLimpiezaInd.classList.remove("oculto")
    sectionMA.classList.add('oculto')
    btnVolver.classList.remove("oculto")
    btnVolver.onclick = () => {
        sectionLimpiezaInd.classList.add("oculto")
        sectionMA.classList.remove("oculto")
        btnVolver.classList.add("oculto")
    }
}

btnOptTransp.onclick = () => {
    sectionOptiTransp.classList.remove("oculto")
    sectionMA.classList.add('oculto')
    btnVolver.classList.remove("oculto")
    btnVolver.onclick = () => {
        sectionOptiTransp.classList.add("oculto")
        sectionMA.classList.remove("oculto")
        btnVolver.classList.add("oculto")
    }
}

btnPrestLipm.onclick = () => {
    sectionPrestLimpSilos.classList.remove("oculto")
    sectionMA.classList.add('oculto')
    btnVolver.classList.remove("oculto")
    btnVolver.onclick = () => {
        sectionPrestLimpSilos.classList.add("oculto")
        sectionMA.classList.remove("oculto")
        btnVolver.classList.add("oculto")
    }
}