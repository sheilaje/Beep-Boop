function checkNumber(iArray){
  if(iArray.includes('0')){
    //alert("Beep");
    //$("p#output").text( "Beep");
    return "Beep !";
  }
}

$(document).ready(function(){
  $("#formid").submit(function(event){
    event.preventDefault();
    var UserInput = $("#uinput").val();
    var inputArray = UserInput.split("");
    inputArray.forEach(function(inputArray){
      //var result=changedsentence(inputArray);
      var result=checkNumber(inputArray);
      $("#result").text(result);
    });

  });
});
