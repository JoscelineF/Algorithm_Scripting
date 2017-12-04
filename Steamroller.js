function steamrollArray(arr) {
  // I'm a steamroller, baby
  var result = [];
  function flat(arr){
    for(var i=0,len=arr.length;i<len;i++){
      if(Array.isArray(arr[i])){
        flat(arr[i]);  // recursion until it is not an array
      }else{
        result.push(arr[i]);
      }
    }
  }
  flat(arr);
  return result;
}

steamrollArray([1, [2], [3, [[4]]]]);