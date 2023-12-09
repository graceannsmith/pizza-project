Create a website for a pizza company where a user can choose one or more individual toppings (cheese, pepperoni, artichoke, anchovy, etc.), a size to order a pizza, and see the final cost.

Allow the user to choose toppings and size for the pizza they'd like to order.
Create a pizza object constructor with properties for toppings and size.
Create a prototype method for the cost of a pizza depending on the selections chosen. Use your own formula for this.
Keep it simple to start! You do not need to have a complex formula for determining cost (although you can if you like). The most important part of this code review is using and demonstrating your understanding of constructors and prototypes.

Your business logic and user interface logic should be separated. In addition to that, do your best to follow the principle of separation of concerns for the functions that you create.

Test: It should create an object that has one property of size
Code: const myPizza = new PizzaMaker('Medium')
Expected Output: PizzaMaker{size: "medium"}

Test:It should create an object with both property of size and a property of toppings that has an array value with several potential toppings
Code:myPizza = new Pizza("Medium", ["basil", "sun dried tomatoes"] )
Expected Output: pizza{size: "Medium", toppings: ["basil", "sun dried tomatoes"]}

Test:
Code:
Expected Output:
Test:
Code:
Expected Output:
Test:
Code:
Expected Output:
Test:
Code:
Expected Output:
Test:
Code:
Expected Output:
Test:
Code:
Expected Output:
Test:
Code:
Expected Output:
Test:
Code:
Expected Output:
Test:
Code:
Expected Output:
Test:
Code:
Expected Output:
Test:
Code:
Expected Output:
Test:
Code:
Expected Output:
Test:
Code:
Expected Output:
Test:
Code:
Expected Output:
Test:
Code:
Expected Output:
