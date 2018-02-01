//Business Logic
var pizzaOrderDisplayText = ("Here is the pizza you created: ");

var pizzaArray = [];

function Pizza (pizzaSize, pizzaSauce, pizzaToppings) {
  this.pizzaSize = pizzaSize;
  this.pizzaSauce = pizzaSauce;
  this.pizzaToppings = pizzaToppings;
  };

  Pizza.prototype.pizzaCost = function(pizzaSize, pizzaSauce, pizzaToppings) {
    var pizzaPrice = 8;

    if (this.pizzaSize === "Medium") pizzaPrice += 2;
    if (this.pizzaSize === "Large") pizzaPrice += 4;
    if (this.pizzaSize === "Extra-large") pizzaPrice +=6;

    if(this.pizzaToppings.length === 1) pizzaPrice += 2;
    if (this.pizzaToppings.length === 2) pizzaPrice += 4;
    if (this.pizzaToppings.length === 3) pizzaPrice += 6;
    if (this.pizzaToppings.length >= 4) pizzaPrice += 8;

    $("#pizzaResultsText").append('<div class="pizzaContainer">' + '<br>' +
        pizzaOrderDisplayText + '<br>' + '<br>' +
        '<h3 class="pizzaSize:">' + 'Pizza Size: ' + pizzaSize +
        '<h3 class="pizzaSauce:">' + 'Pizza Sauce: ' + pizzaSauce + '</h3>' +
        '<h3 class="pizzaToppings:">' + 'Pizza Toppings: ' + pizzaToppings + '</h3>' +
        '<h3 class="pizzaPrice:">' + 'Price: ' + '$' + pizzaPrice + '</h3>' +
        '</div>'  );

};
//User Interface Logic
$(document).ready(function() {

  $("#submitPizza").click(function(event) {
      event.preventDefault();
      var pizzaSize = $("#pizzaSize").val();
      var pizzaSauce = $("#pizzaSauce").val();
      var pizzaToppings = $("#pizzaToppings").val();

      pizzaArray.push(new Pizza(pizzaSize, pizzaSauce, pizzaToppings));
      var currentPizza = pizzaArray[0];
      currentPizza.pizzaCost(pizzaSize, pizzaSauce, pizzaToppings);
  });
});
