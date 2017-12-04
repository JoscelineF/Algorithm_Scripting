// formula: (a,b)*[a,b]=a*b 
// gcd(greatest common divisor) * scm(smallest common multiple)=a * b;

// get greatest common divisor by using Euclidean algorithm (欧几里德算法/辗转相除法)
function gcd(val1,val2){
  if(val1%val2===0)
    return val2;
  else
    return gcd(val2,val1%val2);
}

function smallestCommons(arr) {
  // sort arr in incremental order
  arr=arr.sort(function(a,b){
    return a-b;
  });  
  //scm=abs(a*b)/gcd(a,b)
  var val=arr[0];
  for(var i=arr[0]+1;i<=arr[1];i++){
    val *=i/gcd(val,i);
  }
  return val;
}

smallestCommons([1,5]);