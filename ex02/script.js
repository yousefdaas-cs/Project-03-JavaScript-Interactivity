const textDisplay = document.getElementById("text-display");
const changeTextBtn = document.querySelector("#change-text-btn");

const statusCard = document.getElementById("status-card");
const toggleStyleBtn = document.querySelector("#toggle-style-btn");

changeTextBtn.addEventListener("click", function() {
    textDisplay.textContent = "The text has been successfully updated in real-time!";
});

toggleStyleBtn.addEventListener("click", function() {
    if (statusCard.classList.contains("active")) {
        statusCard.classList.remove("active");
        statusCard.textContent = "Status Check (Inactive)";
        statusCard.style.fontSize = "16px";
    } else {
        statusCard.classList.add("active");
        statusCard.textContent = "Status Check (Active!)";
        statusCard.style.fontSize = "18px";
    }
});
