// ////////BE////////
var userInput;
var wordArray;
var thereIsVowel = false
var vowelIndex = [];
var remainderLength;
var consonant = [];
var consonantString;
var pigArray = [];

var anslatortray =function(userInput){

  wordArray = userInput.split("");

  /// for words starting with vowels
  if (wordArray[0] === "a" | wordArray[0] ==="e" | wordArray[0] === "i" | wordArray[0] === "o" | wordArray[0] === "u") {
    pigArray = wordArray.push("ay");
  }
  /// for words starting with consonants
  else {
    while (
      thereIsVowel === false
    ) do { var i = 0
      if (wordArray[i] === "a" | wordArray[i] ==="e" | wordArray[i] === "i" | wordArray[i] === "o" |      wordArray[i] === "u") {
        consonant = consonant.push(wordArray[i]); /// every time it's not a vowel add to our array of consonants at the beginning
        thereIsVowel = true;
      }
      else {
        i += 1;
      }
    }
    // consonant = wordArray.slice(0,i-1); /// slice from index 0 through where the first vowel was detected
    //consonantLength = i; /// consonant length is equal to the index where the vowel was detected
    consonantString = consonant.join(""); /// make a string out of consonant array
    remainder = wordArray.splice(0,i-1); /// splice from index 0 through where the first vowel was detected
    remainderLength = remainder.length;  ///  take the remaining length of the array
    pigArray = wordArray.splice(remaniderLength,0,consonantString);    /// splice from remainderLength and add consonant in string form.
    pigArray = wordArray.push("ay")
  }

  // else if (wordArray[j] === "q" && wordArray[j+1] === "u") {
  //
  // }

  // // var userInput = prompt("userInput");
  // var result;
  // firstIsVowel = false;
  //   for (var i = 0; i <= 4; i += 1) {
  //     if (wordArray[0] === vowels[i]) {
  //       do {
  //         firstIsVowel = true;
  //       }
  //
  // while (firstIsVowel === false)
  // for (var i = 0; i <= 4; i += 1) {
  //   if (wordArray[0] === vowels[i]) {
  //
  //     firstIsVowel = true;
  //     return wordArray.toString() + "ay";
  //   } else if (wordArray[0] != vowels[i]){
  //     alert("doom!!!!");
  //     wordLength = wordArray.length;
  //     alert ("wordLength" + wordLength);
  //     // yetAnotherVariable =
  //     wordArray = wordArray.push("c");
  //     // wordArray = wordArray.splice(0,1);
  //     alert ("wordArray " + wordArray);
  //     wordArray = wordArray.toString();
  //     return wordArray + "ay";
  //
  //   }
  // }

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
  alert("Blah");
  $("#user-input").submit(function(event){
    var userInput = prompt("userInput");
    // var userInput = $("input#text-input").val();
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
