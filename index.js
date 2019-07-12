window.onload = () => {
   var topName = ['the','our'];
   var secondName = ['volvo','lamborguini'];
   var thirdName = ['black', 'grey'];
   var fourthName = ['.org', '.edu'];
   var result = [];

   var newDomain = topName.forEach(function(value,index){
      var firstValues = value;
      secondName.forEach(function(value,index){
        var secondCombination = firstValues + value;
          thirdName.forEach(function(value,index){
             var finalCombination = secondCombination + value;
             fourthName.forEach(function(value, index){
                result.push(finalCombination + value);
             });
         });
      });
   });
   document.querySelector("#preDefinedText").innerHTML = result.join("\n");
}