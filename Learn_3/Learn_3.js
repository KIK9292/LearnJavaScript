// Дано положительное число n.
// Переведите его в двоичную систему счисления.
function testCycle(n) {
    var x;
    x=[];
    while(n>0){
        x.unshift(String(n%2));
        n=(n-n%2)/2;
    }
    x= x.join("");
    return x;
}