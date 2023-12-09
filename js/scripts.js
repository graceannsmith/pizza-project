//BI
function PizzaMaker (size, toppings, price) {
    this.size = size;
    this.toppings = toppings;
    this.price = this.addSizePrice();
}

PizzaMaker.prototype.addSizePrice = function() {
    if(this.size ==="small"){
        this.price = 10.5
    }
    if (this.size === "medium"){
        this.price = 12.5
    }
    if (this.size ==="large"){
        this.price = 15.5
    }
    return this.price;
}

//UI
function handleFormSubmission (event){
    event.preventDefault();

}
window.addEventListener("submit",function(){

});