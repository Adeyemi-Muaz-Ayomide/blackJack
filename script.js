let cards = [];
let sum = 0;
let isAlive = true;
let hasBlackJack = false;
let message = " "
let renderingToPage = document.getElementById('message-el');
let sumEl = document.querySelector('#sum-el');
let cardsEl = document.querySelector("#cards-el");


// let playerName = 'Maaaazi';
// let playerChips = 145;

// let playerEl = document.getElementById('player-el');
// playerEl.textContent = playerName + ": $" + playerChips;

let player = {
    name : 'Maaazi',
    chips : 145 
};


let playerEl = document.getElementById('player-el');
playerEl.textContent = player.name + ": $" + player.chips;


function startGame() {
    let firstCard = getRandomNumber();
    let secondCard = getRandomNumber();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;

    renderGame();
};

function getRandomNumber() {
    let randomNum = (Math.random() * 13) + 1;
    let flooredRandNum = Math.floor(randomNum);
    // return flooredRandNum;


    if(flooredRandNum === 1) {
        return 11;
    } else if(flooredRandNum > 10){
        return 10;
    } else{
        return flooredRandNum;
    }

    // console.log(flooredRandNum);
};



function renderGame() {  
    cardsEl.textContent = 'Cards: ';
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + ' ';
    };

    if(sum <= 20){
        message = 'Do you want to draw a new card?';
    } else if (sum === 21){
        message = "You've got Blackjack!"
    } else{
        isAlive = false;
        message = 'You are out of the game!!!';
    }
    renderingToPage.textContent = message;
    sumEl.textContent = 'Sum: ' + sum;
};



function newCard() {
     if (isAlive === true && hasBlackJack === false) {
        let thirdCard = getRandomNumber(); 
        sum += thirdCard;
        cards.push(thirdCard);
        renderGame();
     }


    // let thirdCard = getRandomNumber(); 
    // sum += thirdCard;
    // cards.push(thirdCard);
    // renderGame();
};


//RETURN VALUE PRACTICE


let muadhScore = 67;
let abdScore = 70;
let alScore = 76;

function highestScore() {
    if (muadhScore < abdScore) {
        return abdScore;
    } else if(abdScore < alScore) {
        return alScore;
    } else{
        return muadhScore;
    }
};

let totalHighestScore = highestScore();
console.log(totalHighestScore);

//GENERATING RANDOM NUMBER
// Math.floor();
// Math.random();
// Math.random() * 7;
// let flooredNum = Math.floor(Math.random() * 6 ) + 1;

// function rollingDice() {
//     return flooredNum;
// };
// console.log( rollingDice() );


//LOGICAL AND(&&) OPERATOR
let hasSolvedChallenges = false;
let hasLeftHints = false;

if (hasSolvedChallenges === false && hasLeftHints === false) {
    showSolution();
};

function showSolution() {
    console.log('Showing Solution....')
};


// LOGICAL OR(||) OPERATOR

let likesDocumentaries = false;
let likesStartups = false;

if (likesDocumentaries === true || likesStartups === false) {
    recommendedMovies();
}

function recommendedMovies() {
    console.log('Hey!!!! check out this new film we think you will like')
}


// OBJECTS

let raceGuy = {
    name : 'Steven Botman',
    age : 32,
    distanceCovered : '132km',
    isSingle : true
};

console.log(raceGuy.name)


let airBnbPrice = {
    name: "live like a king in my castle",
    attractions: [
        '2 Guests',
        '2 Beds',
        '1 bathroom',
        'Private half bath'
    ],
    availability : true,
    price: "$" + 190 + ' /night',
    review: 4.95 + ' (1268 reviews)'
};

console.log(airBnbPrice.attractions) // DOT NOTATION
console.log(airBnbPrice.attractions[3]) // DOT NOTATION
console.log(airBnbPrice.review) //DOT NOTATION
console.log(airBnbPrice['price']) // BRACKET NOTATION



//FOR LOOP PRACTICE

// let cardsNew = [7,3,9,4];

// for (let i = 0; i < cardsNew.length; i++) {
//     console.log(cardsNew[i]);
// }


// for (let i = 1; i <= 1; i++) {
//     console.log(i + ' car available');   
// };

// for (let i = 2; i <= 5; i++){
//     console.log(i + ' cars available')
// };

// for (let i = 0; i < 101; i+=10) {
//     console.log(i);
// };


// let greetingEl = document.getElementById('cardsNew');
// let sentence = ['Hello', 'My', 'Name', 'is', 'Muadh'];


// for (let i = 0; i < sentence.length; i++) {
//     console.log(sentence[i]);
//     greetingEl.textContent += sentence[i] + ' ';
    
// };






//ARRAY PRACTICE
// let myCareerPath = [
//     'Certificate at IIHT',
//     'Projects from The frontEnd Mentor',
//     'currently a scrimba student',
//     'currently a freecodecamper',
//     'currently in love with FIFA',
//     'Love is really good'
// ];

// for (let i = 0; i < myCareerPath.length; i++) {
//     console.log(myCareerPath[i])
// }



// let myself = [
//     'I have been working on myself lately and i am seeing great improvements',
//     'What and what have you been doing?',
//     'I have been taking my kewu seriously and coding simultaneously',
//     "Oh, that's great",
//     'Yeah, I know',
//     'When are you coming?'
// ];

// for (let i = 0; i < myself.length; i++) {
//     console.log(myself[i]);
// };

// myself.push('what did you learn last in nahw?');
// myself.push('I learnt Ajaazul kalaam(Types of kalam(words)');
// myself.push('Today i learnt some new words like halaka, haana, indama, tufiya');
// myself.pop();
// console.log(myself);



// PRACTICE TIME
let personObject = {
    name: 'Adeyemi Muadh',
    age: 19,
    country: 'Nigeria'
};

function logData() {
     let personal = personObject.name + ' is ' + personObject.age + 
     ' years old and live in ' + personObject.country;
     console.log(personal)   
};

logData();


//PRACTICE TWO

let age = 65

function fullTrainPrice() {
    if(age < 6 ){
        console.log(`Your Train ride is freee!! Welcome Aboard!!`);
    } else if (age < 18) {
        console.log(`You have a child discount! Welcome Aboard!!`)
    } else if(age < 26) {
        console.log(`You have a student price discount! Welcome Aboard!!`)
    } else if(age < 66) {
        console.log(`You have to pay the full price! No discount!! Welcome Aboard!!`)
    } else{
        console.log(`You have a senior citizen discount! Welcome Aboard!!`)
    }
}

fullTrainPrice();


//PRACTICE THREE
let largeCountries = ['India', 'china', 'USA', 'pakistan', 'indonesia'];

console.log('The five largest countries in the world:')
for (let i = 0; i < largeCountries.length; i++) {
    console.log("-" + largeCountries[i]);
    
}

let smallCountries = ['London','Nigeria','Indonesia','Moscow','West Germany'];


for (let i = 0; i < smallCountries.length; i++) {
    console.log(smallCountries[i]);
};

console.log(smallCountries.pop());
console.log(smallCountries.push('Ghana'));
console.log(smallCountries.shift());
console.log(smallCountries.unshift('Togo'));
console.log(smallCountries);

let date = 13;
let day = 'Friday'

if (date === 13 && day === 'Friday') {
    console.log('Oh no!!! I am scared!!')
} else {
    console.log('Try the movie out bro!!!!')
};


let game = ['rock', 'paper', 'scissors'];

function trickyGame() {
    let gamee = Math.floor(Math.random() * 3);
    return game[gamee];
};




trickyGame()
console.log( trickyGame() )


//SORTING FRUITS

// let fruits = ['Oranges', 'Apple','Oranges', 'Apple','Oranges'];

// let applesEl = document.getElementById('apples-el');
// let orangesEl = document.getElementById('oranges-el');


// function fruitShelf() {
//     for (let  i = 0; i < fruits.length; i++) {
//        if (fruits[i] === 'Oranges') {
//         orangesEl.textContent = 'ORANGES';
//        } else {
//         applesEl.textContent = 'APPLES'
//        }
//     };
// }
// fruitShelf();
// console.log(fruitShelf());
















// let age = 21;

// if(age < 21) {
//     console.log("You cannot enter the club!!")
// } else {
//     console.log('Welcome!!!!')
// }

// let giftFromKing = 100;

// if (giftFromKing < 100) {
//     console.log('Not Eligble!!!')
// } else if (giftFromKing === 100) {
//     console.log("Here's your birthday card from the king!")
// } else {
//     console.log('Not Eligible, you have already got one')
// };