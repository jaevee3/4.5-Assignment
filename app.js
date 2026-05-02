let rawInputName = "   Jesse   "; 
let testScore = 88.6789;
let letterGrade = "B";
let passStatus = "";


let cleanName = rawInputName.trim().toUpperCase(); 

let roundedScore = testScore.toFixed(1); 


if (roundedScore >= 60) {
    passStatus = "Passed";
} else {
    passStatus = "Failed";
}


let feedback = "";

switch (letterGrade) {
    case "A":
        feedback = "Great job!";
        break;
    case "B":
        feedback = "Nice!";
        break;
    case "C":
        feedback = "You can do better.";
        break;
    case "D":
        feedback = "Needs Work.";
        break;
    case "F": 
        feedback = "Failed.";
        break;
    default:
        feedback = "Grade pending.";
}


let finalReport = "Student: " + cleanName + " | Score: " + roundedScore + " (" + passStatus + "). Teacher Notes: " + feedback;


console.log(finalReport);