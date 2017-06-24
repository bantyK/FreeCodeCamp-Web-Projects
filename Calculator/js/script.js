var display = document.getElementById('display-input');

var num1 = 0,
  num2 = 0,
  operation;

initUI();

function initUI() {
  var numbers = document.getElementsByClassName('number');
  var operators = document.getElementsByClassName('operator');
  var equalSign = document.getElementById("equal");
  var clearButton = document.getElementById('clear-button');
  var clearAllButton = document.getElementById('clear-all-button');
  var signToggleButton = document.getElementById("toggleSign");
  var percentSign = document.getElementById("percentSign");

  //add event listener to each number element
  Array.from(numbers).forEach(function (element) {
    element.addEventListener('click', numberElementClicked);
  });

  //add event listener to each operator element
  Array.from(operators).forEach(function (element) {
    element.addEventListener('click', operatorClicked);
  });

  equalSign.addEventListener('click', equalClicked);

  clearButton.addEventListener('click', clearButtonClicked);

  clearAllButton.addEventListener('click', clearAllButtonClicked);

  signToggleButton.addEventListener('click', toggleSignClicked);

  percentSign.addEventListener('click', percentSignClicked);

}

function numberElementClicked(event) {
  var text = display.value;
  if (text === "0") {
    text = "";
  }
  text += event.srcElement.innerHTML;
  display.value = text;
}

function operatorClicked(event) {
  num1 = parseFloat(display.value);
  display.value = 0;
  operation = event.srcElement.innerHTML;
}

function equalClicked(event) {
  num2 = parseFloat(display.value);
  var result = num1;
  switch (operation) {
    case '+':
      result += num2;
      break;

    case '-':
      result -= num2;
      break;

    case 'X':
      result *= num2;
      break;

    case '/':
      result /= num2;
      break;
  }
  display.value = result;
}

function clearButtonClicked() {
  display.value = '';
}

function clearAllButtonClicked(event) {
  result = 0;
  display.value = "0";
}

function toggleSignClicked(event) {
  if (display.value) {
    display.value = -parseFloat(display.value);
  }
}

function percentSignClicked(event) {
  display.value = (parseFloat(display.value) / 100).toFixed(4);
}
