﻿import fs from "fs";
import http from "http";
import url from "url";

/*
   F1: Készíts egy függvényt amely bekér egy számokból álló tömböt, majd visszaadja a számok
   átlagát!
 */

/*
  F2: Készíts egy függvényt ami fogad egy String típusú elemekből álló tömböt!
      Adja vissza a legrövidebb szót a tömbből!
 */

/*
   F3: Készíts egy függvényt ami fogad egy számot, és megmondja (true/false) hogy a szám egy egész számnak a négyzete-e.
       Pl.: 1 -> true; 3 -> false; 4 -> true
 */

/*
   F4: Készíts egy függvényt ami fogad két számot, és visszaadja az összes páros számot a nagyobbik és a kisebbik szám között
       egy tömbben! Ha az első, paraméterként átadott szám nagyobb mint a második, 
       akkor a második számot kezeld az első számként, és a másodikat elsőként.
       Pl.: (1, 10)  -> [2, 4, 6, 8]; 
            (10, 20) -> [12, 14, 16, 18]; 
            (31, 20) -> [22, 24, 26, 28, 30];
*/

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

        // <---- Fejezd be a kódolást
        res.write("</pre></form></body></html>");
        res.end();
    }
}
