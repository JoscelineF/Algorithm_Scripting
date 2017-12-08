function permAlone(str) {
  var patt = /(.)\1+/g;
  var arr = str.split("");
  var permutations =[];
  var tmp;
  
  // swap function
  function swap(indx1,indx2){
    tmp = arr[indx1];
    arr[indx1]=arr[indx2];
    arr[indx2]=tmp;
  }
  
  // Heap's Algorithm:
  function generate(n){
    if(n===1){
      permutations.push(arr.join(""));
    }else{
      for(var i=0;i<n;i++){
        generate(n-1);
        swap(n%2?0:i,n-1);
      }
    }
  }
  
  generate(arr.length);
  
  // filter out the repeated consecutive letters
  var filtered = permutations.filter(function(str){
    return !str.match(patt);
  });
  return filtered.length;
}

permAlone('aab');
