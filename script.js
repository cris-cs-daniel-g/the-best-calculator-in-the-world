// Create an empty list to store past calculations
let history = [];

// Function to add two numbers
function add(x, y) {
    return x + y;
}

// Function to subtract two numbers
function subtract(x, y) {
    return x - y;
}

// Function to multiply two numbers
function multiply(x, y) {
    return x * y;
}

// Function to divide two numbers
function divide(x, y) {
    if (y === 0) {
        return "Cannot divide by 0";
    }
    return x / y;
}

// Function to clear ONLY inputs and result (NOT history)
function clearAll() {
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    document.getElementById("result").innerText = "Result: ";
}

// Main function that runs when a button is clicked
function calculate(operator) {

    // Convert input values to decimal numbers
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);

    //  Check if input is valid
    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById("result").innerText = "Please enter valid numbers";
        return;
    }

    let result;

    if (operator === "+") {
        result = add(num1, num2);
    } else if (operator === "-") {
        result = subtract(num1, num2);
    } else if (operator === "*") {
        result = multiply(num1, num2);
    } else if (operator === "/") {
        result = divide(num1, num2);
    }

    //  Fix long decimal problem 
    if (typeof result === "number") {
        result = parseFloat(result.toFixed(6)); // keep up to 6 decimal places
    }

    // Show result
    document.getElementById("result").innerText = "Result: " + result;

    // Save to history
    let record = num1 + " " + operator + " " + num2 + " = " + result;
    history.push(record);
}

// Function to show all past calculations
function showHistory() {
    let list = document.getElementById("history");
    list.innerHTML = "";

    for (let i = 0; i < history.length; i++) {
        let item = document.createElement("li");
        item.innerText = history[i];
        list.appendChild(item);
    }
}