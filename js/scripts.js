//Business Logic
function checkNumber(UInput){
  var newArray = [];
  var inputArray = UInput.split("");
  var remainder = UInput % 3 === 0;
  var includeszero = inputArray.includes("0");
  var includesOne = inputArray.includes("1");

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
  {
    for(i=0; i<=UInput; i++){
      //var finalresult = checkNumber(UInput);
      if(i%3 === 0 && i > 0 ){
        newArray.push("I'm sorry. I'm afraid I can't do that.");
      }else
      if(i=== 0){
        newArray.push("Beep!");
      }else
      if (i === 1){
        newArray.push("Boop !");
      }else{
        newArray.push(i);
        console.log(newArray);
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
