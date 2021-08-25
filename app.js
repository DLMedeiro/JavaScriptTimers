// COUNTDOWN

// Write a function called countdown that accepts a number as a parameter and every 1000 milliseconds decrements the value and console.logs it. Once the value is 0 it should log “DONE!” and stop.

// countDown(4);
// 3
// 2
// 1
// "DONE!"


// ANSWER
    // function countdown(num) {
    //     setInterval (function () {
    //         if (num > 0) {
    //             console.log(num--)
    //         } else if (num === 0) {
    //             console.log("Done!");
    //             num--
    //         }
    //     }, 1000)
    // }



// RANDOM GAME

// Write a function called randomGame that selects a random number between 0 and 1 every 1000 milliseconds and 
// each time that a random number is picked, add 1 to a counter.
// If the number is greater than .75, stop the timer and console.log the number of tries it took before we found a number greater than .75.

// ANSWER
    // let count = 0;
    // function randomGame () {
    //     count++
    //     let num = Math.random();
    //     console.log(`num = ${num}, count = ${count}`)
    //     if (num > .75) {
    //         console.log(`It took ${count} tries to reach ${num}`)
    //         clearInterval(timer);
    //     }
    // }

    // let timer = setInterval(randomGame, 1000);
