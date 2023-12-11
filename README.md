#### By **Graceann Smith**

#### Pizza Maker

## Technologies Used

* HTML
* CSS
* JavaScript

## GitHub Page Links

[Language-Chooser Github Page] 
(https://github.com/graceannsmith/pizza-project)

## Setup/Installation Requirements

* Open in any browser by clicking in link
*To clone please go to https://github.com/graceannsmith/pizza-project.git
*Highest directory in repository is pizza-project

## Description
This website allows the user to make a pizza.
The idea of this project is to be able to create an object with an object constructor and to have the values of the properties to be determined by user interaction with an HTML form.


Describe PizzaMaker();

Test:it should create an object that contains three properties: size, toppings and price
Code:const myPizza = new PizzaMaker("Medium", ["artichokes", "sun dried tomatoes"], 10.5)
Expected Output:PizzaMaker {size: 'Medium', toppings: Array(2), price: 10.5}

Test: PizzaMaker object constructor should have prototype added to update price based on size
Code:const myPizza = new PizzaMaker {size: 'Medium', toppings: Array(2), price: 10.5}
Expected Output: const myPizza = new PizzaMaker {size: 'Medium', toppings: Array(2), price: 10.5}


Test:It should create a method for updating the price based on topping
Code: const myNewPizza = new PizzaMaker("medium",["Olives","Sausage"]);
Expected Output: PizzaMaker {size: 'medium', toppings: Array(2), price: 15.5}

## Known Bugs

* Does not actually produce a physical pizza
  
## License

MIT License

Copyright (c) [2023] [Graceann Elizabeth Smith]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS B