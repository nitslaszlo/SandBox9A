import fs from "fs";
import http from "http";
import url from "url";

// F1.: Készíts függvényt, ami meghatározza (visszatér) egy szám számjegyeinek összegével! A számot paraméterben kapja a függvény!
// A függvényt teszteljed tetszőleges hívással!

// F2.: Készíts függvényt, ami igaz értékkel tér vissza, ha egy számot maradék nélkül oszt el egy másik szám, hamissal ha nem osztja!
// A számot és az osztót paraméterekben kapja a függvény!

// F3.: Készíts függvényt, ami meghatározza egy szám osztóinak a darabszámát!  A számot paraméterben kapja a függvény!
// A függvényt teszteljed tetszőleges hívással!

// F4.: Készíts függvényt, ami igaz értékkel tér vissza, ha a szám prím, hamissal, ha nem prím! A számot paraméterben kapja a függvény!
// A függvényt teszteljed tetszőleges hívással!

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

        // Gy1:. Készíts programot ami két input érték legkisebb közös többszörösét (LKKT) határozza meg és írja ki!
        // Az algoritmust a neten megtalálod!

        // <---- Fejezd be a kódolást

        res.write("</pre></form></body></html>");
        res.end();
    }
}
