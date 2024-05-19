/* ---- ÚKOL 01 Fahrenheit -> Celsius ---

Pokud pečete podle anglických receptů, často se po váš požaduje rozehřát troubu na uvedenou teplotu. Pokud si ovšem neuvědomíte, že Američané používají pro měření teploty stupně Fahrenheita namísto Celsia, bude vás na konci pečení čekat nemilé překvapení.

Nastudujte si na České Wikipedii jak se převádějí stupně Fahrenheita na stupně Celsia a vytvořte webovou stránku, která takový převod provede. Vaše stránka se zeptá uživatele teplotu ve stupních Fahrenheita a pomocí document.body.innerHTML vypíše její ekvivalent ve stupních Celsia.

Převod stupňů Fahrenheita na stupně Celsia lze realizovat dle tohoto vzorce: °C = 5/9 * (°F-32).
 C = (5*(F-32)) / 9
*/

const Fahrenheit = Number(prompt("Na kolik stupňů Fahrenheita je třeba rozehřát troubu?"))
const Celsia = 5/9 * (Fahrenheit - 32)

document.body.innerHTML += '<div class ="vystup">' + 'Troubu je třeba předehřát na ' + Math.round(Celsia) + ' °C.' + '</div>'