$(function() {
  var gallons, liters, firstNumber, secondNumber, result;
  var operator = $("input.operator").click(function() {
    operator =  $(this).val();
  });

  var calculate = function(firstNumber, secondNumber) {
    if(operator === "+") {
      result = (firstNumber + secondNumber);
    } else if(operator === "-") {
      result = (firstNumber - secondNumber);
    } else if(operator === "*") {
      result = (firstNumber * secondNumber);
    } else if(operator === "/") {
      result = (firstNumber / secondNumber);
    };
  };

  var galsToLiters = function(gallons) {
    liters = (gallons * 3.78541);
  }

// begin front end logic

  $("form#calculator").submit(function(event) {
    var firstNumber = parseInt($("input#firstNumber").val());
    var secondNumber = parseInt($("input#secondNumber").val());
    calculate(firstNumber, secondNumber);
    $("div#calc-result").text(result);

    event.preventDefault();
  });

  $("form#cooking-gallons").submit(function(event){
    var gallons = parseInt($("input#gallons").val());
    galsToLiters(gallons);
    $("div#liters").text(liters + " liters");


    event.preventDefault();
  })
});
