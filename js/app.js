

// * Write a for loop that will log the numbers 1 through 20.
for (let i = 1; i <= 20; i++) {
    console.log(i)
}




// #### Get Even
for (let i = 0; i <= 200; i += 2) {
    console.log(i)
}




// ### Fizz Buzz


for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz")
    } else if (i % 3 === 0) {
        console.log("Fizz")
    } else if (i % 5 === 0) {
        console.log("Buzz")
    } else {
        console.log(i)
    }
}




// ### Wild Wild Life


const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
const sharky = ["Sharky", "shark", 20, "Left Coast"]
const plantee = ["Plantee", "plant", 5000, "Mordor"]
const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
const dart = ["D'Art", "Demogorgan Dog", 2, "Upside Down"]


plantee[2]++
console.log(plantee)
wolfy[3] = "Gotham City"
console.log(wolfy)
dart.push("Hawkins")
console.log(dart)
wolfy.shift()
wolfy.unshift("Gameboy")
console.log(wolfy)

// ### Yell at the Ninja Turtles

const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];
console.log(favMovies.indexOf("Titanic"))


favMovies.sort()
favMovies.pop()
favMovies.push("Guardians of the Galazy")
favMovies.reverse()
favMovies.shift()
favMovies.unshift("Suspiria") 
favMovies.splice(favMovies.indexOf("Django Unchained"), 1, "Avatar")
favMovies.slice(Math.round(favMovies.length / 2))
const slicedMovies = favMovies.slice(Math.round(favMovies.length / 2))
console.log(slicedMovies)
console.log(slicedMovies.indexOf("Fast and Furious")) 
console.log(slicedMovies.indexOf("Jaws")) 



const whereIsWaldo = [["Picard", "Riker"], "Data",
["Beverly", "Guinan", "Q", "Geordi"],
["Deanna", ["Worf", "Wesley"]]];

whereIsWaldo.splice(1, 1)
whereIsWaldo[1][2] = "No One"
console.log(whereIsWaldo[2][1][1])

const kittyStrings = ["why are you taking pictures of me?", " catnip made me do it...", "...why does the red dot disappear..."]
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(kittyStrings[Math.floor(Math.random() * 3)])
    }
    console.log("Love me, pet me! HSSSSSS!")
}



// Find the Median
const nums = [14, 11, 16, 15, 13, 16, 15, 17, 19, 11, 12, 14, 19, 11, 15, 17, 11, 18, 12, 17, 12, 71, 18, 15, 12]


const numsMedian = nums.sort()[Math.floor(nums.length / 2)]
console.log(numsMedian)


// Return of the Closets
const kristynsCloset = [
    "left shoe",
    "cowboy boots",
    "right sock",
    "GA hoodie",
    "green pants",
    "yellow knit hat",
    "marshmallow peeps"
];


const thomsCloset = [
    [
        //  shirts
        "grey button-up",
        "dark grey button-up",
        "light blue button-up",
        "blue button-up",
    ], 
    [
        // pants
        "grey jeans",
        "jeans",
        "PJs"
    ], 
    [
        // accessories
        "wool mittens",
        "wool scarf",
        "raybans"
    
    ]

];


const kristynsShoe = kristynsCloset.shift()
thomsCloset[2].push(kristynsShoe)


const kristynsFirstOutfit = [kristynsCloset[4], kristynsCloset[1], kristynsCloset[0]]
const kristynsSecondOutfit = [kristynsCloset[3], kristynsCloset[2], kristynsCloset[5]]
const kristynsThirdOutfit = [kristynsCloset[5], kristynsCloset[4], kristynsCloset[0]]
const kristynsOutfits = [kristynsFirstOutfit, kristynsSecondOutfit, kristynsThirdOutfit]


const thomsFirstOutfit = [thomsCloset[0][3], thomsCloset[2][2], thomsCloset[2][1]]
const thomsSecondOutfit = [thomsCloset[0][0], thomsCloset[1][0], thomsCloset[2][2]]
const thomsThirdOutfit = [thomsCloset[1][1], thomsCloset[2][2], thomsCloset[1][0]]
const thomsOutfits = [thomsFirstOutfit, thomsSecondOutfit, thomsThirdOutfit]


for (let i = 0; i < kristynsOutfits.length; i++) {
    console.log(`Kristyn will be wearing ${kristynsOutfits[i][0]}, ${kristynsOutfits[i][1]}, and ${kristynsOutfits[i][2]}`)
}


for (let i = 0; i < thomsOutfits.length; i++) {
    console.log(`Thom will be wearing ${thomsOutfits[i][0]}, ${thomsOutfits[i][1]}, and ${thomsOutfits[i][2]}`)
}


for (let i = 0; i < kristynsCloset.length; i++) {
    console.log(`WHIRR: Now washing ${kristynsCloset[i]}`)
}


console.log(thomsCloset[0])
console.log(thomsCloset[1])
console.log(thomsCloset[2])



