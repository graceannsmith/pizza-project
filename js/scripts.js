function PizzaMaker (size, toppings, price) {
    this.size = size;
    this.toppings = toppings;
    this.price = this.addSizePrice() + this.addToppingPrice();
}
PizzaMaker.prototype.addSizePrice = function() {
    if(this.size ==="smallPizza"){
        return 10.5;
    }
    if (this.size === "mediumPizza"){
        return 12.5;
    }
    if (this.size ==="largePizza"){
        return 15.5;
    }
}
PizzaMaker.prototype.addToppingPrice = function () {
   return this.toppings.length *1.50;
}
window.addEventListener("load", function(){
document.getElementById("pizzaForm").addEventListener("submit", function(event){
    event.preventDefault();
    let toppings = [];
    document.querySelectorAll('input[name="toppings"]:checked').forEach(function(checkbox) {
        toppings.push(checkbox.value);
    });
    let size = document.querySelector('input[name="pizza_sizes"]:checked').value;
    let newPizza = new PizzaMaker(size, toppings);
    document.querySelector("#grandTotal").innerText = "$" + newPizza.price.toFixed(2);  
});
});

