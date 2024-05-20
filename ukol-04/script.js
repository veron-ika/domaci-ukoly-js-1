/* Úkol 04
Maximum ze tří čísel
Napište funkci max3, která vrátí největší ze tří zadaných čísel. Opět se vyhněte použití funkce Math.max. */

const max3 = (x, y, z) => {
    if (x > y && x > z) {
        return x
    }
    if (y > x && y > z) {
        return y
    }
    return z
}

console.log(max3(1, 2, 3))
console.log(max3(10, 5, 7))
console.log(max3(4, 9, 2))
console.log(max3(8, 8, 7))
console.log(max3(3, 3, 3))