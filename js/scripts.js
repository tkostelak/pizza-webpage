//Business Logic
var pizzaOrderDisplayText = ("Here is the pizza you created: ");
var pizzaToppingsArray = [];

function Pizza (pizzaSize, pizzaSauce, pizzaToppingsArray) {
  this.pizzaSize = pizzaSize;
  this.pizzaSauce = pizzaSauce;
  this.pizzaToppingsArray = pizzaToppingsArray;
  };


//User Interface Logic
$(document).ready(function() {

  $("#submitPizza").click(function(event) {
      event.preventDefault();
      var pizzaSize = $("#pizzaSize").val();
      var pizzaSauce = $("#pizzaSauce").val();
      var pizzaToppings = $("#pizzaToppings").val();

      var toppingsToArray = pizzaToppings.push(pizzaToppingsArray);

      var pizzaPrice = 8;

      Pizza.prototype.pizzaCost = function() {

        if  (this.pizzaSize === 'Medium') {
          pizzaPrice += 3;
        } else if (this.pizzaSize === 'Large') {
          pizzaPrice += 3;
        } else if (this.pizzaSize === 'Extra-large' ) {
          pizzaPrice += 3;
        };

        if (this.pizzaToppingsArray.length == 1) {
          pizzaPrice += 2;
        } else if (this.pizzaToppingsArray.length == 2) {
          pizzaPrice += 4;
        } else if (this.pizzaToppingsArray.length == 3) {
          pizzaPrice += 6;
        }  else if (this.pizzaToppingsArray.length == 4 || this.pizzaToppingsArray.length > 4 ) {
          pizzaPrice += 8;
        } else {

        } return pizzaPrice;

      };

        $("#pizzaResultsText").append('<div class="pizzaContainer">' + '<br>' +
            pizzaOrderDisplayText + '<br>' + '<br>' +
            '<h3 class="pizzaSize:">' + 'Pizza Size: ' + pizzaSize +
            '<h3 class="pizzaSauce:">' + 'Pizza Sauce: ' + pizzaSauce + '</h3>' +
            '<h3 class="pizzaToppings:">' + 'Pizza Toppings: ' + pizzaToppings + '</h3>' +
            '<h3 class="pizzaPrice:">' + 'Price: ' + '$' + pizzaPrice + '</h3>' +
            '</div>'  );

    });
});
