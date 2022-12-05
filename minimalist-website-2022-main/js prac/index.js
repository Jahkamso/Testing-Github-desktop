// ==== Guessing Game ====

const answer = Math.floor(Math.random() * 10 + 1)
let guessess = 0;

document.getElementById("submitButton").onclick = function () {
    
    let guess = document.getElementById("guessField").value;
    guessess += 1;

    if (guess == answer) {
        alert(`${answer} is the #. It took you ${guessess} guessess`);
    }
    else if (guess < answer) {
        alert("Not quite there yet!");
    }
    else {
        alert("Too large");
    }


}








// while loop = repeat code
// while some condition is true
// potentially infinite

// do while loop = do something,
// then check the condition,
// repeat if condition is true

// for loop = repeat some code a
// certain amount of times

// break = breaks out of a loop entirely
// continue = skip an iteration of a loop


// console.log(`Hello ${userName}`);
// console.log(`You have ${items} items added to your cart`);
// console.log(`Your total is $${total}`);