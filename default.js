function add(num1, num2) {
    // if (num2 == undefined) {
    //     num2 = 0;
    num2 = num2 || 0
    return num1 + num2;
}

var result = add(4);
console.log(result);