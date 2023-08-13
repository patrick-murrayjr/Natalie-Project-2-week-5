/***********************************************************
 * # Project 2: Programming Fundamentals

## Description

Create a vending machine that handles money, dispenses products, and gives change.

## Week 5

This week we'll improve our vending machine so that the user can pick between multiple products. We'll store all the available products' names, prices, and quantities. The user will pick the name of a product, and using that we'll find the price and quantity and vend the product. We'll also improve the money formatting.

### Task 1: Improve Data Storage
Make 3 new variables above your variables from last week:
* One for the **product names list**. Set it to something like `["Cheetos", "Popcorn", "Fritos", "Water Bottle", "Sun Chips", "Doritos"]`
* One for the **product prices list**. Set it to something like `[1.15, 2, 3.5, 1, 2, 4]`
* One for the **product quantities list**. Set it to something like `[5, 10, 4, 2, 0, 0]`
*/
// This week's variables
let productNamesList = [
   'Cheetos',
   'Popcorn',
   'Fritos',
   'Water Bottle',
   'Sun Chips',
   'Doritos',
];
let productPricesList = [1.15, 2, 3.5, 1, 2, 4];
let productQuantitiesList = [5, 10, 4, 2, 0, 0];

// Last week's variables
let customerBalance = 2;
let productName = '';
let productPrice = 0;
let productQuantity = 0;
let change = 0;
/*
The first item in each array go together (`"Cheetos"`, `1.15`, `5`), the second item in each array go together (`"Popcorn"`, `2`, `10`), and so on.

### Task 2: User Input
We already have an **product name** variable from last week. Rather than us, the developers, picking the product name, let's allow the user to pick the product they want.

Using prompt, ask the user the name of the product they want and save it in the **product name** variable.


// prompt user for product name
productName = prompt(`${productNamesList.join('\n')}
\n\nWhat product would you like?`);
console.log(productName);


### Task 3: Finding the Price and Quantity
We have the name of the user's choice, but we need to make sure our **product price** and **product quantity** variables from last week match the product with the name they picked.

How can we figure out which number in the **product prices list** is the price of the product the user picked?

Let's imagine the user picks `"Popcorn"`. `"Popcorn"` is at index 1 in the **product names list** (since array indexes start at 0). The corresponding price is at index 1 in the **product prices list** and the corresponding quantity is at index 1 in the **product quantities list**. So if we know the index of the **product name** in the **product names list** we can use that index to get the price and quantity.

How can we get the index of the **product name** in the **product names list**?

There are a few ways to do this. One is to loop over the **product names list**.

Make a loop that finds the index for **product name** in the **product names list**.


// loop to find product in productNamesList
let productIndex = -1;
for (let i = 0; i < productNamesList.length; i++) {
   //console.log(productNamesList[i]);
   if (productName === productNamesList[i]) {
      //   console.log('found at index', i);
      productIndex = i;
   } else {
      //   console.log('not found');
   }
}
// console.log(productIndex);

> **Note**
>
>There are other ways we could get the index. Writing a loop that loops over an array is an important thing to practice and we'll need the loop for next week, but there are tools that would do the looping for us and make this task easier. Once you've successfully written a loop, you could do some research and see if you can find another way to get the index and try it out. But leave your loop code there, we'll need it next week.

> **Feeling stuck? Here are some hints!**
>
> Hint 1: For this task you could use either a `while` loop or a `for` loop, but a `for` loop is probably easiest.
> 
> Hint 2: Inside the loop you'll need to make a check. If the name at that index in the array matches the **product name** you'll want to save the **index** in a variable. BUT. We want to be able to use that variable after the ending curly bracket of the loop. Where do we need to define (create) that variable so that it will be in scope (still exist) after the loop ends?

Once you have the **product index**, use it to index into the **product prices list** and **product quantities list** to get the price and quantity for the product the user picked. Save the price and quantity in the **product price** and **product quantity** variables you made last week.

// variables to hold product info
productName = productNamesList[productIndex]; //
productPrice = productPricesList[productIndex];
productQuantity = productQuantitiesList[productIndex];


### Testing Tasks 1-3

Well testing got a bit easier! Now we can just fill an product name into the prompt to test it. Let's make sure we didn't break anything from last week.

>**Note**
>
>In order for the tests to work you will probably have to type the name into the prompt *exactly* as shown below, capitalized the same. But there are ways to allow the code to accept `"cheetos"` and `"CHEETOS"` as if they were `"Cheetos"`. Try researching that. How can you make something case insensitive?

// updated to convert to uppercase
for (let i = 0; i < productNamesList.length; i++) {
   //console.log(productNamesList[i]);
   if (productName.toUpperCase() === productNamesList[i].toUpperCase()) {
      //   console.log('found at index', i);
      productIndex = i;
   } else {
      //   console.log('not found');
   }
}

To match the tests, set your variables to:

Product names list: `["Cheetos", "Popcorn", "Fritos", "Water Bottle", "Sun Chips", "Doritos"]`  
Product prices list: `[1.15, 2, 3.5, 1, 2, 4]`  
Product quantitites list: `[5, 10, 4, 2, 0, 0]`  

---

Customer balance: `2`
Enter into prompt: `Popcorn`    
Logged to console:    
`Enjoy your Popcorn! Here's your change: 0`  
`Number left in machine: 9 Customer balance: 0`  

--

Customer balance: `2`  
Enter into prompt: `Fritos`   
Logged to console:  
`You haven't added enough money for that product. You need to add 1.5 more.`  
`Number left in machine: 4 Customer balance: 2`  

--

Customer balance: `2`  
Enter into prompt: `Sun Chips`  
Logged to console:  
`Sorry, we're out of Sun Chips. Returned: 2`  
`Number left in machine: 0  Customer balance: 0`  


console.log('Testing Tasks 1-3\n-----------\n\n');
// prompt user for product name
productName = prompt(`${productNamesList.join('\n')}
\n\nWhat product would you like?`);

// loop to find product in productNamesList
let productIndex = -1;

for (let i = 0; i < productNamesList.length; i++) {
   if (productName.toUpperCase() === productNamesList[i].toUpperCase()) {
      productIndex = i;
   }
}
productName = productNamesList[productIndex];
productPrice = productPricesList[productIndex];
productQuantity = productQuantitiesList[productIndex];
change = customerBalance - productPrice;
if (productQuantity === 0) {
   console.log(`Sorry, we're out of ${productName}. Returned: ${customerBalance}`);
   customerBalance = 0;
   console.log(
      `Number left in machine: ${productQuantity} Customer balance: ${customerBalance}`
   );
} else if (customerBalance < productPrice) {
   console.log(
      `You haven't added enough money for that product. You need to add ${
         productPrice - customerBalance
      } more.`
   );
   console.log(
      `Number left in machine: ${productQuantity} Customer balance: ${customerBalance}`
   );
} else {
   customerBalance = customerBalance - (productPrice + change);
   console.log(`Enjoy your ${productName}! Here's your change: ${change}`);
   console.log(
      `Number left in machine: ${
         productQuantity - 1
      } Customer balance: ${customerBalance}`
   );
}
console.log('-----------\n\n');

---
### Task 4: Formatting Money

Let's make a little improvement to our app. Let's format our money values. Each money value should have a dollar sign at the beginning $ and two decimal points. Like this:

`0.8500000000000001` --> `"$0.85"`

By formatting it, we convert the number to a string.

//formatting money
let formattedMoney = '$' + (0.8500000000000001).toFixed(2);
console.log(formattedMoney);

### Testing Task 4

And let's test again, to make sure everything's getting formatted correctly.

---
 
Customer balance: `2`  
Product name: `"Cheetos"` 
Logged to console:    
`Enjoy your Cheetos! Here's your change: $0.85`  
`Number left in machine: 4  Customer balance: $0.00`  

console.log('Testing Task 4\n-----------\n\n');
// prompt user for product name
// customer inserts money
customerBalance = 2;
productName = prompt(`${productNamesList.join('\n')}
\n\nWhat product would you like?`);

// loop to find product in productNamesList
let productIndex = -1;

for (let i = 0; i < productNamesList.length; i++) {
   if (productName.toUpperCase() === productNamesList[i].toUpperCase()) {
      productIndex = i;
   }
}
productName = productNamesList[productIndex];
productPrice = productPricesList[productIndex];
productQuantity = productQuantitiesList[productIndex];
change = customerBalance - productPrice;
if (productQuantity === 0) {
   console.log(
      `Sorry, we're out of ${productName}. Returned: $${customerBalance.toFixed(2)}`
   );
   customerBalance = 0;
   console.log(
      `Number left in machine: ${productQuantity} Customer balance: $${customerBalance.toFixed(
         2
      )}`
   );
} else if (customerBalance < productPrice) {
   console.log(
      `You haven't added enough money for that product. You need to add $${(
         productPrice - customerBalance
      ).toFixed(2)} more.`
   );
   console.log(
      `Number left in machine: ${productQuantity} Customer balance: $${customerBalance.toFixed(
         2
      )}`
   );
} else {
   customerBalance = customerBalance - (productPrice + change);
   productQuantitiesList[productIndex] = productQuantity - 1;
   console.log(`Enjoy your ${productName}! Here's your change: $${change.toFixed(2)}`);
   console.log(
      `Number left in machine: ${
         productQuantitiesList[productIndex]
      } Customer balance: $${customerBalance.toFixed(2)}`
   );
}
console.log('-----------\n\n');

--

Customer balance: `0`  
Product name: `"Water Bottle"`   
Logged to console:  
`You haven't added enough money for that product. You need to add $1.00 more.`  
`Number left in machine: 2 Customer balance: $0.00`  

console.log('Testing Task 4\n-----------\n\n');
// customer does not insert enough money
customerBalance = 0;
// prompt user for product name
productName = prompt(`${productNamesList.join('\n')}
\n\nWhat product would you like?`);

// loop to find product in productNamesList
productIndex = -1;

for (let i = 0; i < productNamesList.length; i++) {
   if (productName.toUpperCase() === productNamesList[i].toUpperCase()) {
      productIndex = i;
   }
}
productName = productNamesList[productIndex];
productPrice = productPricesList[productIndex];
productQuantity = productQuantitiesList[productIndex];
change = customerBalance - productPrice;
if (productQuantity === 0) {
   console.log(
      `Sorry, we're out of ${productName}. Returned: $${customerBalance.toFixed(2)}`
   );
   customerBalance = 0;
   console.log(
      `Number left in machine: ${productQuantity} Customer balance: $${customerBalance.toFixed(
         2
      )}`
   );
} else if (customerBalance < productPrice) {
   console.log(
      `You haven't added enough money for that product. You need to add $${(
         productPrice - customerBalance
      ).toFixed(2)} more.`
   );
   console.log(
      `Number left in machine: ${productQuantity} Customer balance: $${customerBalance.toFixed(
         2
      )}`
   );
} else {
   customerBalance = customerBalance - (productPrice + change);
   productQuantitiesList[productIndex] = productQuantity - 1;
   console.log(`Enjoy your ${productName}! Here's your change: $${change.toFixed(2)}`);
   console.log(
      `Number left in machine: ${
         productQuantitiesList[productIndex]
      } Customer balance: $${customerBalance.toFixed(2)}`
   );
}
console.log('-----------\n\n');

--

Customer balance: `2`  
Product name: `"Doritos"`   
Logged to console:  
`Sorry, we're out of Doritos. Returned: $2.00`  
`Number left in machine: 0  Customer balance: $0.00`   

console.log('Testing Task 4\n-----------\n\n');
// customer inserts money
customerBalance = 2;
// prompt user for product name
productName = prompt(`${productNamesList.join('\n')}
\n\nWhat product would you like?`);

// loop to find product in productNamesList
productIndex = -1;

for (let i = 0; i < productNamesList.length; i++) {
   if (productName.toUpperCase() === productNamesList[i].toUpperCase()) {
      productIndex = i;
   }
}
productName = productNamesList[productIndex];
productPrice = productPricesList[productIndex];
productQuantity = productQuantitiesList[productIndex];
change = customerBalance - productPrice;
if (productQuantity === 0) {
   console.log(
      `Sorry, we're out of ${productName}. Returned: $${customerBalance.toFixed(2)}`
   );
   customerBalance = 0;
   console.log(
      `Number left in machine: ${productQuantity} Customer balance: $${customerBalance.toFixed(
         2
      )}`
   );
} else if (customerBalance < productPrice) {
   console.log(
      `You haven't added enough money for that product. You need to add $${(
         productPrice - customerBalance
      ).toFixed(2)} more.`
   );
   console.log(
      `Number left in machine: ${productQuantity} Customer balance: $${customerBalance.toFixed(
         2
      )}`
   );
} else {
   customerBalance = customerBalance - (productPrice + change);
   productQuantitiesList[productIndex] = productQuantity - 1;
   console.log(`Enjoy your ${productName}! Here's your change: $${change.toFixed(2)}`);
   console.log(
      `Number left in machine: ${
         productQuantitiesList[productIndex]
      } Customer balance: $${customerBalance.toFixed(2)}`
   );
}
console.log('-----------\n\n');

---

### Task 5: Fixing a Bug

Our app is much nicer, but we've also made a problem for ourselves.

What happens if the user types `Banana` into the prompt?

I'm not sure what your code does, but mine logs out nonsense.

`Enjoy your Banana! Here's your change: $NaN`  
`Number left in machine: NaN Customer balance: $0.00`

We need to prevent the user from vending products that don't exist. 

There are a few ways to do this - experiment and see what you come up with. If the user picks an invalid selection, we'll want to log out an appropriate message and return the user's money (set the **customer balance** to zero). Something like:

`Product not found. Returned: $2.00`  
`Number left in machine: 0 Customer balance: $0.00`  

### Testing Task 5

Let's test again, first testing the new functionality:

---

Enter into prompt: `Banana`  
Customer balance: `2`  
Logged to console:  
`Product not found. Returned: $2.00`  
`Number left in machine: 0 Customer balance: $0.00`
*/
console.log('Testing Task 5 Error fix\n-----------\n\n');
// customer inserts money
customerBalance = 2;
// prompt user for product name
productName = prompt(`${productNamesList.join('\n')}
\n\nWhat product would you like?`);

// loop to find product in productNamesList
productIndex = -1;

for (let i = 0; i < productNamesList.length; i++) {
   if (
      productName != null &&
      productName.toUpperCase() === productNamesList[i].toUpperCase()
   ) {
      productIndex = i;
   }
}
productName = productNamesList[productIndex];
productPrice = productPricesList[productIndex];
productQuantity = productQuantitiesList[productIndex];
change = customerBalance - productPrice;
if (productIndex === -1) {
   console.log(`Product not found. Returned: $${customerBalance.toFixed(2)}`);
   customerBalance = 0;
   productQuantity = 0;
   console.log(
      `Number left in machine: ${productQuantity} Customer balance: $${customerBalance.toFixed(
         2
      )}`
   );
} else {
   if (productQuantity === 0) {
      console.log(
         `Sorry, we're out of ${productName}. Returned: $${customerBalance.toFixed(2)}`
      );
      customerBalance = 0;
      console.log(
         `Number left in machine: ${productQuantity} Customer balance: $${customerBalance.toFixed(
            2
         )}`
      );
   } else if (customerBalance < productPrice) {
      console.log(
         `You haven't added enough money for that product. You need to add $${(
            productPrice - customerBalance
         ).toFixed(2)} more.`
      );
      console.log(
         `Number left in machine: ${productQuantity} Customer balance: $${customerBalance.toFixed(
            2
         )}`
      );
   } else {
      customerBalance = customerBalance - (productPrice + change);
      productQuantitiesList[productIndex] = productQuantity - 1;
      console.log(`Enjoy your ${productName}! Here's your change: $${change.toFixed(2)}`);
      console.log(
         `Number left in machine: ${
            productQuantitiesList[productIndex]
         } Customer balance: $${customerBalance.toFixed(2)}`
      );
   }
}
console.log('-----------\n\n');
/*
--

Don't enter anything into the prompt  
Customer balance: `2`  
Logged to console:  
`Product not found. Returned: $2.00`  
`Number left in machine: 0 Customer balance: $0.00`
*/
console.log('Testing Task 5 Error fix\n-----------\n\n');
// customer inserts money
customerBalance = 2;
// prompt user for product name
productName = prompt(`${productNamesList.join('\n')}
\n\nWhat product would you like?`);

// loop to find product in productNamesList
productIndex = -1;

for (let i = 0; i < productNamesList.length; i++) {
   if (
      productName != null &&
      productName.toUpperCase() === productNamesList[i].toUpperCase()
   ) {
      productIndex = i;
   }
}
productName = productNamesList[productIndex];
productPrice = productPricesList[productIndex];
productQuantity = productQuantitiesList[productIndex];
change = customerBalance - productPrice;
if (productIndex === -1) {
   console.log(`Product not found. Returned: $${customerBalance.toFixed(2)}`);
   customerBalance = 0;
   productQuantity = 0;
   console.log(
      `Number left in machine: ${productQuantity} Customer balance: $${customerBalance.toFixed(
         2
      )}`
   );
} else {
   if (productQuantity === 0) {
      console.log(
         `Sorry, we're out of ${productName}. Returned: $${customerBalance.toFixed(2)}`
      );
      customerBalance = 0;
      console.log(
         `Number left in machine: ${productQuantity} Customer balance: $${customerBalance.toFixed(
            2
         )}`
      );
   } else if (customerBalance < productPrice) {
      console.log(
         `You haven't added enough money for that product. You need to add $${(
            productPrice - customerBalance
         ).toFixed(2)} more.`
      );
      console.log(
         `Number left in machine: ${productQuantity} Customer balance: $${customerBalance.toFixed(
            2
         )}`
      );
   } else {
      customerBalance = customerBalance - (productPrice + change);
      productQuantitiesList[productIndex] = productQuantity - 1;
      console.log(`Enjoy your ${productName}! Here's your change: $${change.toFixed(2)}`);
      console.log(
         `Number left in machine: ${
            productQuantitiesList[productIndex]
         } Customer balance: $${customerBalance.toFixed(2)}`
      );
   }
}
console.log('-----------\n\n');
/*
--

Cancel out of the prompt  
Customer balance: `2`  
Logged to console:  
`Product not found. Returned: $2.00`  
`Number left in machine: 0 Customer balance: $0.00`
*/
console.log('Testing Task 5 Error fix\n-----------\n\n');
// customer inserts money
customerBalance = 2;
// prompt user for product name
productName = prompt(`${productNamesList.join('\n')}
\n\nWhat product would you like?`);

// loop to find product in productNamesList
productIndex = -1;

for (let i = 0; i < productNamesList.length; i++) {
   if (
      productName != null &&
      productName.toUpperCase() === productNamesList[i].toUpperCase()
   ) {
      productIndex = i;
   }
}
productName = productNamesList[productIndex];
productPrice = productPricesList[productIndex];
productQuantity = productQuantitiesList[productIndex];
change = customerBalance - productPrice;
if (productIndex === -1) {
   console.log(`Product not found. Returned: $${customerBalance.toFixed(2)}`);
   customerBalance = 0;
   productQuantity = 0;
   console.log(
      `Number left in machine: ${productQuantity} Customer balance: $${customerBalance.toFixed(
         2
      )}`
   );
} else {
   if (productQuantity === 0) {
      console.log(
         `Sorry, we're out of ${productName}. Returned: $${customerBalance.toFixed(2)}`
      );
      customerBalance = 0;
      console.log(
         `Number left in machine: ${productQuantity} Customer balance: $${customerBalance.toFixed(
            2
         )}`
      );
   } else if (customerBalance < productPrice) {
      console.log(
         `You haven't added enough money for that product. You need to add $${(
            productPrice - customerBalance
         ).toFixed(2)} more.`
      );
      console.log(
         `Number left in machine: ${productQuantity} Customer balance: $${customerBalance.toFixed(
            2
         )}`
      );
   } else {
      customerBalance = customerBalance - (productPrice + change);
      productQuantitiesList[productIndex] = productQuantity - 1;
      console.log(`Enjoy your ${productName}! Here's your change: $${change.toFixed(2)}`);
      console.log(
         `Number left in machine: ${
            productQuantitiesList[productIndex]
         } Customer balance: $${customerBalance.toFixed(2)}`
      );
   }
}
console.log('-----------\n\n');
/*
---

And then making sure we haven't broken anything that was working before:

---

Enter into prompt: `Popcorn`  
Customer balance: `2`  
Logged to console:  
`Enjoy your Popcorn! Here's your change: $0.00`  
`Number left in machine: 9 Customer balance: $0.00`  
*/
console.log('Testing Task 5 Error fix\n-----------\n\n');
// customer inserts money
customerBalance = 2;
// prompt user for product name
productName = prompt(`${productNamesList.join('\n')}
\n\nWhat product would you like?`);

// loop to find product in productNamesList
productIndex = -1;

for (let i = 0; i < productNamesList.length; i++) {
   if (
      productName != null &&
      productName.toUpperCase() === productNamesList[i].toUpperCase()
   ) {
      productIndex = i;
   }
}
productName = productNamesList[productIndex];
productPrice = productPricesList[productIndex];
productQuantity = productQuantitiesList[productIndex];
change = customerBalance - productPrice;
if (productIndex === -1) {
   console.log(`Product not found. Returned: $${customerBalance.toFixed(2)}`);
   customerBalance = 0;
   productQuantity = 0;
   console.log(
      `Number left in machine: ${productQuantity} Customer balance: $${customerBalance.toFixed(
         2
      )}`
   );
} else {
   if (productQuantity === 0) {
      console.log(
         `Sorry, we're out of ${productName}. Returned: $${customerBalance.toFixed(2)}`
      );
      customerBalance = 0;
      console.log(
         `Number left in machine: ${productQuantity} Customer balance: $${customerBalance.toFixed(
            2
         )}`
      );
   } else if (customerBalance < productPrice) {
      console.log(
         `You haven't added enough money for that product. You need to add $${(
            productPrice - customerBalance
         ).toFixed(2)} more.`
      );
      console.log(
         `Number left in machine: ${productQuantity} Customer balance: $${customerBalance.toFixed(
            2
         )}`
      );
   } else {
      customerBalance = customerBalance - (productPrice + change);
      productQuantitiesList[productIndex] = productQuantity - 1;
      console.log(`Enjoy your ${productName}! Here's your change: $${change.toFixed(2)}`);
      console.log(
         `Number left in machine: ${
            productQuantitiesList[productIndex]
         } Customer balance: $${customerBalance.toFixed(2)}`
      );
   }
}
console.log('-----------\n\n');
/*
--

Enter into prompt: `Fritos`  
Customer balance: `2`  
Logged to console:  
`You haven't added enough money for that product. You need to add $1.50 more.`  
`Number left in machine: 4 Customer balance: 1`  
PFM: Proposed change to the above:
`Number left in machine: 4 Customer balance: $2.00`  
*/
console.log('Testing Task 5 Error fix\n-----------\n\n');
// customer inserts money
customerBalance = 2;
// prompt user for product name
productName = prompt(`${productNamesList.join('\n')}
\n\nWhat product would you like?`);

// loop to find product in productNamesList
productIndex = -1;

for (let i = 0; i < productNamesList.length; i++) {
   if (
      productName != null &&
      productName.toUpperCase() === productNamesList[i].toUpperCase()
   ) {
      productIndex = i;
   }
}
productName = productNamesList[productIndex];
productPrice = productPricesList[productIndex];
productQuantity = productQuantitiesList[productIndex];
change = customerBalance - productPrice;
if (productIndex === -1) {
   console.log(`Product not found. Returned: $${customerBalance.toFixed(2)}`);
   customerBalance = 0;
   productQuantity = 0;
   console.log(
      `Number left in machine: ${productQuantity} Customer balance: $${customerBalance.toFixed(
         2
      )}`
   );
} else {
   if (productQuantity === 0) {
      console.log(
         `Sorry, we're out of ${productName}. Returned: $${customerBalance.toFixed(2)}`
      );
      customerBalance = 0;
      console.log(
         `Number left in machine: ${productQuantity} Customer balance: $${customerBalance.toFixed(
            2
         )}`
      );
   } else if (customerBalance < productPrice) {
      console.log(
         `You haven't added enough money for that product. You need to add $${(
            productPrice - customerBalance
         ).toFixed(2)} more.`
      );
      console.log(
         `Number left in machine: ${productQuantity} Customer balance: $${customerBalance.toFixed(
            2
         )}`
      );
   } else {
      customerBalance = customerBalance - (productPrice + change);
      productQuantitiesList[productIndex] = productQuantity - 1;
      console.log(`Enjoy your ${productName}! Here's your change: $${change.toFixed(2)}`);
      console.log(
         `Number left in machine: ${
            productQuantitiesList[productIndex]
         } Customer balance: $${customerBalance.toFixed(2)}`
      );
   }
}
console.log('-----------\n\n');
/*
--

Enter into prompt: `Sun Chips`  
Customer balance: `2`  
Logged to console:  
`Sorry, we're out of Sun Chips. Returned: $2.00`  
`Number left in machine: 0  Customer balance: $0.00`  
*/
console.log('Testing Task 5 Error fix\n-----------\n\n');
// customer inserts money
customerBalance = 2;
// prompt user for product name
productName = prompt(`${productNamesList.join('\n')}
\n\nWhat product would you like?`);

// loop to find product in productNamesList
productIndex = -1;

for (let i = 0; i < productNamesList.length; i++) {
   if (
      productName != null &&
      productName.toUpperCase() === productNamesList[i].toUpperCase()
   ) {
      productIndex = i;
   }
}
productName = productNamesList[productIndex];
productPrice = productPricesList[productIndex];
productQuantity = productQuantitiesList[productIndex];
change = customerBalance - productPrice;
if (productIndex === -1) {
   console.log(`Product not found. Returned: $${customerBalance.toFixed(2)}`);
   customerBalance = 0;
   productQuantity = 0;
   console.log(
      `Number left in machine: ${productQuantity} Customer balance: $${customerBalance.toFixed(
         2
      )}`
   );
} else {
   if (productQuantity === 0) {
      console.log(
         `Sorry, we're out of ${productName}. Returned: $${customerBalance.toFixed(2)}`
      );
      customerBalance = 0;
      console.log(
         `Number left in machine: ${productQuantity} Customer balance: $${customerBalance.toFixed(
            2
         )}`
      );
   } else if (customerBalance < productPrice) {
      console.log(
         `You haven't added enough money for that product. You need to add $${(
            productPrice - customerBalance
         ).toFixed(2)} more.`
      );
      console.log(
         `Number left in machine: ${productQuantity} Customer balance: $${customerBalance.toFixed(
            2
         )}`
      );
   } else {
      customerBalance = customerBalance - (productPrice + change);
      productQuantitiesList[productIndex] = productQuantity - 1;
      console.log(`Enjoy your ${productName}! Here's your change: $${change.toFixed(2)}`);
      console.log(
         `Number left in machine: ${
            productQuantitiesList[productIndex]
         } Customer balance: $${customerBalance.toFixed(2)}`
      );
   }
}
console.log('-----------\n\n');
/*
---

### Finished

And we're done! We've improved our app by storing our product names, prices, and quantities all together in arrays, allowing the user to pick the product to vend, and formatting the money values.

Next week we'll hook the vending machine up with some buttons!
 * 
 * 
 */
