//Business Logic
var pizzaOrderDisplayText = ("Here is the pizza you created: ");

var pizzaArray = [];

function Pizza (pizzaSize, pizzaSauce, pizzaToppings) {
  this.pizzaSize = pizzaSize;
  this.pizzaSauce = pizzaSauce;
  this.pizzaToppings = pizzaToppings;
  };


  Pizza.prototype.pizzaCost = function() {

};
//User Interface Logic
$(document).ready(function() {

  $("#submitPizza").click(function(event) {
      event.preventDefault();
      var pizzaSize = $("#pizzaSize").val();
      var pizzaSauce = $("#pizzaSauce").val();
      var pizzaToppings = $("#pizzaToppings").val();

      pizzaArray.push(new Pizza(pizzaSize, pizzaSauce, pizzaToppings));

      var pizzaPrice = 8;


        $("#pizzaResultsText").append('<div class="pizzaContainer">' + '<br>' +
            pizzaOrderDisplayText + '<br>' + '<br>' +
            '<h3 class="pizzaSize:">' + 'Pizza Size: ' + pizzaSize +
            '<h3 class="pizzaSauce:">' + 'Pizza Sauce: ' + pizzaSauce + '</h3>' +
            '<h3 class="pizzaToppings:">' + 'Pizza Toppings: ' + pizzaToppings + '</h3>' +
            '<h3 class="pizzaPrice:">' + 'Price: ' + '$' + pizzaPrice + '</h3>' +
            '</div>'  );

    });
});
