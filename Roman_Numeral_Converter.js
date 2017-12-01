// 1st solution
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

// 2nd solution_recursive algorithm
var romanMatrix=[
  [1000,'M'],
  [900,'CM'],
  [500,'D'],
  [400,'DC'],
  [100,'C'],
  [90, 'XC'],
  [50, 'L'],
  [40, 'XL'],
  [10, 'X'],
  [9, 'IX'],
  [5, 'V'],
  [4, 'IV'],
  [1, 'I']
];
function convertToRoman(num){  
  if(num===0){return '';}    
  //recursion
  for(var i=0;i<romanMatrix.length;i++){
    if(num>=romanMatrix[i][0])
      return romanMatrix[i][1]+convertToRoman(num-romanMatrix[i][0]);
  }
}
