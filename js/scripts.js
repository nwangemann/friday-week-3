var arrayBase = []
var newArray = []
var arrayReplace = ["0","Beep!","Boop!","I'm sorry, Dave. I'm afraid I can't do that."]

$(document).ready(function(){
  $(".form").submit(function(event) {
    event.preventDefault();
    var userInput = parseInt($("#input1").val());
    var elementCount = userInput + 1
    newArray = arrayMaker(elementCount);
    var replacedArray = []
    console.log(arrayBase);
    console.log(newArray);
    arrayBase.forEach(function(string) {
      var num = string
      if (string.includes("3")) {
        console.log("Reached loop 1")
        replacedArray.push(arrayReplace[3]);
      } else if (string.includes("2")) {
        console.log("Reached loop 2")
        replacedArray.push(arrayReplace[2]);
        return
      } else if (string.includes("1"))  {
        console.log("Reached loop 3")
        replacedArray.push(arrayReplace[1]);
        return
      } else {
        replacedArray.push(num);
      };
      console.log(replacedArray);
    });
    $(".output").text(replacedArray);
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
// $(document).ready(function(){
  //   $(".form").submit(function(event) {
    //     event.preventDefault();
    //     var userInput = parseInt($("#input1").val());
    //     var elementCount = userInput + 1
    //     newArray = arrayMaker(elementCount);
    //     var replacedArray = []
    //     console.log(arrayBase);
    //     console.log(newArray);
    //     for (var index = 0; index > arrayBase.length; index++) {
      //
      //     }
      //   });
      //   // $(".output").text(storeArray);
      // });
      //


      // functional but does not take 10-19 100-199 1000-1999 etc into account

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
                  //
                  //
                  // result = $(arrayBase[index]).val();
                  // console.log(result);
                  // var storeArray = []
                  // var tempArray = result.split("");
                  // console.log(tempArray);
                  //
                  // if ((parseInt(tempArray[i])) === 3) {
                    //   storeArray.push("I'm sorry, Dave. I'm afraid I can't do that.");
                    //   return
                    // } else {
                      //
                      // }
                      // console.log(tempArray);
                      // console.log(storeArray);
                      // if ((parseInt(tempArray[i])) === 2) {
                        //   storeArray.push("Boop!");
                        //   return
                        // } else {
                          // }
                          // console.log(tempArray);
                          // console.log(storeArray);
                          // if ((parseInt(tempArray[i])) === 1) {
                            //   storeArray.push("Beep!");
                            //   return
                            // } else {
                              // }
                              // console.log(tempArray);
                              // console.log(storeArray);
