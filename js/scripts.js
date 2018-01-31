//Business Logic
var pizza = [];

function Pizza (pizzaSize, pizzaSauce, pizzaToppings, pizzaPrice) {
  this.pizzaSize = pizzaSize;
  this.pizzaSauce = pizzaSauce;
  this.pizzaToppings = pizzaToppings;
  this.pizzaPrice = pizzaPrice;
  };







//User Interface Logic
$(document).ready(function() {
  var reset = function() {
    var pizzaSize = $("#pizzaSize").val();
    var pizzaSauce = $("#pizzaSauce").val();
    var pizzaToppings = $("#pizzaToppings").val();


  }

  $("#submitPizza").click(function(event) {
      event.preventDefault();
      var pizzaSize = $("#pizzaSize").val();
      var pizzaSauce = $("#pizzaSauce").val();
      var pizzaToppings = $("#pizzaToppings").val();

      var pizzaPrice = 8;

      var pizzaOrderDisplayText = ("Here is the pizza you created");

      Pizza.prototype.addPizza = function(Pizza) {
      $("#pizzaResultsText").append('<div class="petContainer">' +
          'pizzaOrderDisplayText' +
          '<h3 class="pizzaSize">' + pizzaSize +
          '<h3 class="pizzaSauce">' + pizzaSauce + '</h3>' +
          '<h3 class="pizzaToppings">' + pizzaToppings + '</h3>' +
          '<h3 class="pizzaPrice">' + pizzaPrice + '</h4>' +
          '</div>'  );


    });
  });
});



$("#resetPizza").click(reset)
reset();

});
