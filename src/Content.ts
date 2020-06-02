import fs from "fs";
import http from "http";
import url from "url";
import { isUndefined } from "util";

// Feladatok
// 1. feladat: Készítsen függvényt, amely paraméterként 3 értéket kap:
// egy számtani sorozat első elemét, differenciáját és a kívánt elem sorszámát!
// A függvény térjen vissza a kívánt elem értékével!
// Pl. Sorozat(1,5,3) -> az első elem 1, a különbség 5, akkor a 3. elem értéke: 11
// A függvény működését tesztelje is le tetszőleges paraméterekkel!

function számtaniSorozat(első: number, diff: number, sorszám: number): number {
    // let visszaElem: number = első;
    // for (let i = 2; i <= sorszám; i++) {
    //     visszaElem = visszaElem + diff;
    // }
    // return visszaElem;
    return első + (sorszám - 1) * diff;
}

// 2. feladat: Készítsen függvényt, amely a paraméterben megadott tőke, kamatláb és futamidő
// ismeretében kiszámítja a kamatos kamat értékét!
// kamatos_kamat =  tőke * (1 + kamatláb/100)^futamidő   ahol, a ^ - hatványozás jele

function kamatosKamat(tőke: number, kamatláb: number, futamidő: number): number {
    return tőke * Math.pow(1 + kamatláb / 100, futamidő);
}

// 3. feladat: Készítsen függvényt, amely paraméterben kap egy szöveget és két számot!
// A függvény adja vissza a megadott szöveg részletét az első számban megadott pozíciótol kezdve,
// a második számban megadott darab karaktert.
// Ha a nincs annyi karakter mint amekkora a második szám,
// akkor a sztringet az utolsó karateréig adja vissza.
// Pl. 1.: RészSztring("szőlőfürt", 2, 4) -> "őlőf"
// Pl. 2.: RészSztring("szőlőfürt", 5, 10) -> "fürt"

function részSztring(szöveg: string, pozíció: number, darab: number): string {
    // return szöveg.substring(pozíció, pozíció + darab);
    // return szöveg.substr(pozíció, darab);
    let részStr: string = "";
    for (let i = pozíció; i < pozíció + darab; i++) {
        részStr += isUndefined(szöveg[i]) ? "" : szöveg[i];
    }
    return részStr;
}

// 4. feladat: Készítsen függvényt, amely a paraméterben (km/h-ban) megadott sebesség értéket,
// átváltja a második paraméterben megadott értéktől függően, az alábbiak szerint!
// Ha a második paraméter...
//  - 1, akkor m/s-ra (váltószám: 3.6)
//  - 2, akkor mérföld/órára (váltószám: 1.609)
//  - 3, akkor csomóra (váltószám: 1.852)
// Bármilyen más második paraméter esetén -1-et adjon vissza!

function átváltSebesség(sebességKmh: number, mibe: number): number {
    switch (mibe) {
        case 1:
            return sebességKmh / 3.6;
        case 2:
            return sebességKmh / 1.609;
        case 3:
            return sebességKmh / 1.852;
        default:
            return -1;
    }
}
export default class Content {
    public content(req: http.IncomingMessage, res: http.ServerResponse): void {
        // favicon.ico kérés kiszolgálása:
        if (req.url === "/favicon.ico") {
            res.writeHead(200, { "Content-Type": "image/x-icon" });
            fs.createReadStream("favicon.ico").pipe(res);
            return;
        }
        // Weboldal inicializálása + head rész:
        res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
        res.write("<!DOCTYPE html>");
        res.write("<html lang='hu'>");
        res.write("<head>");
        res.write("<style>input, pre {font-family:monospace; font-size:1em; font-weight:bold;}</style>");
        res.write("<meta name='viewport' content='width=device-width, initial-scale=1.0'>");
        res.write("<title>SandBox 9A</title>");
        res.write("</head>");
        res.write("<body><form><pre>");
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const params = url.parse(req.url as string, true).query;

        // Kezd a kódolást innen -->
        res.write(`számtaniSorozat(1, 5, 3) = ${számtaniSorozat(1, 5, 3)}\n`);
        res.write(`számtaniSorozat(1, 5, 1) = ${számtaniSorozat(1, 5, 1)}\n`);
        res.write(`számtaniSorozat(3, 4, 5) = ${számtaniSorozat(3, 4, 5)}\n`);

        res.write(`kamatosKamat(100, 10, 5) = ${kamatosKamat(100, 10, 5)}\n`);

        res.write(`részSztring("szőlőfürt", 2, 4) = ${részSztring("szőlőfürt", 2, 4)}\n`);

        res.write(`részSztring("szőlőfürt", 5, 10) = ${részSztring("szőlőfürt", 5, 10)}\n`);

        res.write(`átváltSebesség(100, 1) = ${átváltSebesség(100, 1)}\n`);
        res.write(`átváltSebesség(100, 2) = ${átváltSebesség(100, 2)}\n`);
        res.write(`átváltSebesség(100, 3) = ${átváltSebesség(100, 3)}\n`);
        res.write(`átváltSebesség(100, 4) = ${átváltSebesség(100, 4)}\n`);

        // <---- Fejezd be a kódolást

        res.write("</pre></form></body></html>");
        res.end();
    }
}
