// 1st solution using slice()
function dropElements(arr, func) {
  // Drop them elements.
  var i=0;
  var len=arr.length;
  var index;
  while(i<len){
    if(func(arr[i])){
      index=i;
      break;
    }
    i++;
  }
  if(index>=0){
    return arr.slice(index);
  }else{
    return [];
  }  
}
dropElements([1, 2, 3], function(n) {return n < 3; });

// 2nd solution using shift()
function dropElements(arr, func){
  while(!func(arr[0]) && arr.length>0){
    arr.shift();
  }
  return arr;
}