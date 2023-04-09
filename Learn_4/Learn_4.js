// Дано число n (n > 1). 
// Верните из функции n-ное число Фибоначчи
function testCycle(n) {
    let x;
    let y = 1;
    x = 1;
  for (let i = 3; i <= n; i++) {
    let c = y + x;
    y = x;
    x = c;
  }
  return x;
}