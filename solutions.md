# Feladatok megoldásai

### F1

<b>A függvény: </b>

```TS
function average(numbers: number[]): number {
    //első körben kiszámoljuk a számok együttes összegét
    let sum: number = 0;
    for (const num of numbers) {
        sum += num; //sum = sum + num
    }

    return sum / numbers.length;
}
```

<b>Tesztelés:</b>

```TS
        let numbers: number[] = [5, 5];
        res.write(`average(5,5) = ${average(numbers)}\n`);

        numbers = [10, 7];
        res.write(`average(10, 7) = ${average(numbers)}\n`);

        numbers = [23, 44, 55];
        res.write(`average(23, 44, 55) = ${average(numbers)}`);
```

### F2

<b>A függvény:</b>

```TS
function findShortest(words: string[]): string {
    let shortest: string = words[0];
    for (const word of words) {
        if (word.length < shortest.length) {
            shortest = word;
        }
    }

    return shortest;
}
```

<b>Tesztelés:</b>

```TS
        let words: string[] = ["Hello", "Lion", "Az"];
        res.write(`findShortest('Hello', 'Lion', 'Az') = ${findShortest(words)}\n`);

        words = ["Legrövidebb", "Megszencségteleníthetetlenségeskedéseitekért"];
        res.write(`findShortest('Legrövidebb', 'Megszencségteleníthetetlenségeskedéseitekért') = ${findShortest(words)}\n`);
```

### F3

<b>A függvény:</b>

```TS
function isSquare(num: number) {
    return Number.isInteger(Math.sqrt(num));
}
```

<b>Tesztelés:</b>

```TS
        res.write(`isSquare(0) = ${isSquare(0)}\n`);
        res.write(`isSquare(3) = ${isSquare(3)}\n`);
        res.write(`isSquare(4) = ${isSquare(4)}\n`);
        res.write(`isSquare(25) = ${isSquare(25)}\n`);
        res.write(`isSquare(26) = ${isSquare(26)}\n`);
```
