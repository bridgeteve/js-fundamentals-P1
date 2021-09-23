# Fundamentals: Exercises

_We will correct these exercises in class._

## Exercise 1

```js
// Look at these expressions below and determine whether they evaluate to true or false

1. true || false 
true
2. false && false 
false (even though they are the same neither are true)
3. 1 < 2 && 2 > 1
true
4. 31 < 13 || 1 < 2 && 3 > 1 
true (because one side is true?)
5. 400 <= 400 && 399 < 400 && (30 > 31 || 400 > 31) 
true (becuase brackets)
6. true && false && false || false && true
false
7. true && false || true || false
true
8. true && false && false || false && true ? true && false && false || false && true : 1 < 2 && 2 > 1
ternary operator 
The conditional (ternary) operator is the only JavaScript operator that takes three operands: a condition followed by a question mark ( ? ), then an expression to execute if the condition is truthy followed by a colon ( : ), and finally the expression to execute if the condition is falsy.
so 
true 

```

---

## Exercise 2

Given this data structure:

```js
let data = [0, [], [], [1, 2, 3, [4]]];
```

1. How would you access the value `0`? data[0]
2. How would you access the value `3`? data[3][2]
3. How would you access the value `4`? data[3][3][0]
--> need brackets around each number
---

## Exercise 3

- List the number of properties for each object.
- For each property, indicate its key and its value.
- For each property value, indicate its type.

```js
{ label: 'corn', price: 5.3 + '$' }; 2 properties, label and price are keys with values corn and 5.3$ respectively
{ ISBN: 53532, isAvailable: true, author: 'Nakamoto' }; 3 properties, ISBN, isAvailable and author are keys and 53532, true, and Nakamoto are the values
```

---

## Exercise 4

```js
// Given
let person = { name: "Bob", age: 23 };
```

What is the value of the following expressions?

1. person.name Bob
2. person['name'] Bob
3. person[name] undefined? syntax error? quotes tell you that you are searching a property not a variable, you would not need quotes if name was a perviously defined variable 
