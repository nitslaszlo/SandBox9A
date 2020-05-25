﻿import fs from "fs";
import http from "http";
import url from "url";

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

        //F1---> Cenzúra program, függvény mely paraméterben kapja meg a cenzúrázni kívánt programot, a kicenzúrázadnó szót, és azt a szót amire ki szeretnénk cserélni.
        //Segítség: A szó kicserélését a stringeket a .replace() -val lehet cserélni.

        const text: string = "A(z) emberek szeretnek barátkozni más emberek társaságában. ";
        const wordToChange: string = "emberek";
        const newWord = "élőlények";

        // <---- Fejezd be a kódolást

        res.write("</pre></form></body></html>");
        res.end();
    }
}
