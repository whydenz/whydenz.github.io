// Initialize the game
let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

document.getElementById("submitGuess").addEventListener("click", function () {
    let userGuess = parseInt(document.getElementById("guess").value);

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        Swal.fire({
            icon: 'error',
            title: 'Invalid Input',
            text: 'Please enter a number between 1 and 100!'
        });
        return;
    }

    attempts++;
    
    if (userGuess === randomNumber) {
        Swal.fire({
            icon: 'success',
            title: 'Congratulations!',
            text: `You guessed the correct number in ${attempts} attempts!`,
            confirmButtonText: 'Play Again'
        }).then(() => {
            // Reset the game
            randomNumber = Math.floor(Math.random() * 100) + 1;
            attempts = 0;
            document.getElementById("guess").value = '49';
        });
    } else if (userGuess < randomNumber) {
        Swal.fire({
            icon: 'info',
            title: 'Too Low!',
            text: 'Try guessing a higher number.'
        });
    } else {
        Swal.fire({
            icon: 'info',
            title: 'Too High!',
            text: 'Try guessing a lower number.'
        });
    }
});
