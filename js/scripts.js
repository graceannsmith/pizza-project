//BI
function PizzaMaker (size, toppings, price) {
    this.size = size;
    this.toppings = toppings;
    this.price = this.addSizePrice() + this.addToppingPrice();
}

PizzaMaker.prototype.addSizePrice = function() {
    if(this.size ==="small"){
        return 10.5;
    }
    if (this.size === "medium"){
        return 12.5;
    }
    if (this.size ==="large"){
        return 15.5;
    }
    return 0;
}
PizzaMaker.prototype.addToppingPrice = function () {
   return this.toppings.length *1.50;
}

//UI
function handleFormSubmission (event){
    event.preventDefault();

}
window.addEventListener("submit",function(){

});