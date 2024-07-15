document.addEventListener('DOMContentLoaded', () => {
    // Create and call a JavaScript function that keeps track of the current day and time
    function displayDateTime() {
        const now = new Date();
        const dateTimeString = now.toLocaleString();
        alert('Current date and time: ' + dateTimeString);
    }

    displayDateTime();

    // Send an alert using JavaScript
    alert('Welcome to the Tea Encyclopedia!');

    // Use a Math method
    const randomNumber = Math.random();
    console.log('Random number: ' + randomNumber);

    // Delay one command or run a command at a specified interval
    setTimeout(() => {
        console.log('This message is displayed after 3 seconds.');
    }, 3000);

    // Convert between a number and a text
    const num = 42;
    const numAsString = num.toString();
    console.log('Number as text: ' + numAsString);
    const textAsNum = parseInt(numAsString);
    console.log('Text as number: ' + textAsNum);

    // Include a countdown function
    function countdown(seconds) {
        let remainingSeconds = seconds;
        const interval = setInterval(() => {
            console.log(remainingSeconds);
            if (remainingSeconds <= 0) {
                clearInterval(interval);
                console.log('Countdown finished');
            }
            remainingSeconds--;
        }, 1000);
    }

    countdown(10);
});
