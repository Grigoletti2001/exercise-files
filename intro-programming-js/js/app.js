console.log("JS Practice"); 


//Part 1: Terms

// 1. What is the difference between **interpolation** and **concatenation**? Give an example of each.
// Concatenation is simply a tool (or to use a lame CS punn a "method"...i joke because it is not) to combine strings together in programming. 
// Interpolation(also known as  variable interpolation or var expansion/substitution) is the processus of evaluating a string literal
//  containing one of more placeholders, and treating that string like a variable. 




// Example per StackOverflow: 

// Interpolation: (with angular)
// Model:-  $scope.name="rachit";

//    View:-  <div>{{name}}</div>

//    result in View after rendering :- <div>rachit</div>

// anything we use ${"string"} as oppoosed to traditional concatenation as seen bellow. 

// concatenation: 

// var test1 = "Hello";
// var number = 2 + 3;
// console.log(test1 + " " + number);



// 2. What does the acronym **DRY** stand for? Why should we pay attention to it? What programming tools have we learned to write **DRY** code?
// When it comes to programming, DRY and WET practices can be taken the same way — you’d want to avoid the WET ones.
//  With that said, DRY and WET are actually acronyms: Don't Repeat Yourself and Write Everything Twice.
//   Though most things have both positive and negative sides, sometimes, something is so good that you almost forget about the disadvantages.

// 3. What is the difference between declaring a variable and assigning a value to a variable?  What do we mean when we say "define" a variable?
// Declaration  allocates a variable and creates its contents.






// const good = greenApples;  //declaration and assignment in 1 statement. 
// let good; //  declaration  creates the var in memory. 
// good = greenApples; //assignment. adds data and value to the var which was previously creatly. initializing it to a vlue. 


// we mean by defining a variable by giving it a name because the default value if undefined in JavaScript. 


// 4. When should we use `const` and when should we use `let`?
// Let's talk about scope. 
// if you want to cheat and you're in a hurry and not sure, just use var. it is better use var then not code at all. 
// The default you should use is const. It means tha the identifier won't be reasigned. you can use let if a variable needs
//  to be resigned (example a counter in a loop or in an algorithm). 


// 5. Unix question: What is a "parent" directory?

// the above directory (the main or highest one is called root). to accest it use "cd ~" this will bring you to the root or highest parent directory. 
// to get to its child use cd __name of directory___  you can go to many child directories. 
// to get to its parent directory use cd .. or 2 parent directorories above it cd ../.. etc. (you can use this multiple time). there are also sibling directories. 
// go to to the parent and navigatge that way through the family TreeWalker.


// 6. Unix, again: If you're not sure about how to use a Unix command, how can you get more info without being connected to the internet?
// Use built in documentation by typing "man" and the command.  you can also simply type "help"
// example : man sudo (su) or man cd  or man git or man mkdir 

// 7. More Unix: What is "tab completion" and why is it aweseome?
// when you begin to type 1 or 2 characters of a file or directory in the directory you are in you hit "tab" and it will automatically complete it for you. 




// ## Part 2: Boolean expressions and operators
// **... and variable assignment**

// - Remember: **Expressions** in JavaScript are anything that can be said to have a _value_.
// - Remember: Variable **assignment** is a **right-to-left** operation: the **expression** on the right side of the equal sign gets **evaluated** *AND THEN* put into the variable **declared** on the left side.
// - Using the provided variable definitions, replace the blanks with mathematical or boolean operators that make the expression evaluate to `true`.
// - Test your answers by using `console.log` in front of each expression in your answer file.

// 

  const a = 4;

  const b = 53;

  const c = 57;
  
  const d = 16;
  const e = 'Kevin';

    console.log(a);
    console.log(b);
    console.log(c);
    console.log(d);
    console.log(e); 

console.log(a < b);
console.log(c > d);
console.log("Name" === "Name");
console.log(a * a === d);
console.log(e === 'Kevin');
console.log(48 = '48');






// ## Part 3: While loops
// ### 1. Infinite loop?


// * is this an infinite loop? Why or why not?
//     yes because there are no conditions that would stop the loop from stoping/or completing the start task.


//### 2. Infinite loop II

// is the following loop an infinite loop? Why or why not?

// no. the variable runProgram is changed to false. it cancells out the begining of the program. 

// ### 3. Reading code

let letters = "A";//var letters has the value of string capital "A"
let i = 0; //"variable i has a value of number 0. 

while (i < 20) { //while loop
	letters += "A"; //looping it
	i++;//increment it
}

console.log(letters);
displaying the char "A" 19x because 0-20 has an index of 19.
```

//After coming to a conclusion, run the code and write down whether it gave you the expected result. If not, how did it differ?
//I was close. it had 21 chars. The loop prints and includes the variable 0 and doesn't start with it. when it increments. 


// ## Part 4: Loops!

// ### 1. `for` loops

// Answer the following question:

// Both for loops and while loops repeat code.  But what are the differences?  What are the similarities?

// //while loops are used less and usually are best for infinite loops or algorithms and intensive tasks. 
// //for loops are more comment and are self contained and used a certain number of times. 

// ### 2. Basic `for` loop

// Write a for loop that will `console.log()` the numbers 0 to 999.

for (let i = 0; i<=999; i++) {
    console.log(i);
}

// ### 3. The mechanics of a `for` loop 

// Here is an example `for` loop that prints a message 100 times:


for (let i = 0; i < 100; i++) {
	console.log('Without you, today\'s emotions are the scurf of yesterday\'s');
}
// ```

// What are the three components of the **control statement**? Each component is separated by a semicolon `;`.

// Write your answers as comments in the file.  Say what each part does.

// * The first part of the control statement is:
// initialization( var is assigned) (ex.let  i = 0)
// * The second part of the control statement is:
// the conditions(s).when to stop the loop. (i <= 999. the end of the loop. )
// * The third part of the control statement is:
// the actual changes being made to the var. (ex.i++ increment the type of actions. )


// ### 4. `for` loop in reverse

for (let i = 999; i >= 0; i = i - 1) {
    console.log(i)
    //i presume this is what the directions mean by postfix operator. 

// ### 5. More counting

// Write a `for` loop that uses **interpolation** to print a message to the console that includes the current value of `i`.



for(let i = 1; i <= 10; i = i + 1) {
console.log("the value of i is: " + i + " of 10");
    }