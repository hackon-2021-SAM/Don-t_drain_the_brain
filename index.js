function myfunction()
{
  var total = 0;
  /*for(var i=0;i<10;i++)
  {
    var r = "q"+num.toString(i+1)
    total = total + parseInt(document.quiz.r.value);
  }*/
  //var i = 1;
  //var ques = 'q'+i;
  total = total + parseInt(document.quiz.q1.value)+ parseInt(document.quiz.q2.value)+ parseInt(document.quiz.q3.value)+parseInt(document.quiz.q4.value)+parseInt(document.quiz.q5.value)+ parseInt(document.quiz.q6.value)+ parseInt(document.quiz.q7.value)+ parseInt(document.quiz.q8.value)+ parseInt(document.quiz.q9.value)+ parseInt(document.quiz.q10.value);
  if (Number.isNaN(total)){
    return -1;
  }
  return total;

}
