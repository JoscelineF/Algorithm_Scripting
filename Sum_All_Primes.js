// 1st solution
function isPrime(num){
  var primeNum = true;
  var nBound =num/2+1; // halve the check range
  for(var i=2;i<nBound;i++){
    if(num%i===0){
      primeNum = false;
      break;
    }
  }
  return primeNum;
 }

function sumPrimes(num) {
  var sum=0;  
  for(var i=2;i<=num;i++){
    if(isPrime(i)){
      sum+=i;
    }
  }
 return sum;
}
sumPrimes(10);


// 2nd solution
function isPrime(num){
  var flag=true;
  //check the range 2 - Math.sqrt(num)
  for(var i=2;i<=Math.sqrt(num);i++){
    if(num%i===0)
    {
      flag=false;
      break;
    }
  }
  return flag;
}

function sumPrimes(num) {
  var sum=0;
  for(var i=2;i<=num;i++){
    if(isPrime(i))
      sum+=i;
  }
  return sum;
}
