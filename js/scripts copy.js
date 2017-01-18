////////BE////////
var userInput;
var anslatortray =function(userInput){
  var userInput = prompt("userInput");
  var result = "atcay";
  var wordArray = userInput.split("");
  // alert("wordArray: " + wordArray);
  var firstVowel = wordArray.indexOf("a");
  if (firstVowel === 0) {
    // result = userInput + "ay";
  } else {
    var result = userInput;
  }
    return userInput;
}

// var cat=["c","a","t"]
// cat.indexOf("a");






/////////UI/////////
$(document).ready(function(){
  alert("Blah");
  $("#user-input").submit(function(event){

    // var userInput = $("input#text-input").val();
    // alert("userInput: " + userInput);
    alert("wordArray: " + wordArray);
    alert("firstVowel: " + firstVowel);

    var userOutput = anslatortray(userInput);
    $("p#text-output").text(userOutput);
    // alert("userOutput: " + userOutput);
    event.preventDefault();
  });











});
