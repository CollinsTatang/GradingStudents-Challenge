/*
 * Complete the 'gradingStudents' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY grades as parameter.
 */

function gradingStudents(grades) {
    var multipleToRoundTo = 5;
    var numberToRoundAt = 2;
    for(var i = 0; i < grades.length; i++) {
      if(grades[i] >= 38 && grades[i] % multipleToRoundTo > numberToRoundAt) {
        grades[i] = grades[i] + (multipleToRoundTo - (grades[i] % multipleToRoundTo));
      }
    }
    return grades;
  }