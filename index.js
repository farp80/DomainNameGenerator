window.onload = () => {
   let topName = ['the','our'];
   let secondName = ['volvo','lamborguini'];
   let thirdName = ['black', 'grey'];
   let fourthName = ['.org', '.edu'];
   let result = [];

   topName.forEach(function(value,index){
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