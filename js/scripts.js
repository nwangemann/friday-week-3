var arrayBase = []
var newArray = []
var arrayReplace = ["0","Beep!","Boop!","I'm sorry, Dave. I'm afraid I can't do that."]

$(document).ready(function(){
  $(".form").submit(function(event) {
    event.preventDefault();
    var userInput = parseInt($("#input1").val());
    var elementCount = userInput + 1
    newArray = arrayMaker(elementCount);
    $(".output").text(arrayBase);
    console.log(arrayBase);
    console.log(arrayReplace);
    console.log(newArray);
    var replacedArray = []
    console.log(arrayReplace);
    console.log(arrayBase);
    console.log(newArray);
    arrayBase.forEach(function(num, i) {
      if (parseInt(num) % 10 === 1 || parseInt(num) === 1) {
        console.log("Reached loop 1")
        items.splice(1, num[i],"Beep!");
      } else if (parseInt(num) % 10 === 2 || parseInt(num) === 2) {
        console.log("Reached loop 2")
        items.splice(1, num[i],"Boop!");
      } else if (parseInt(num) % 10 === 3 || parseInt(num) === 3) {
        console.log("Reached loop 3")
        items.splice(1, num[i],"I'm sorry, Dave. I'm afraid I can't do that."); 
      } else {
        return num
      };
      console.log(arrayBase);
    });
  });
});

function arrayMaker(elementCount) {
  for (var counter = 1; counter <= elementCount; counter++) {
    if(counter !== elementCount) {
      arrayBase.push(counter);
    } else {
      return
    }
  }
}
//
// newArray = for (var index = 0; index <= arrayBase.length; index++) {
  //   function replacer(arrayBase) {
    //     if ((parseInt($(arrayBase[index]).val())) % 10 === 1 || ((parseInt($(arrayBase[index]).val())) === 1)) {
      //       console.log("Reached loop 1")
      //       (arrayBase[index]).push("Beep!");
      //     } else if ((parseInt($(arrayBase[index]).val())) % 10 === 2 || (parseInt($(arrayBase[index]).val())) === 2) {
        //       console.log("Reached loop 2")
        //       (arrayBase[index]).push("Boop!");
        //     } else if ((parseInt($(arrayBase[index]).val())) || (parseInt($(arrayBase[index]).val())) === 3) {
          //       console.log("Reached loop 3")
          //       (arrayBase[index]).push("I'm sorry, Dave. I'm afraid I can't do that.");
          //     } else {
            //       console.log("Reached loop 4")
            //     }
            //   }
            // }
