//Business Logic
function Pizza (pizzaSize, pizzaSauce, pizzaToppings) {
  this.pizzaSize = pizzaSize;
  this.pizzaSauce = pizzaSauce;
  this.pizzaToppings = pizzaToppings;
}




//User Interface Logic
$(document).ready(function() {
  var reset = function() {
    var pizzaSize = $("#pizzaSize").val("0");
    var pizzaSauce = $("#pizzaSauce").val("0");
    var pizzaToppings = $("#pizzaToppings").val("0");
    $("#pizzaResultsText").text("");
    $("#resetPizza").hide();

  }

  $("#submitPizza").click(function(event) {
      event.preventDefault();
      var pizzaSize = $("#pizzaSize").val();
      var pizzaSauce = $("#pizzaSauce").val();
      var pizzaToppings = $("#pizzaToppings").val();
      var pizzaPrice = 8;

      var pizzaOrder = new Pizza(pizzaSize, pizzaSauce, pizzaToppings, pizzaPrice);

      var pizzaOrderDisplayText = ("Here is the pizza you created");

      $("#pizzaResultsText").text(pizzaOrderDisplayText + pizzaOrder);
      $("#resetPizza").show();
});

$("#resetPizza").click(reset)
reset();

});
