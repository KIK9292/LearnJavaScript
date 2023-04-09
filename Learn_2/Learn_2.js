// Дано число n. Найдите сумму его цифр.

// (Возможно, функция Math.trunc окажется полезной)
function testCycle(n) {
    let str = String(n);
    let count_n = str.length;
    let sum = 0;
    for (i = 0; i<count_n; i++) {
        sum += Number(str[i]);
    }
    return sum;
}