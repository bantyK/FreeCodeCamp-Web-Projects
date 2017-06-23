var display = document.getElementById('display-input');
var num1 = 0, num2 = 0, operation;
getInput();

function getInput() {
  var numbers = document.getElementsByClassName('number');
  var operators = document.getElementsByClassName('operator');
  var equalSign = document.getElementById("equal");
  //add event listener to each number element
  Array.from(numbers).forEach(function(element){
    element.addEventListener('click',numberElementClicked);
  });

  //add event listener to each operator element
  Array.from(operators).forEach(function(element){
    element.addEventListener('click', operatorClicked);
  });

  equalSign.addEventListener('click',equalClicked);

}

function numberElementClicked(event) {
  var text = display.value;
  if(text === "0"){
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
  switch(operation){
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