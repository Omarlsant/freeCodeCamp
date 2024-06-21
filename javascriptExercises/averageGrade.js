function getAverage(scores) {
    let sum = 0;

    for (const score of scores) {
        sum = sum + score;
    }
    return sum / scores.length;
}

function getGrade(score) {
    if (score === 100) {
        return "A++";
    } else if (score >= 90) {
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

function hasPassingGrade(score) {
    return getGrade(score) !== "F";
}

function studentMsg(totalScores, studentScore) {
    let average = getAverage(totalScores);
    let grade = getGrade(studentScore);
    let message = "Class average: " + average + ". Your grade: " + grade + ". ";
    
    if (hasPassingGrade(studentScore)) {
      message = message + "You passed the course.";
    } else {
      message = message + "You failed the course.";
    }
    return message;
  }