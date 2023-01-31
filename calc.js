let result = document.querySelector(".result");
let one = document.querySelector(".btn1");
let two = document.querySelector(".btn2");
let three = document.querySelector(".btn3");
let four = document.querySelector(".btn4");
let five = document.querySelector(".btn5");
let six = document.querySelector(".btn6");
let seven = document.querySelector(".btn7");
let eight = document.querySelector(".btn8");
let nine = document.querySelector(".btn9");
let zero = document.querySelector(".btn0");
let dot = document.querySelector(".dot");
let ac = document.querySelector(".ac");
let plus = document.querySelector(".plus");
let minas = document.querySelector(".minas");
let btnd = document.querySelector(".btnd");
let btnk = document.querySelector(".btnk");
let btnequal = document.querySelector(".btnequal");

one.onclick = function () {
  result.value = `${result.value}1`;
};
two.onclick = function () {
  result.value = `${result.value}2`;
};
three.onclick = function () {
  result.value = `${result.value}3`;
};
four.onclick = function () {
  result.value = `${result.value}4`;
};
five.onclick = function () {
  result.value = `${result.value}5`;
};
six.onclick = function () {
  result.value = `${result.value}6`;
};
seven.onclick = function () {
  result.value = `${result.value}7`;
};
eight.onclick = function () {
  result.value = `${result.value}8`;
};
nine.onclick = function () {
  result.value = `${result.value}9`;
};
zero.onclick = function () {
  result.value = `${result.value}0`;
};
dot.onclick = function () {
  result.value = `${result.value}.`;
};
ac.onclick = function () {
  result.value = 0;
  num1 = 0;
};
// >>>>>>>>>>>>>>>>>>>>>>>>
plus.onclick = function () {
  let num1 = result.value;
  result.value = "";

  btnequal.onclick = function () {
    result.value = parseFloat(num1) + parseFloat(result.value);
    num1 = 0;
  };
};
// >>>>>>>>>>>>>>>>>>>>>>>>
minas.onclick = function () {
  let num1 = result.value;
  result.value = "";

  btnequal.onclick = function () {
    result.value = parseFloat(num1) - parseFloat(result.value);
    num1 = 0;
  };
};
// >>>>>>>>>>>>>>>>>>>>>>>>
btnd.onclick = function () {
  let num1 = result.value;
  result.value = "";

  btnequal.onclick = function () {
    result.value = parseFloat(num1) * parseFloat(result.value);
    num1 = 0;
  };
};
// >>>>>>>>>>>>>>>>>>>>>>>>
btnk.onclick = function () {
  let num1 = result.value;
  result.value = "";

  btnequal.onclick = function () {
    if (parseFloat(result.value) === 0) {
      result.value = " غير مسموح";
    } else {
      result.value = parseFloat(num1) / parseFloat(result.value);
      num1 = 0;
    }
  };
};
// >>>>>>>>>>>
