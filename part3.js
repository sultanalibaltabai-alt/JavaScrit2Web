let hoverBox = document.getElementById("hoverBox");

hoverBox.addEventListener("mouseover", function() {
    hoverBox.style.backgroundColor = "green";
});

hoverBox.addEventListener("mouseout", function() {
    hoverBox.style.backgroundColor = "red";
});

let liveInput = document.getElementById("liveInput");
let liveOutput = document.getElementById("liveOutput");

liveInput.addEventListener("keyup", function() {
    liveOutput.textContent = liveInput.value;
});

let calcNum1 = document.getElementById("calcNum1");
let calcNum2 = document.getElementById("calcNum2");
let calcResult = document.getElementById("calcResult");

let addBtn = document.getElementById("addBtn");
let subBtn = document.getElementById("subBtn");
let mulBtn = document.getElementById("mulBtn");
let divBtn = document.getElementById("divBtn");

addBtn.addEventListener("click", function() {
    let num1 = parseFloat(calcNum1.value);
    let num2 = parseFloat(calcNum2.value);
    calcResult.textContent = num1 + num2;
});

subBtn.addEventListener("click", function() {
    let num1 = parseFloat(calcNum1.value);
    let num2 = parseFloat(calcNum2.value);
    calcResult.textContent = num1 - num2;
});

mulBtn.addEventListener("click", function() {
    let num1 = parseFloat(calcNum1.value);
    let num2 = parseFloat(calcNum2.value);
    calcResult.textContent = num1 * num2;
});

divBtn.addEventListener("click", function() {
    let num1 = parseFloat(calcNum1.value);
    let num2 = parseFloat(calcNum2.value);
    calcResult.textContent = num1 / num2;
});