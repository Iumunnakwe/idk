document.addEventListener("DOMContentLoaded", () => {
    //generate random numbers
    let firstNumber = parseInt(Math.random() * 10);
    let secondNumber = parseInt(Math.random() * 10);

    //get the total
    let total = firstNumber + secondNumber;

    //display numbers on the canvas
    let primary = document.getElementById('primary-number');
    primary.innerHTML = `<p>${firstNumber}</p>`;

    let secondary = document.getElementById('secondary-number');
    secondary.innerHTML = `<p>${secondNumber}</p>`;

    //get guess from user
    let button = document.getElementById('btn');

    button.addEventListener('click', function () {
        let guess = document.getElementById('guess').value;
        guess = Number(guess);
        //check answer
        if (guess === total) {
            alert('Correct');
            window.location.reload();
        } else {
            alert('Sorry. Incorrect. The correct answer was ' + total + '.');
            window.location.reload();
        }
    });

    //rest of your code...

    function setGame() {
        // Rest of your setGame function...
    }

    function selectNumber() {
        // Rest of your selectNumber function...
    }

    function selectTile() {
        // Rest of your selectTile function...
    }

    function connectPossible() {
        // Rest of your connectPossible function...
    }

    function sunray() {
        // Rest of your sunray function...
    }

    //window resize and canvas donot streach
    window.addEventListener('resize', function () {
        // Rest of your resize event listener...
    });

    //animation loop
    function animate() {
        // Rest of your animate function...
    }

    //mouse out event
    window.addEventListener('mouseout', function () {
        // Rest of your mouseout event listener...
    });

    getParticles();
    animate();

    // Additional code...
});

function playMusic() {
    const music = new Audio(
        "https://s3-us-west-2.amazonaws.com/s.cdpn.io/161676/music.mp3"
    );

    music.addEventListener("canplay", () => {
        music.play();
    });
}
