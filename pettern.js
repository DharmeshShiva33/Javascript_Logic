let starSquare = [];
function squarePattern(n) {
  for (let row = 0; row < n; row++) {
    let line = "";
    for (let col = 0; col < n; col++) {
      line += "#";
    }
    starSquare.push(line);
  }
}

squarePattern(3);

let numberSquare = [];
function squareNumberPattern(n) {
  for (let i = 0; i < n; i++) {
    let val = "";
    for (let j = 0; j <= i; j++) {
      val += j + 1;
    }
    numberSquare.push(val);
  }
}

squareNumberPattern(3);

let reversePyramidNumber = [];
function reverseParamidNumberFn(n) {
  for (let i = n; i > 0; i--) {
    let num = "";
    for (let j = i; j > 0; j--) {
      num += j;
    }
    reversePyramidNumber.push(num);
  }
}

reverseParamidNumberFn(3);

const rightAlignStarPyramid = [];

function rightAlignStarPyramidFn(n) {
  for (let i = 0; i < n; i++) {
    let val = "";
    for (let j = 0; j < n - i; j++) {
      val += " ";
    }
    for (let k = 0; k <= i; k++) {
      val += "*";
    }
    rightAlignStarPyramid.push(val);
    console.log(val);
  }
}

rightAlignStarPyramidFn(5);

const starSquareHead = "Star Square";
const NumberSquareHead = "Number Square";
const container = document.createElement("div");
const main = document.body.appendChild(container);
const ul = document.createElement("ul");
main.appendChild(ul);
ul.innerHTML = ` 
<h1>Start Square</h1>
${starSquare.map((r) => `<li>${r}</li>`).join("")}
<div class="mt-10">
<h1>Number Square</h1>
${numberSquare.map((r) => `<li>${r}</li>`).join("")}
<h1> Reverse Pyramid Pattern</h1>
${reversePyramidNumber.map((r) => `<li>${r}</li>`).join("")}
<h1> Right Align Pyramid Pattern</h1>
<pre>
${rightAlignStarPyramid.map((r) => `<code>${r}</code>`).join("\n")}
</pre>
</div>
`;
