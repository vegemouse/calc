$(function() {
  var operator = $("input.operator").click(function() {
    operator =  $(this).val();
  });
  $("form#calculator").submit(function(event) {
    var firstNumber = parseInt($("input#firstNumber").val());
    var secondNumber = parseInt($("input#secondNumber").val());
    var result;

    if(operator === "+") {
      result = (firstNumber + secondNumber)
    } else if(operator === "-") {
      result = (firstNumber - secondNumber)
    } else if(operator === "*") {
      result = (firstNumber * secondNumber)
    } else if(operator === "/") {
      result = (firstNumber / secondNumber)
    };

    $("div#result").text(result);

    event.preventDefault();
  });
});
