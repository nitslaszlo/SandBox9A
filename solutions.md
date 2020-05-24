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
function isSquare(num: number): boolean {
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

### F4

<b>A függvény(ek):</b>

```TS
/**
 * 'Segédfüggvény', visszaadja hogy egy szám páros-e
 */
function isEven(num: number): boolean {
    return num % 2 == 0;
}

function getRange(start: number, end: number): number[] {
    if (start > end) {
        const temp: number = end;
        end = start;
        start = temp;
    }

    const range: number[] = [];

    let k: number = 0;
    for (let i = start + 1; i < end; i++) {
        if (isEven(i)) {
            range[k++] = i;
        }
    }

    return range;
}
```

<b>Tesztelés:</b>

```TS
        res.write(`getRange(1, 10) = ${getRange(1, 10)}\n`);
        res.write(`getRange(10, 20) = ${getRange(10, 20)}\n`);
        res.write(`getRange(31, 20) = ${getRange(31, 20)}\n`);
```
