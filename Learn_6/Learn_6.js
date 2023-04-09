// В этом задании в нашу функцию testArray передаются два массива случайной длины заполненные случайными числами. 
// Вам нужно сосчитать сумму всех элементов обоих массивов и возвратить ее из функции.

function testArray(a, b) {
    let newArray = [...a,...b];
    let lenArray = 0
    for(let i=0; i<newArray.length;i++){
        lenArray+=newArray[i]
    }
    return lenArray;
}

