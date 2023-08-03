let max = prompt("Enter the maximun number");
let random = Math.floor(Math.random() * max) + 1;
let guess = prompt("Guess the Number");
while (true) {
  if (guess == "quit") {
    console.log("Quit");
    break;
  }
  if (guess == random) {
    console.log("Congrats !! You are right! The Number is", random);
    break;
  } else if (guess < random) {
    guess = prompt("Hint : Your Guess was too small please try again ");
  } else if (guess > random) {
    guess = prompt("Hint : Your Guess was too big please try again ");
  }
}
