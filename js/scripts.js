var arrayBase = []
var newArray = []
var arrayReplace = ["0","Beep!","Boop!","I'm sorry, Dave. I'm afraid I can't do that."]
var replacedArray = []

$(document).ready(function(){
  $(".form").submit(function(event) {
    event.preventDefault();
    var userInput = parseInt($("#input1").val());
    var elementCount = userInput + 1
    newArray = arrayMaker(elementCount);
    console.log(newArray);
    console.log(arrayBase);
    arrayBase.forEach(function(inputNum) {
      replacedArray.push(evaluator(inputNum));
    });

    console.log(replacedArray);
    $(".output").text(replacedArray);
  });
});

function evaluator(arrayItem) {
  var result = "";
  if ((arrayItem).toString().includes("3")) {
    return result = "I'm sorry, Dave. I'm afraid I can't do that.";
  } else if ((arrayItem).toString().includes("2")) {
    return result = "Boop!";
  } else if ((arrayItem).toString().includes("1")) {
    return result = "Beep!";
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

      //
      // functional but does not take 10-19 100-199 1000-1999 etc into account
      // $(document).ready(function(){
        //     $(".form").submit(function(event) {
          //         event.preventDefault();
          //         var userInput = parseInt($("#input1").val());
          //         var elementCount = userInput + 1
          //         newArray = arrayMaker(elementCount);
          //         var replacedArray = []
          //         console.log(arrayBase);
          //         console.log(newArray);
          //         arrayBase.forEach(function(num, i) {
            //             if ((parseInt(num)) % 10 === 3 || (parseInt(num)) === 3 || (parseInt(num)) >= 30 && (parseInt(num)) <= 39 || (parseInt(num)) >= 300 && (parseInt(num)) <= 399 || (parseInt(num)) >= 3000 && (parseInt(num)) <= 3999 || (parseInt(num)) >= 30000 && (parseInt(num)) <= 39999) {
              //                 console.log("Reached loop 1")
              //                 replacedArray.push(arrayReplace[3]);
              //               } else if ((parseInt(num)) % 10 === 2 || (parseInt(num)) === 2 || (parseInt(num)) >= 20 && (parseInt(num)) <= 29 || (parseInt(num)) >= 200 && (parseInt(num)) <= 299 || (parseInt(num)) >= 2000 && (parseInt(num)) <= 2999 || (parseInt(num)) >= 20000 && (parseInt(num)) <= 29999) {
                //                   console.log("Reached loop 2")
                //                   replacedArray.push(arrayReplace[2]);
                //                   return
                //                 } else if ((parseInt(num)) % 10 === 1 || (parseInt(num)) === 1 || (parseInt(num)) >= 10 && (parseInt(num)) <= 19 || (parseInt(num)) >= 100 && (parseInt(num)) <= 199 || (parseInt(num)) >= 1000 && (parseInt(num)) <= 1999 || (parseInt(num)) >= 10000 && (parseInt(num)) <= 19999)  {
                  //                     console.log("Reached loop 3")
                  //                     replacedArray.push(arrayReplace[1]);
                  //                     return
                  //                   } else {
                    //                       replacedArray.push(num);
                    //                     };
                    //                     console.log(replacedArray);
                    //                   });
                    //                   $(".output").text(replacedArray);
                    //                 });
                    //               });
