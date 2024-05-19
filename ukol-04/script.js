/* Úkol 04
Maximum ze tří čísel
Napište funkci max3, která vrátí největší ze tří zadaných čísel. Opět se vyhněte použití funkce Math.max. */

const backToIndex = document.querySelector("p")
backToIndex.style.textAlign = "center"
backToIndex.style.fontFamily = "arial"
backToIndex.style.fontSize = "28px"


const max3 = (x, y, z) => {
    if (x > y && x > z) {
        return x
    }
    if (y > a && y > z) {
        return y
    }
    return z
}

document.body.innerHTML += `${max3}`