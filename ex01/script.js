function calculateGrade(score) {
    if (typeof score !== "number" || score < 0 || score > 100) {
        return "Invalid Input";
    }

    if (score >= 90) {
        return "A";
    } else if (score >= 80) {
        return "B";
    } else if (score >= 70) {
        return "C";
    } else if (score >= 60) {
        return "D";
    } else {
        return "F";
    }
}

function checkAccess(age, hasTicket) {
    if (age >= 18 && hasTicket === true) {
        return true;
    } else {
        return false;
    }
}

console.log("--- Testing calculateGrade ---");
console.log("Score 100 (Upper Boundary):", calculateGrade(100));
console.log("Score 90 (Grade A Boundary):", calculateGrade(90));
console.log("Score 89 (Grade B Boundary):", calculateGrade(89));
console.log("Score 0 (Lower Boundary):", calculateGrade(0));
console.log("Score -5 (Negative/Invalid):", calculateGrade(-5));
console.log("Score 105 (Over limit/Invalid):", calculateGrade(105));
console.log("Score '90' (String/Invalid):", calculateGrade("90"));

console.log("\n--- Testing checkAccess ---");
console.log("Age 20, Has Ticket (Adult Access):", checkAccess(20, true));
console.log("Age 18, Has Ticket (Age Boundary):", checkAccess(18, true));
console.log("Age 17, Has Ticket (Too Young):", checkAccess(17, true));
console.log("Age 25, No Ticket:", checkAccess(25, false));
console.log("Age 15, No Ticket:", checkAccess(15, false));
