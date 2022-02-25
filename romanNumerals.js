// Write a function in romanNumerals.js that converts an integer (<= 1,000) to its Roman numeral equivalent.

const romanNumeralGenerator = function(num) {
    
    const decimalNum = [500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    const romanNum = ["D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];

    let romanized = "";

    for(let index = 0; index < decimalNum.length; index++) {
        while (decimalNum[index] <= num) {
            romanized += romanNum[index]
            num -= decimalNum[index]
        }
    }
    return romanized
}

console.log(romanNumeralGenerator(292))







