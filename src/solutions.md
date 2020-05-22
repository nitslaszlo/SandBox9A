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
