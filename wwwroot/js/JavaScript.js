//True Fullmer
//Group 1-11
//This is a function to calculate the grade based on numbers given by the user
function gradeCal() {
    //setting up my variables
    var numberGrade;
    var letterGrade;

    //Calculating the grade
    numberGrade = (document.getElementById("assignments").value * 0.5)
        + (document.getElementById("groupProjects").value * 0.1)
        + (document.getElementById("quizzes").value * 0.1)
        + (document.getElementById("exams").value * 0.2)
        + (document.getElementById("intex").value * 0.1);
    numberGrade = numberGrade.toPrecision(3);

    //Lets find the letter grade
    if (numberGrade > 94) {
        letterGrade = "A";
    }
    else if (numberGrade > 90) {
        letterGrade = "A-";
    }
    else if (numberGrade >= 87) {
        letterGrade = "B+";
    }
    else if (numberGrade >= 84) {
        letterGrade = "B";
    }
    else if (numberGrade >= 80) {
        letterGrade = "B-";
    }
    else if (numberGrade >= 77) {
        letterGrade = "C+";
    }
    else if (numberGrade >= 74) {
        letterGrade = "C";
    }
    else if (numberGrade >= 70) {
        letterGrade = "C-";
    }
    else if (numberGrade >= 67) {
        letterGrade = "D+";
    }
    else if (numberGrade >= 64) {
        letterGrade = "D";
    }
    else if (numberGrade >= 60) {
        letterGrade = "D-";
    }
    else {
        letterGrade = "E";
    }

    //Give a message to the user
    alert(`With those numbers, the final grade would be ${numberGrade}% which is an ${ letterGrade}`);
}