//True Fullmer
//Group 1-11
//This is a function to calculate the grade based on numbers given by the user
function gradeCal() {
    //setting up my variables
    var numberGrade;
    var letterGrade;
    var i = 0;

    //Are things different
    //I do not know if my code is changing!

    //Get the values entered into the HTML via jquery and then calculate the grade
    numberGrade = ($("#Assignments").val() * 0.5)
        + ($("#GroupProjects").val() * 0.1)
        + ($("#Quizzes").val() * 0.1)
        + ($("#Exams").val() * 0.2)
        + ($("#Intex").val() * 0.1);
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

    //check if inputs are empty
    if ($("#Assignments").val() === "" || $("#GroupProjects").val() === "" || $("#Quizzes").val() === "" || $("#Exams").val() === "" || $("#Intex").val() === "") {
        alert("Please, make sure that all feilds are entered");
        ++i
    }

    //check if inputs are between 0 and 100
    if (($("#Assignments").val() > 100 || $("#Assignments").val() < 0) || ($("#GroupProjects").val() > 100 || $("#GroupProjects").val() < 0) || ($("#Quizzes").val() > 100 || $("#Quizzes").val() < 0) || ($("#Exams").val() > 100 || $("#Exams").val() < 0) || ($("#Intex").val() > 100 || $("#Intex").val() < 0)) {
        alert("Please, make sure that the numbers intputed are between 0 and 100");
        ++i
    }

    //Give a message to the user
    if (i === 0) {
        alert(`With those numbers, the final grade would be ${numberGrade}% which is an ${letterGrade}`);
    }
}