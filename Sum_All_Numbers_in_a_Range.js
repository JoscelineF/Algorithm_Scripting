// 1st way to solve
function sumAll(arr) {
  var aMin = Math.min(arr[0],arr[1]);
  var aMax = Math.max(arr[0],arr[1]);
  var result = 0;
  while(aMin<=aMax){
    result+=aMin;
    aMin++;
  }
  return result;
}
sumAll([1, 4]);

// 2nd way
function sumAll(arr) {
  return (arr[0] + arr[1])*(Math.abs(arr[0] - arr[1]) + 1)/2;
}
sumAll([1, 4]);

// 3rd way, using reduce();
function sumAll(arr) {
  var stepArr = [];
  var aMin = Math.min.apply(null,arr);
  var aMax = Math.max.apply(null,arr);
  var steps = aMax-aMin+1;
  for(i=0;i<steps;i++){
    stepArr.push(aMin+i);
  }  
  return stepArr.reduce(function(prev,curr){return prev+curr;});  
}

sumAll([1, 4]);


