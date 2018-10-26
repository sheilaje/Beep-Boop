function checkNumber(UInput){
  var inputArray = UInput.split("");
  var remainder = UInput % 3 === 0;
  var includeszero = inputArray.includes("0");
  var includesOne = inputArray.includes("1");
  var newArray = [];

  console.log(remainder);
  if(remainder === true && UInput >0 ){
    newArray.push("I'm sorry. I'm afraid I can't do that.");
  }else
  if(includeszero === true && includesOne === false){
    newArray.push("Beep!");
  }else
    if (includesOne === true){
      newArray.push("Boop !");
    }else
    if(UInput >= 0 && includeszero === false && includesOne === false && remainder === false)
     {
      optionFourResult=optionfour(UInput);
      newArray.push(optionFourResult);
    }else
    {
      newArray.push()
    }

    return newArray;
  }
function optionfour(UInput)
{
  resultArray = [];
  for(i=0; i<=UInput; i++)
  {
    resultFour=checkNumber(i);
    resultArray.push(" " + resultFour);
  }
  return resultArray;
}

$(document).ready(function(){
  $("#formid").submit(function(event){
    event.preventDefault();
    var UserInput = $("#uinput").val();
    var result=[];
    result = checkNumber(UserInput);
      $("#result").text(result);

  });
});
