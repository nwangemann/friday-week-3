//Business Logic

function evaluator(arrayItem) {
  var result = "";
  if ((arrayItem).toString().includes("3")) {
    return result = " " + "I'm sorry, Dave. I'm afraid I can't do that.";
  } else if ((arrayItem).toString().includes("2")) {
    return result = " " + "Boop!";
  } else if ((arrayItem).toString().includes("1")) {
    return result = " " + "Beep!";
  } else {
    return result = arrayItem;
  }
}

function arrayMaker(elementCount) {
  for (var counter = 1; counter <= elementCount; counter++) {
    if(counter !== elementCount) {
      arrayBase.push(counter);
    } else {
      return
    }
  }
}

function nameReplace(arrayInput) {
  var final = "";
  if ((arrayInput).toString().includes("Dave")) {
    return final = " I'm sorry, " + arrayName + ". I'm afraid I can't do that.";
  } else {
    return final = arrayInput;
  }
}


//User Interface Logic
var arrayBase = []
var newArray = []
var replacedArray = []
var finalArray = []
var reverseArray = []
var arrayName = []

$(document).ready(function(){
  $(".form").submit(function(event) {
    event.preventDefault();
    $(".reverseOutput").fadeOut();
    arrayName = [];
    arrayBase = [];
    finalArray = [];
    var userInput = parseInt($("#input1").val());
    var userName = $("#input2").val();
    arrayName.push(userName);
    var elementCount = userInput + 1
    newArray = arrayMaker(elementCount);
    arrayBase.forEach(function(inputNum) {
      replacedArray.push(evaluator(inputNum));
    });
    replacedArray.forEach(function(inputItem) {
      finalArray.push(nameReplace(inputItem));
    });
    replacedArray = [];
    $("#output1").text(finalArray);
    $("#output1").fadeIn();
    $(".buttonClass").fadeIn(3000);
    reverseArray = finalArray.reverse();
    $(".reverseOutput").text(reverseArray);
    $("#reverse").click(function() {
      $(".reverseOutput").fadeIn();
    });
  });
});
