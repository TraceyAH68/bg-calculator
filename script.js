function calc() {

let s = +document.getElementById("signups").value;

let p100 = +document.getElementById("p100").value/100;
let p250 = +document.getElementById("p250").value/100;
let p500 = +document.getElementById("p500").value/100;
let p1000 = +document.getElementById("p1000").value/100;

let dup = +document.getElementById("dup").value;

let income =
(s*p100*23) +
(s*p250*33) +
(s*p500*66) +
(s*p1000*133);

let cycles = (s*dup)/2;
let alpha = cycles/3;

document.getElementById("income").innerText = "$"+income.toFixed(2);
document.getElementById("cycles").innerText = cycles.toFixed(2);
document.getElementById("alpha").innerText = alpha.toFixed(2);

}

document.querySelectorAll("input").forEach(i =>
i.addEventListener("input", calc)
);

calc();