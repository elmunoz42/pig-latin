// ////////BE////////
var userInput;
var wordArray = [];
var firstVowel;
var anslatortray =function(userInput){
  // var userInput = prompt("userInput");
  var result = "atcay";
  wordArray = userInput.split("");

  firstVowel = wordArray.indexOf("a");
  if (firstVowel === 0) {
    result = userInput + "ay";
  } else {
    var result = userInput;
  }
    return result;
};

// // var cat=["c","a","t"]
// // cat.indexOf("a");
//
/////////UI/////////
$(document).ready(function(){
  // alert("Blah");
  $("#user-input").submit(function(event){
    // var userInput = prompt("userInput");
    var userInput = $("input#text-input").val();
    alert("userInput: " + userInput);//debugging
    var userOutput = anslatortray(userInput);
    $("p#text-output").text(userOutput);
    alert("userOutput: " + userOutput);//debugging
    alert("wordArray: " + wordArray);//debugging
    alert("firstVowel: " + firstVowel);//debugging
    event.preventDefault();
  });




});
//
//
//
//
//
// /////////UI/////////
// $(document).ready(function(){
//   alert("Blah");
//   $("#user-input").submit(function(event){
//
//     var userInput = $("input#text-input").val();
//     // alert("userInput: " + userInput);
//     alert("wordArray: " + wordArray);
//     alert("firstVowel: " + firstVowel);
//
//     var userOutput = anslatortray(userInput);
//     $("p#text-output").text(userOutput);
//     // alert("userOutput: " + userOutput);
//     event.preventDefault();
//   });
//
// });

// ////////BE////////
// var userInput;
// var anslatortray =function(userInput){
//   if (userInput === "a") {
//     var result = userInput + "ay";
//   }  else {
//     result = userInput;
//   }
//   return result;
// }
//
