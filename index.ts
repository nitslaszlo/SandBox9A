var a3: number = 0;

//javitás 1 - nem használunk var-t
let a4: number = 0;

//javítás 2 - nem használunk értelmetlen neveket!
let age: number = 10;
age = 40;

let count: number; //deklarálás
count = 1; //definiálás/ inicializálás

//constans változók
let size: number = 10;
size = 1; //utólagos definiálás nem működik

// ### Adattípusok

/*
 * 1. Number - szám adattípus
 * 2. Boolean - logikai adattípus
 * 3. String - szöveges adattípus (karakterlánc)
 * 4. Null - üres, (de értéknek számít)
 * 5. Undefined - nincs értéke
 *
 * ... . Objektumok (összetett adattípusok) (pl.: a szerveres projektben a 'res')
 *  -> Velük nem foglalkozunk részletesen
 * A TÖMBÖK is objektumok
 */

// ###### 1.Number

//számokkal használható operátorok
/*
 * +
 * -
 * mod (%)
 * osztás (/)
 * szorzás (*)
 */
const a = 1;
const b = 2;

let sum = a + b; // -> 3
sum = a - b; // -> -1
sum = a / b; // -> 0.5
sum = a % b; // -> 1 (1/2 = 0, maradék = 1)
sum = a * b; // -> 2

/*
 * ++
 * --
 */
let assign: number = 1;
assign = assign + 1; //kiveszi az assign értékét, ahhoz hozzáad 1-et -> majd ezzel a végeredménnyel definiálja (2)
// --->
assign++; //egyszerűsítés (elegánsabb xd)
assign--; // assign = assign -1

let num: number = 2001;
num = 1 + 2;

// 2. Boolean
/*
 * Csak két értéket vehet fel (true/false) -> (igaz, hamis)
 * Egy döntés/ állítás (a későbbiekben fontos lesz az elágazásoknál és egyéb szerkezeteknél)
 */
let statement: boolean = true;
statement = false;

// Logikai operátorok
/*
 * && - 'és' - mindkettő feltétel igaz -true, másesetben false
 * || - vagy - hacsak az egyik is true az egész feltétel true
 * ! - tagadás - mindig az ellentéte (true -> false), (false -> true)
 */
let statementOne: boolean = true;
let statementTwo: boolean = false;
let logicalAndResult: boolean = statementOne && statementTwo; // -> false

let no: boolean = false;
let yes: boolean = !no; //true

// Összehasonlító operátorok
/*
 * Egyenlő-e az értékük(==)
 * Egyennlő-e az értékük és a típusuk
 * Nem egyenlő az értékük (!=)
 * Nem egyenlő az értékük és a típusuk (!==)
 *
 * ## Számokkal használható:
 * Nagyobb/kisebb (>, <)
 * Nagyobb v. egyenlő/ Kisebb v. egyenlő (>=, <=)
 */
let number1: number = 1;
let number2: number = 2;
const equals: boolean = number1 == number2; // false

// 3. String literal
/**
 * Aposztrof jelek közé kell rakni ha egy konkét értéket adunk-
 * Többféle aposztrof használható (' ... ', " ... ") valamint a template `Something: ${...}`
 */
let firstName: string = "Pista";

// Null - Üres érték (de értéknek számít)
const empty: number = null;

//Undefined - nincs értéke
let value: number; //ezen a ponton undefined

// ### Átkonvertálások
const textOne: string = "1";
const textTwo: string = "2";
// --> Ezek szövegekként vannak értelmezve
const unitedTxt: string = textOne + textTwo; // -->  "12" és nem 3

//parseInt függvény - egész számokat értelmez
const textOneAsNum: number = parseInt(textOne); // "1" -> 1
const textTwoAsNum: number = parseInt(textTwo); // "2" -> 2

//toString() - az adott értéken hívjuk meg, a számot szöveggé alakítja
const numberValue: number = 23;
const stringValue: string = numberValue.toString();

// ## Tömbök []
// több értéket tud tárolni
//minden elemnek van egy indexe (0-tól indul)
//a tömbnek van egy mérete (.length) -> az elemek 'darabszámát' adja vissza

//számokból álló
const numArray: number[] = [0, 1, 2, 4, 5];

// ## Elágazások
//attól függően hogy milyen feltételt kap -> lefut (true -> lefut, false -> nem fog lefutni)
if (true) {
    alert("Lefut!");
}

//biztosan nem fog lefutni:
if (false) {
    alert("Valami");
}

//Innentől kezdve elkezdhetünk dinamikusan kapott logikai értékekkel dolgozni
let e: number = 10;
const c: number = 15;

if (e == c) {
    alert("e és c egyenlőek!");
}

//else ág -> meghatárphatjuk hogy mi történjen akkor, ha a feltétel nem teljesült
if (e == c) {
    alert("e és c egyenlőek!");
} else {
    alert("e és c nem egyeznek meg");
}

// ## While ciklusok
//ameddig egy adott feltétel igaz, addig fut a ciklustörzs

//veszélyes, végtelen ciklus! - a feltétel mindig true lesz
while (true) {
    alert("Itt vagyok örökre!");
}

//dinamikusan meghatározott logikai értékkekel

//addig le fog futni ameddig az e kisebb mint a c
while (e < c) {
    alert("e kisebb mint c");
    e++;
}

// Do While

//sima while ciklussal
alert("Hello");
while (true) {
    alert("Hello");
}
// ---> egyszerűsítünk do-while-lal (hátul tesztelő) -> egyszer
//mindenképp lefut és csak utánna csekkolja a feltételt
do {
    alert("Hello");
} while (true);

//For ciklus
//Sima while-lal
let i: number = 0;
while (i < 4) {
    //törzs
    i++;
}

//---> for-ral egyszerűsítve
for (let i = 0; i < 4; i++) {
    //az egész ciklus lefutás előtt létrehozunk egy i segédváltozót
    //addig futtatja a törzset ameddig az adott feltétel teljesül (i < 4)
    //minden egyes sikeres cikluslefutás után növeljük az i értékét 1-el
}

//---> for of
// az iterálható objektumokon tud végigmenni
// (azok az objektumok amiket végig tudunk járni)
// ilyen iterable object pl.: a string, a tömb
let text: string = "Hello bro!";
for (let char of text) {
    alert(char); // kiírjuk a karaktereket külön
}

//---> for in
// az adott ciklusváltozó felveszi az adott elem indexét
let textAsObj: String = "Hello bro!"; // String és nem string mert a for in
// csak OBJEKTUMOKKAL működik (az objektum neveket nagy betűvel kezdjük)
for (let i in textAsObj) {
    alert(`Current index: ${i} and the value ${textAsObj[i]}`);
}

Function;
