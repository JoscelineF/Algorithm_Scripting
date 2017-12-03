// 1st solution
function sumFibs(num) {
  var fibArr = [1]; // all Fibonacci numbers in sequence
  var oddFib =[1];  // all odd Fibonacci numbers
  var i=1;
  while(i<=num){
    fibArr.push(i);
    if(i%2===1){
      oddFib.push(i);
    }
    i+=fibArr[fibArr.length-2];
  }   
  var sumOddFib = oddFib.reduce(function(prev,curr){
    return prev+curr;
  });
  return sumOddFib;
}
sumFibs(4);

// 2nd solution
function sumFibs(num) {
  var fibo = [1, 1];
  var oddSum = 2;
  while(true){
    var item = fibo[0] + fibo[1];
    if(num < item){
      return oddSum;
    }
    if(item % 2){
      oddSum += item;    
    }
    fibo[0] = fibo[1];
    fibo[1] = item;
  }
}