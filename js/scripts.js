var array1 = []

$(document).ready(function(){
  $(".form").submit(function(event) {
    event.preventDefault();
    var userInput = parseInt($("#input1").val());
    console.log(userInput);
    $(".output").text(userInput);

  });
});
