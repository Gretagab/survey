$(document).ready(function(){
  $("form#stress-quiz").submit(function(event){
    event.preventDefault();


    var resultsymptom = $("input:checkbox[name=symptom]:checked");
    console.log(resultsymptom.length);
    if (resultsymptom.length > 4){
      $('#suggestion1').show();
    };

    var resultsymptom = $("input:checkbox[name=symptom]:checked");
    var resultissue = $("input:checkbox[name=issue]:checked");
    // console.log(resultsymptom.length);
    if ((resultsymptom.length > 2)&&(resultissue.length > 3)){
      $('#suggestion2').show();
    };
    var resultsymptom = $("input:checkbox[name=symptom]:checked");
    var resultcoping = $("input:checkbox[name=coping]:checked");
    // console.log(resultsymptom.length);
    if ((resultsymptom.length < 3)&&(resultcoping.length > 3)){
      $('#suggestion3').show();
    };

  });
});
