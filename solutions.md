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

    for (let i = start + 1; i < end; i++) {
        if (isEven(i)) {
            range[range.length] = i;
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

### F5

<b>A függvény:</b>

```TS
function minMaxMultiplication(numbers: number[]): number {
    let min: number = numbers[0];
    let max: number = numbers[0];

    for (const num of numbers) {
        if (num < min) min = num;
        if (num > max) max = num;
    }

    return min * max;
}
```

<b>Tesztelés:</b>

```TS
    let numbers: number[] = [10, 12, 20, 14];
    res.write(`minMaxMultiplication([10, 12, 20, 14]) = ${minMaxMultiplication(numbers)}\n`);

    numbers = [1, 34, 10, -5];
    res.write(`minMaxMultiplication([1, 34, 10, -5]) = ${minMaxMultiplication(numbers)}\n`);

    numbers = [12, 1, 40, 23];
    res.write(`minMaxMultiplication([12, 1, 40, 23]) = ${minMaxMultiplication(numbers)}\n`);
```

### F6

<b>A függvény:</b>

```TS
function isValidTriangle(a: number, b: number, c: number): boolean {
    return a + b > c && a + c > b && c + b > a;
}
```

<b>Tesztelés:</b>

```TS
    res.write(`isValidTriangle(1, 2, 2) = ${isValidTriangle(1, 2, 2)}\n`);
    res.write(`isValidTriangle(7, 2, 2) = ${isValidTriangle(7, 2, 2)}\n`);
    res.write(`isValidTriangle(1, 2, 3) = ${isValidTriangle(1, 2, 3)}\n`);
    res.write(`isValidTriangle(4, 2, 3) = ${isValidTriangle(4, 2, 3)}\n`);
```

### F7

<b>A függvény:</b>

```TS
function reverseString(text: string): string {
    let reversed: string = "";
    for (let i = text.length - 1; i >= 0; i--) {
        reversed += text[i];
    }

    return reversed;
}
```

<b>Tesztelés:</b>

```TS
    res.write(`reverseString('Alma') = ${reverseString("Alma")}\n`);
    res.write(`reverseString('Megszencségteleníthetetlenségeskedéseitekért') = ${reverseString("Megszencségteleníthetetlenségeskedéseitekért")}\n`);
```

### F8

<b>A függvény:</b>

```TS
function duplicateChars(text: string): string {
    let result: string = "";
    for (const char of text) {
        result += char.repeat(2); //result = result + char.repeat(2)
    }

    return result;
}
```

<b>Tesztelés:</b>

```TS
    res.write(`duplicateChars('hi') = ${duplicateChars("hi")}\n`);
    res.write(`duplicateChars('The') = ${duplicateChars("The")}\n`);
    res.write(`duplicateChars('Hi-There') = ${duplicateChars("Hi-There")}\n`);
```
