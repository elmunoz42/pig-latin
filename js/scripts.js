////////BE////////
var userInput;
var anslatortray =function(userInput){
  if (userInput === "a") {
    var result = userInput + "ay";
  }  else {
    result = userInput;
  }
  return result;
}





/////////UI/////////
$(document).ready(function(){
  // alert("Blah");
  $("#user-input").submit(function(event){
    // var userInput = prompt("userInput");
    var userInput = $("input#text-input").val();
    // alert("userInput: " + userInput);
    var userOutput = anslatortray(userInput);
    $("p#text-output").text(userOutput);
    // alert("userOutput: " + userOutput);
    event.preventDefault();
  });











});
