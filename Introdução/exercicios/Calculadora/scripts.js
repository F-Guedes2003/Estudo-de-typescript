var num1 = 15.5;
var num2 = 3;
var results = [];
var continueFlag = true;
results.push(num1 + num2);
results.push(num1 * num2);
results.push((num1 / num2).toFixed(2));
var paragraphs = document.querySelectorAll("p");
for (var i = 0; i < results.length; i++) {
    paragraphs[i].innerHTML = "resultado: ".concat(results[i]);
}
