// Number Analyzer

// HTML Elements
let numEl = document.getElementById("numInput");

// Add Event Listener
numEl.addEventListener("change", analyzeNumber);

// Event Function
function analyzeNumber() {
  // Get Number from Input Element
  let numInput = Number(numEl.value);

  // Analyze Number and display results (Some are commented out so you can test your functions individually without errors coming up)
  function getSign(num) {
    if (numInput < 0) {
      num = "Negative";
      return num;
    } else if (numInput == 0) {
      num = "Zero";
      return num;
    } else {
      num = "Positive";
      return num;
    }
  }

  document.getElementById("sign").innerHTML = getSign(numInput);

  function evenOrOdd(num) {
    if (numInput % 2 == 0) {
      num = "Even";
      return num;
    } else {
      num = "Odd";
      return num;
    }
  }

  document.getElementById("even-odd").innerHTML = evenOrOdd(numInput);

  function multipleOf10(num) {
    if (numInput % 10 == 0) {
      num = "True";
      return num;
    } else {
      num = "False";
      return num;
    }
  }

  document.getElementById("multiple").innerHTML = multipleOf10(numInput);

  function numDigits(num) {
    num = numInput.toString().length;
    return num;
  }

  document.getElementById("digits").innerHTML = numDigits(numInput);

  //**BONUS**//
}
