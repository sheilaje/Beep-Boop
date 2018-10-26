function checkNumber(iArray, rder){
  if(iArray.includes('0')){
    return "Beep !";
  }else {
    if(iArray.includes('1')){
      return "Boop !"
    }else {
      if(rder === 0)
      {
        return "I'm sorry. I'm afraid I can't do that.";
      }
    }
  }
}

$(document).ready(function(){
  $("#formid").submit(function(event){
    event.preventDefault();
    var UserInput = $("#uinput").val();
    var remainder = UserInput % 3;
    //alert(remainder);
    var inputArray = UserInput.split("");
    inputArray.forEach(function(inputArray){
      //var result=changedsentence(inputArray);
      var result=checkNumber(inputArray , remainder);
      $("#result").text(result);
    });

  });
});
