$(function() {
  var operator = $("input.operator").click(function() {
    operator =  $(this).val();
  });
  $("form#calculator").submit(function(event) {
    var firstNumber = parseInt($("input#firstNumber").val());
    var secondNumber = parseInt($("input#secondNumber").val());

     if(operator === "+") {
        alert(firstNumber + secondNumber)
      } else if(operator === "-") {
        alert(firstNumber - secondNumber)
      } else if(operator === "*") {
        alert(firstNumber * secondNumber)
      } else if(operator === "/") {
        alert(firstNumber / secondNumber)
      };


    event.preventDefault();
  });
});
