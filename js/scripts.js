//Business Logic
function checkNumber(uInput){
  var newArray = [];
  if(uInput===""){
    newArray.push("please enter a number");
  }
  else
  {
    for(i=0; i<=uInput; i++){
      if(i%3 === 0 && i > 0 ){
        newArray.push("\"I'm sorry. I'm afraid I can't do that.\"");
      }
      else{
        var x = i.toString();
        console.log(x);
        var inputArray=[];
        inputArray= x.split('');
        console.log(inputArray);
        if (inputArray.includes("1")){
          newArray.push("\"Boop!\"");
        }else
        if (inputArray.includes("0")){
          newArray.push("\"Beep!\"");
        }
        else{
          newArray.push(i);
          console.log(newArray);
        }
      }
    }
  }
  return newArray;
}
//user interface logic
$(document).ready(function(){
  $("#formid").submit(function(event){
    event.preventDefault();
    var UserInput = $("#uinput").val();
    var result=[];
    result = checkNumber(UserInput);
    $("#result").text(result);

  });
});
