$(function() {
  var liters, firstNumber, secondNumber, result, tablespoons, ounces;
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
  };

  var cupsToTablespoons = function(cups) {
    tablespoons = (cups * 16);
  };

  var pintsToOunces = function(pints) {
    ounces = (pints * 16);
  };
// begin front end logic

  $("form#calculator").submit(function(event) {
    var firstNumber = parseInt($("input#firstNumber").val());
    var secondNumber = parseInt($("input#secondNumber").val());
    calculate(firstNumber, secondNumber);
    $("div#calc-result").text(result);

    event.preventDefault();
  });

  $("form#cooking-gallons").submit(function(event) {
    var gallons = parseInt($("input#gallons").val());
    galsToLiters(gallons);
    $("div#liters").text(liters + " liters");


    event.preventDefault();
  });

  $("form#cooking-cups").submit(function(event) {
    var cups = parseInt($("input#cups").val());
    cupsToTablespoons(cups);
    $("div#tablespoons").text(tablespoons + " tablespoons");

    event.preventDefault();
  });

  $("form#cooking-pints").submit(function(event) {
    var pints = parseInt($("input#pints").val());
    pintsToOunces(pints);
    $("div#ounces").text(ounces + " ounces");

    event.preventDefault();
  });

  $("button#cooking-button").click(function(){
    $("div#calculator-page").hide();
    $("div#shop-page").hide();
    $("div#cooking-page").fadeToggle(1000);
  });

  $("button#calc-button").click(function(){
    $("div#calculator-page").fadeToggle(1000);
    $("div#shop-page").hide();
    $("div#cooking-page").hide();
  });

  $("button#shop-button").click(function(){
    $("div#calculator-page").hide();
    $("div#shop-page").fadeToggle(1000);
    $("div#cooking-page").hide();
  });

  $("#colorbutton").click(function() {
    var favoriteColor = $("input#color").val();
    $("body").css("background-color", favoriteColor);
  })

  $("form#shop").submit(function(event) {
    $("#receipt").show();
    $(".showname").text($("input#name").val());
    $("#showaddress").text($("input#address").val());
    $("#showcity").text($("input#city").val());
    $("#showstatezip").text($("input#statezip").val());

    event.preventDefault();
  })

});
