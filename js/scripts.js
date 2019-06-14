var array1 = []
var newArray = []
$(document).ready(function(){
  $(".form").submit(function(event) {
    event.preventDefault();
    var userInput = parseInt($("#input1").val());
    var elementCount = userInput + 1
    newArray = arrayMaker(elementCount);
    $(".output").text(newArray);
    console.log(array1);
    console.log(elementCount);

  });
});

function arrayMaker(elementCount) {
  for (var counter = 1; counter <= elementCount; counter++) {
    if(counter !== elementCount) {
      array1.push(counter);
    } else {
      return
    }
  }
}
