/* ---ÚKOL 02 Fit e-mail ---

Pokud se přihlásíte jako student například na Fakultě Informačních technologií ČVUT, bude vám informačním systémem přidělen automaticky e-mail, který vytvoří z vašich jmen a příjmení. Z vašeho příjmení se vezme pět prvních znaků az vašeho křestního jména první tři. Výsledek se převede na malá písmena a připojí se k doméně fit.cvut.cz. Pro jméno Jana Procházková tak vznikne adresa prochjan@fit.cvut.cz .

Vytvořte webovou stránku, kterou požadujete nejdříve o jeho křestní jméno a pak příjmení, obojí bez diakritiky. Pomocí metody trim zajistěte, že ve jméně ani příjmení nebudou na začátku ani na konci žádné bílé znaky. Pomocí metody slice vyřízněte ze jména i příjmení příslušné části. Pomocí interpolace řetězců sestavte výslednou adresu a vypište ji na stránky.

*/

const jmeno = prompt('Zadejte křestní jméno (bez diakritiky):')
.toLocaleLowerCase()
.trim()
.slice(0, 3);
const prijmeni = prompt('Zadejte příjmení (bez diakritiky):')
.toLowerCase()
.trim()
.slice(0, 5);

const email = `${prijmeni}${jmeno}@fit.cvut.cz`
document.body.innerHTML += '<div class ="vystup">Váš nový e-mail' + '<br>' + email + '.</div>'