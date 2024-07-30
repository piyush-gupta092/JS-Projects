var zero = document.getElementById('zeroButton')
var one = document.getElementById('oneButton');
var two = document.getElementById('twoButton');
var three = document.getElementById('threeButton');
var four = document.getElementById('fourButton');
var five = document.getElementById('fiveButton');
var six = document.getElementById('sixButton');
var seven = document.getElementById('sevenButton');
var eight = document.getElementById('eightButton');
var nine = document.getElementById('nineButton');
var comma = document.getElementById('dotButton');

var percentage = document.getElementById('perc');
var division = document.getElementById('division');
var multiplication = document.getElementById('multiplicationButton');
var subtract = document.getElementById('subtract');
var plus = document.getElementById('plus');
var equal = document.getElementById('equal');

var changeSign = document.getElementById('change_sign');
var clearAllKey = document.getElementById('AC');
var textField = document.getElementById('text_area')
var result = textField.innerHTML;

equal.addEventListener('click', function (data) { 
    textField.innerHTML = eval(textField.innerHTML);
});
changeSign.addEventListener('click', function () { //finish the changeSign function
  var noPlus = - (textField.innerHTML);
  textField.innerHTML = noPlus;
});
clearAllKey.addEventListener('click', function () {
  textField.innerHTML = '0';
});
percentage.onclick = function() {
  textField.innerHTML /= 100;
}
comma.onclick = function() {
  textField.innerHTML += '.';
}
division.onclick = function() {
  textField.innerHTML += '/';
}
multiplication.onclick = function() {
  textField.innerHTML += '*';
}
subtract.onclick = function() {
  textField.innerHTML += '-';
}
plus.onclick = function() {
  textField.innerHTML += '+';
}

zero.onclick = function () {
  if (textField.innerHTML == '0') {
    textField.innerHTML = '0';
  } else {
    textField.innerHTML += '0';
  }
}
one.onclick = function () {
  if (textField.innerHTML == '0') {
    textField.innerHTML = '1';
  } else {
    textField.innerHTML += '1';
  }
}
two.onclick = function () {
  if (textField.innerHTML == '0') {
    textField.innerHTML = '2';
  } else {
    textField.innerHTML += '2';
  }
}
three.onclick = function () {
  if (textField.innerHTML == '0') {
    textField.innerHTML = '3';
  } else {
    textField.innerHTML += '3';
  }
}
four.onclick = function () {
  if (textField.innerHTML == '0') {
    textField.innerHTML = '4';
  } else {
    textField.innerHTML += '4';
  }
}
five.onclick = function () {
  if (textField.innerHTML == '0') {
    textField.innerHTML = '5';
  } else {
    textField.innerHTML += '5';
  }
}
six.onclick = function () {
  if (textField.innerHTML == '0') {
    textField.innerHTML = '6';
  } else {
    textField.innerHTML += '6';
  }
}
seven.onclick = function () {
  if (textField.innerHTML == '0') {
    textField.innerHTML = '7';
  } else {
    textField.innerHTML += '7';
  }
}
eight.onclick = function () {
  if (textField.innerHTML == '0') {
    textField.innerHTML = '8';
  } else {
    textField.innerHTML += '8';
  }
}
nine.onclick = function () {
  if (textField.innerHTML == '0') {
    textField.innerHTML = '9';
  } else {
    textField.innerHTML += '9';
  }
}

/*-----------------------------------------------*/

var newOrientation = document.getElementById("change_orientation");
var mainBig = document.getElementById("main");
var mainPanel = document.getElementById("control_panel");
var everyButton = document.getElementsByClassName("grey");

newOrientation.addEventListener("click", function() {
  mainBig.className = "plus_90";
  everyButton.className = "minus_90";
});