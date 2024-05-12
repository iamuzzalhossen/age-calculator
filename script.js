let userInput = document.getElementById("date");
userInput.max = new Date().toISOString().split("T")[0];
let userAge = document.getElementById("userAge");

function calculateAge(){
    if (userInput.value === "") {
        userAge.innerHTML = "Please enter your <span>Date of Birth</span> first!";
        return;
    }

    let birthDate = new Date(userInput.value);
    let currentDate = new Date();

    let days = currentDate.getDate() - birthDate.getDate();
    let months = currentDate.getMonth() - birthDate.getMonth();
    let years = currentDate.getFullYear() - birthDate.getFullYear();

    if (months < 0 || (months === 0 && days < 0)) {
        years--;
        months = 12 + months;
    }

    if (days < 0) {
        months--;
        days += getDaysInMonth(birthDate.getFullYear(), birthDate.getMonth() + 1);
    }

    userAge.innerHTML = `You are <span>${years} Years</span>, <span>${months} Months</span>, and <span>${days} Days</span> old!`;
}

function getDaysInMonth(year, month){
    return new Date(year, month, 0).getDate();
}
