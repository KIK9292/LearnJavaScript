

// Дано число n (n > 1). Выведите строку, состоящую из простых чисел, меньших n.
//  Воспользуйтесь решетом Эратосфена. Единицу не считаем простым числом.

// Sample Input 1:

// 27

// Sample Output 1:

// 2 3 5 7 11 13 17 19 23

// Sample Input 2:

// 5

// Sample Output 2:

// 2 3

function testCycle(n) {
  var x;
  const seive =[];
  const primes=[];

  for(let i = 2; i<n; ++i){
      if(!seive[i]){
          primes.push(i);
          for(let j= i*i;j<=n;j+=i){
              seive[j] = true;
          }
      }
  }
  x = primes.join(" ");
  return x;
}
