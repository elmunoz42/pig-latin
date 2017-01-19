// ////////BE////////
var userInput;
var wordArray;
var firstIsVowel;
var vowelIndex = [];
var wordLength;
var yetAnotherVariable = [];
var vowels = ["a","e","i","o","u"];
var anslatortray =function(userInput){
  wordArray = userInput.split("");
  // var userInput = prompt("userInput");
  var result;
  firstIsVowel = false;
  for (var i=0; firstIsVowel === false; i += 1) {
    if (wordArray[0] === vowels[i]) {

      firstIsVowel = true;
      return wordArray.toString() + "ay";
    } else if (wordArray[0] != vowels[i]){
      alert("doom!!!!");
      wordLength = wordArray.length;
      alert ("wordLength" + wordLength);
      // yetAnotherVariable =
      wordArray = wordArray.push("c");
      // wordArray = wordArray.splice(0,1);
      alert ("wordArray " + wordArray);
      wordArray = wordArray.toString();
      return wordArray + "ay";

    }
  }

}
  // vowels.forEach(function(vowel){
    // wordArray = userInput.split("");
  //   console.log(wordArray);
  //   firstVowel = wordArray.indexOf(vowel);
  //   console.log(firstVowel);
  //   // return firstVowel;
  // });
//
//   if (firstVowel === 0) {
//     result = userInput + "ay";
//   } else {
//     var result = userInput;
//   }
//     return result;
// };

// // var cat=["c","a","t"]
// // cat.indexOf("a");
//
/////////UI/////////
$(document).ready(function(){
  // alert("Blah");
  $("#user-input").submit(function(event){
    // var userInput = prompt("userInput");
    var userInput = $("input#text-input").val();
    var userOutput = anslatortray(userInput);
    // userOutput = userOutput.join("");
    $("p#text-output").text(userOutput);
    // alert("userInput: " + userInput);//debugging
    // alert("userOutput: " + userOutput);//debugging
    // alert("wordArray: " + wordArray);//debugging
    // alert("firstVowel: " + firstVowel);//debugging
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
