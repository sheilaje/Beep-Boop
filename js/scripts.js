// checkNumber.forEach (function(iArray)
// {
// //for(int i = 0; i <= userArray.length-1 ; 1++){
//   if(iArray.includes('0')){
//     $("p#output").text( "Beep");
//   }
// });

$(document).ready(function(){
  $("form#formid").submit(function(event){
    event.preventDefault();
    //user-input
    var inputNumber = $("#inputNo").val();
    var inputArray =inputNumber.split("");
    console.log(inputArray);
    //checkNumber(inputArray);
    inputArray.forEach(function(iArray){
      if(iArray.includes('0')){
        //alert("Beep");
        $("p#output").text( "Beep");
      }
    });
  });
});

  // checkNumber.forEach (function(iArray)
  // {
  // //for(int i = 0; i <= userArray.length-1 ; 1++){
  //   if(iArray.includes('0')){
  //     $("p#output").text( "Beep");
  //   }
  // });
//});
