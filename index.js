window.onload = () => {
   let topName = ['the','our','me'];
   let secondName = ['volvo','lamborguini','ferrari'];
   let thirdName = ['black', 'grey','white'];
   let fourthName = ['.org', '.edu','com'];
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