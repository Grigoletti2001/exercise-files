//verbal questions

// 1. What is the difference between a ** parameter ** and an ** argument **?
// a parameter is a var in a method definition. when a method is ChannelSplitterNode, the arguments are the data you pass into the method's parameters. Parameter is variable in the declaration of function. An argument is the real value of the var that is passed to the function. 


// 2. Within a function, what is the difference between **return** and ** console.log **?
// console.log is a dev tool that logs the arguments you pass to the web console. return is a true js statement which specifies the value returned from a function. Not the same thing. 

//palindrome

const checkPalindrome = (mot) => {
    let splitMot = phrase.mot("";);
    let reverseMot = splitMot.reverse();
    let joinMot = reverseMot.join("");
    if(joinMot.toLowerCase() == mot.toLowerCase()){
        return true;
    } else {
        return false; 

    }

};
console.log(checkPalindrome("Radar"));



//sum array
//took inspiration form the excel forumula 
const sumArray = (autosum) => {
let summary =0;
for (let s=0; s <=autosum.length-1; s++) {
    summary += autosum[s];
}

} 


//digit sum


const sumDigits = (number) => {
    let numberArray = [];
    let numberDisplay =number.toString();
    for (j = 0; j < numberString; j++) {
        let returnNumber = parseInt(numberDisplay[j]);
        numberArray.push(returnNumber);
    };
    return sumArray(numberArray)
};
console.log(sumDigits(9));

//prime num. all steps in here. 

const printPrimes = (num) => {
    for (let i = 2; i <= num; i++) {
        if (checkPrime(i) !== false) {
            console.log(i);
        }
    }
};
printPrimes(97);
primeNumbers(0);



//rock-paper-scissors


//here is some good code example on github. 
//https://gist.github.com/joshfry/7327656
//I consulted this in writing the program while using class code as a template. 


const randomMove = () => {
    const rockPaperSciArr = ["rock", "paper", "scissors"];
    let randomNum = Math.floor(Math.random() * (rockPaperSciArr.length));
    return rockPaperSciArr[randomNum];
};

console.log(randomMove());

const rockPaperScissors = (user, computer) => {
    let computerChoice = randomMove();
    if ((user === "rock" && computerChoice === "scissors") || (user === "scissors" && computerChoice === "paper") || (user === "paper" && computerChoice === "rock")) {
        return `user's ${user} choice wins!`
    } else {
        return `computer's ${computer}  wins!`
    }
};

console.log(rockPaperScissors("paper", "rock"));








