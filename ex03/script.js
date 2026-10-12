let count = 0;

const counterValue = document.getElementById("counter-value");
const decrementBtn = document.getElementById("decrement-btn");
const resetBtn = document.getElementById("reset-btn");
const incrementBtn = document.getElementById("increment-btn");

function updateDisplay() {
    counterValue.textContent = count;

    if (count > 0) {
        counterValue.style.color = "green";
    } else if (count < 0) {
        counterValue.style.color = "red";
    } else {
        counterValue.style.color = "black";
    }
}

decrementBtn.addEventListener("click", function() {
    count = count - 1;
    updateDisplay();
});

incrementBtn.addEventListener("click", function() {
    count = count + 1;
    updateDisplay();
});

resetBtn.addEventListener("click", function() {
    count = 0;
    updateDisplay();
});
