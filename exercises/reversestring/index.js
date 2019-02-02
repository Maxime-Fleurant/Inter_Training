// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    var arr1 = [];
    for (let char of str) {
        arr1.unshift(char);
    }
    return arr1.join("");
}

// function reverse(str) {
//     let result = "";
//     for (let i = str.length - 1 ; i >= 0 ; i--) {
//         result += str[i]
//     }
//     return result
// }

console.log(reverse("yolo"))

module.exports = reverse;
