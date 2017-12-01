function convertToRoman(num) {
  var numbers = [1000,900,500,400,100,90,50,40,10,9,5,4,1];
  var romans = ["m","cm","d","cd","c","xc","l","xl","x","ix","v","iv","i"];  
  var str = "";
  numbers.forEach(function(item,index,arr){
    while(num >= item){
      str += romans[index];  
      num -= item; 
    }
  });
 return str.toUpperCase();
}

convertToRoman(36);