// Leap year checker 
// function leapYearChecker(year) {
//     if ( year / 400 === 0) {
//         return true;
//     } else if (year / 100 !== 0 ) {
//         return false; 
//     } else if (year / 4 === 0) {
//         return true;
//     } else {
//         return true;
//     }
// }

// year = 2024;
// leapYearChecker(year);

function leapYearChecker(year) {
    if ( year % 400 === 0) {
        return true;
    } else if (year % 100 === 0 ) {
        return false; 
    } else if (year % 4 === 0) {
        return true;
    } else {
        return false;
    }
}

year = 2021;
leapYearChecker(year);


// Age checker for ticket 
const ticketChecker = () => {
    let age = Numbert(prompt("Input your Age!!!"))

    if (age <= 12) {
        alert(`You are ${age} years old and your Tickek price is $10`)
    } else if (age >= 13 && age <= 17) {
        alert(`Your are ${age} years old and your Ticket price is $15`)
    } else {
        alert(`Your are ${age} years old and your Ticket price is $20`)
    }
}
ticketChecker()

// Weather cloth advisor app 
const clothAdvisor = () => {
    let weather = prompt("What is the weather outside? is it clear, cloudy or sunny").toLowerCase();
    let isRaining = prompt("Is it Raining? True or false").toLowerCase() === "true";

    if (weather === "sunny" && isRaining === false) {
        alert("Wear a light cloth to avoid sweating");
    } else if (weather === "cloudy" && isRaining === false) {
        alert("Wear a light clothe but take an umbrella");
    } else if (weather === "clear" && isRaining === false) {
        alert("wear a light cloth");
    } else if (weather === "cloudy" && isRaining === true) {
        alert("Wear a sweater and stay indoor");
    } else if (weather === "clear" && isRaining === true) {
        alert("Wear a covered clothing and when you step out take an umbrella")
    } else {
        alert("Stay indoor");
    }
}

// clothAdvisor()