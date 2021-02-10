// VOORRAAD ARRAY MET TV'S
const inventory = [
  {
    type: '43PUS6504/12',
    name: '4K TV',
    brand: 'Philips',
    price: 379,
    availableSizes: [43, 50, 58, 65],
    refreshRate: 50,
    screenType: 'LED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: false,
      hdr: true,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 23,
    sold: 2,
  },
  {
    type: 'NH3216SMART',
    name: 'HD smart TV',
    brand: 'Nikkei',
    price: 159,
    availableSizes: [32],
    refreshRate: 100,
    screenType: 'LED',
    screenQuality: 'HD ready',
    smartTv: true,
    options: {
      wifi: true,
      speech: false,
      hdr: false,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 4,
    sold: 4,
  },
  {
    type: 'QE55Q60T',
    name: '4K QLED TV',
    brand: 'Samsung',
    price: 709,
    availableSizes: [43, 50, 55, 58, 65],
    refreshRate: 60,
    screenType: 'QLED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: true,
      hdr: true,
      bluetooth: true,
      ambiLight: false,
    },
    originalStock: 7,
    sold: 0,
  },
  {
    type: '43HAK6152',
    name: 'Ultra HD SMART TV',
    brand: 'Hitachi',
    price: 349,
    availableSizes: [43, 50, 55, 58],
    refreshRate: 60,
    screenType: 'LCD',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: true,
      hdr: true,
      bluetooth: true,
      ambiLight: false,
    },
    originalStock: 5,
    sold: 5,
  },
  {
    type: '50PUS7304/12',
    name: 'The One 4K TV',
    brand: 'Philips',
    price: 479,
    availableSizes: [43, 50, 55, 58, 65, 70],
    refreshRate: 50,
    screenType: 'LED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: true,
      hdr: true,
      bluetooth: true,
      ambiLight: true,
    },
    originalStock: 8,
    sold: 3,
  },
  {
    type: '55PUS7805',
    name: '4K LED TV',
    brand: 'Philips',
    price: 689,
    availableSizes: [55],
    refreshRate: 100,
    screenType: 'LED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: false,
      hdr: true,
      bluetooth: false,
      ambiLight: true,
    },
    originalStock: 6,
    sold: 3,
  },
  {
    type: 'B2450HD',
    name: 'LED TV',
    brand: 'Brandt',
    price: 109,
    availableSizes: [24],
    refreshRate: 60,
    screenType: 'LED',
    screenQuality: 'Full HD',
    smartTv: false,
    options: {
      wifi: false,
      speech: false,
      hdr: false,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 10,
    sold: 8,
  },
  {
    type: '32WL1A63DG',
    name: 'HD TV',
    brand: 'Toshiba',
    price: 161,
    availableSizes: [32],
    refreshRate: 50,
    screenType: 'LED',
    screenQuality: 'Full HD',
    smartTv: false,
    options: {
      wifi: false,
      speech: false,
      hdr: true,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 10,
    sold: 8,
  },
];

// Opdracht 1a: Hoeveel exemplaren moeten we nog verkopen? Schrijf een functie die dit berekent.

function CountInvenToSell(televisies) {
  let totalCount = 0;
  for (const televisie of televisies) {
    const toSellofthisType = televisie.originalStock - televisie.sold;
    totalCount = totalCount + toSellofthisType;
  }
  return totalCount;
}

const totalCount = CountInvenToSell(inventory);

console.log(totalCount)

// Opdracht 1b: Zorg ervoor dat dit aantal in het rood wordt weergegeven op de pagina

const numbersToSell = document.getElementById("numbersToSell");
numbersToSell.textContent = totalCount;

console.log(numbersToSell);
console.log("outside?", totalCount);

//opdracht 2a Opdracht 2a: Gebruik een array-methode om een array te maken met alle tv-type namen.

const tvNames = inventory.map ((tele) => {
  return tele.brand + '-' + tele.name;
});
console.log('uitkomst: ', tvNames)


//opdracht 2b Gebruik een array-methode om alle tv's te verzamelen (de hele objecten) die volledig uitverkocht zijn.

const soldOut = inventory.filter((televie) => {
  return televie.originalStock === televie.sold;
});
console.log(soldOut);

//Opdracht 2'c: Gebruik een array-methode om alle tv's te verzamelen (de hele objecten) die over AmbiLight beschikken.


//Opdracht 2d: Schrijf een functie die alle tv's van laagste naar hoogste prijs sorteert.

inventory.sort((televieA, televisieB) => {
  return televieA.price - televisieB.price;
});
console.log(inventory);

//Opdracht 3a: Wat is onze doel-opbrengst? Bereken wat de totale opbrengst is, als we alle exemplaren van ieder type zouden verkopen. Geef dit in het blauw weer op de pagina.

function doelOmzet(products) {
  let totalverkoop = 0;
  for (const product of products) {
    const targetVerwacht = product.originalStock * product.price;
    totalverkoop = totalverkoop + targetVerwacht;
  }
  return totalverkoop;
}
console.log(doelOmzet(inventory))

const doelverkoop = doelOmzet(inventory)
const doelVerkoop = document.getElementById("doelverkoop");
//console.log('found?',doelverkoop);
doelVerkoop.textContent = `€ ${doelverkoop}`;

//Opdracht 3b: Hoeveel hebben we tot nu toe verdient? Bereken hoeveel we tot nu toe verdient hebben met het aantal verkochte tv's. Geef dit weer in het groen weer op de pagina

function totNU(solds) {
  let soldCount = 0;
  for (const sold of solds) {
    const SoldReal = sold.sold * sold.price;
  soldCount = soldCount + SoldReal;
  }
  return soldCount;
}
//console.log(totNU(inventory));
const doelverkocht = totNU(inventory);
const doelVerkocht = document.getElementById("verkocht");
console.log('found?', doelVerkocht);
doelVerkocht.textContent = `€ ${doelverkocht}`;

//Geef de type-namen van twee tv's weer op de pagina. Welke tv's dat precies zijn, maakt niet zoveel uit. Voor nu betekent dit dat je het appenden van de nodes twee keer moet uitschrijven, dat is niet erg!
function displayProduct(inventory, index) {
  const tvElement = document.createElement('li');
  tvElement.setAttribute("class","product");
  const tvType = inventory[index].type;
  tvElement.textContent = tvType;

  const list = document.getElementById("tev1");
  list.appendChild(tvElement);
  console.log(tvElement, list);
}
for (let index = 0; index < inventory.lenght; index++) {
  const product = inventory[index];
  displayProduct(product);
}
displayProduct(inventory,0);
displayProduct(inventory,1);


//Opdracht 5a: Zorg ervoor dat er een string wordt gegenereerd voor de naam van een tv. Maak een functie die één tv-object als parameter verwacht en de naam op de volgende manier samenvoegt: [merk] [type] - [naam] zoals Philips 43PUS6504/12 - 4K TV of NIKKEI NH3216SMART - HD smart TV. Zorg ervoor dat je deze functie voor iedere tv zou kunnen gebruiken.
function displayTelevisions(product) {
  const tvElement = document.createElement('li');
  tvElement.setAttribute('class', 'tv-list-item')
  const tvType = `${product.brand}  ${product.type} - ${product.name}`;
  tvElement.textContent = tvType;

  const listofTV = document.getElementById('tvList')
  listofTV.appendChild(tvElement);
}
for (let i = 0; i < inventory.length; i++) {
  const product = inventory[i]
  displayTelevisions(product)
}

///Opdracht 5b: Zorg ervoor dat de prijs van een tv netjes geformat wordt. Maak een functie die één tv-prijs als parameter verwacht (zoals 379) en daar de volgende string van maakt: €379,-. Zorg ervoor dat je deze functie voor iedere tv zou kunnen gebruiken.
function priceOke(pricing) {
  const tvpElement = document.createElement('p');
  tvpElement.setAttribute('class', 'prijs-item');
  const tvPrice = `${pricing.name}, € ${pricing.price},- `;
  console.log(tvpElement);
  tvpElement.textContent = tvPrice;

  const listOfPrice = document.getElementById('prijs');
  listOfPrice.appendChild(tvpElement);
  //console.log(tvElement, listsOfPrice);
}
for (let i = 0; i < inventory.length; i++)  {
  const pricing = inventory[i];
  priceOke(pricing);
}


//Opdracht 5c: Zorg ervoor dat er een string wordt gegenereerd voor alle beschikbare schermgroottes van één tv in zowel inches als cm Maak een functie die één screen-sizes array verwacht en de groottes op de volgende manier samenvoegt: [schermgrootte] inches ([schermgrootte omgerekend]cm) | [schermgrootte] inches ([schermgrootte omgerekend]cm) etc. Dus een input van [32] geeft 32 inch (81 cm) en een input van [43, 50, 55, 58] geeft 43 inch (109 cm) | 50 inch (127 cm) | 58 inch (147 cm). Zorg ervoor dat je deze functie voor iedere tv zou kunnen gebruiken, zowel voor tv's met maar één schermgrootte als met tientallen schermgroottes.
function size(groote, index) {
  const tvSize = document.createElement('p');
  tvSize.setAttribute('class', 'afmeting');
  //for (const groote of groot) {
    const tvGrote = `${groote.availableSizes} inch ${groote.availableSizes * 2.54} cm`;
 // }
  //if (let grote.availableSizes > 6){}
  //value iest met
  tvSize.textContent = tvGrote;
  const listGrote = document.getElementById('groote')
  listGrote.appendChild(tvSize);
  console.log(tvGrote);
}
for (let index = 6; index < inventory.length; index++) {
  const big = inventory[index];
  size(big);
}



//Opdracht 5d: Zorg ervoor de informatie van één van de twee tv's zoals het voorbeeld wordt weergegeven op de pagina. Gebruik hiervoor de functies die je hebt gemaakt in opdracht 5a, 5b en 5c.
//function look(tvFormatted) {
//    const output = document.createElement("p");
//    output.setAttribute("class", "tvFormatted");
//    const outPUT =  displayTelevisions(0) + priceOke(inventory[1].price) + " \n" +
//        size(inventory[1].availableSizes);


//    output.textContent = outPUT;
//    const listFor = document.getElementById('tvFormatted')
//    listFor.appendChild(output);
//    console.log(outPUT)
//}
//  for (let index = 0; index < inventory.length; index++) {
//  const bi = inventory[index];
//  look(bi);
//}
        //priceOke(inventory[1].price) + " \n" +
   // size(inventory[1].availableSizes);
//revenueContainer.appendChild(tvFormatted);
w3.displayObject("tvFormatted", size)
//Opdracht 5e: Schrijf een functie die ALLE tv's weergeeft op de pagina zoals in het voorbeeld. Dit wil je natuurlijk niet acht keer opnieuw schrijven, want nu zijn het 8 tv's, maar in de toekomst misschien wel 200! Gebruik in deze functie de voorgaande functies die je hebt geschreven, om onderdelen van de data te formatten. Deze "tv-generator-functie" verwacht één parameter: de volledige array met tv-objecten. Vergeet 'm niet aan te roepen!


//BONUS Maak drie knoppen op de pagina: Sorteer op prijs, AmbiLight TV's en Uitverkochte exemplaren. Gebruik de code die je in opdracht 2b, 2c en 2d hebt gemaakt en schrijf dit om naar functies zodat je ze kunt aanroepen op het moment dat de buttons geklikt worden. Zorg ervoor dat de functies de uitkomsten in de de console loggen als de gebruiker op de bijbehorende knop klikt. Tip: Google eens naar het onclick event van buttons!# TechItEazy