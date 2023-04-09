// В этом задании в нашу функцию testArray передаются две строки случайной длины и содержания. Вам нужно составить из символов этих строк один массив (каждый символ строки становится отдельным элементом массива), затем добавить первым элементом  массива текстовое значение "Иванов", и вернуть из функции все элементы в обратном порядке, преобразовав в строку. Обратите внимание, что в обратном порядке нужно переставить элементы внутри массива, а данные внутри элементов инвертировать не нужно!

function testArray(a, b) {
    let firstArray = a.split("");
    let secondArray = b.split("");
    let thirdArray = ["Иванов"];
    let newArray = [...thirdArray,...firstArray,...secondArray];
    return newArray.reverse().join('');
}