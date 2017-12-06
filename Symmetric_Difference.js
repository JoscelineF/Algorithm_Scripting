function sym() {
  var args = Array.from(arguments);
// or:  var args = Array.prototype.slice.call(arguments); 
  function diffArray(prev, curr) {
    var newArr = [];
    var a1=prev.filter(function(item){
      return (curr.indexOf(item)<0);
    });
    var a2=curr.filter(function(item){
      return (prev.indexOf(item)<0);
    });
    newArr=a1.concat(a2); 
    return newArr;
  }
  
  arr = args.reduce(diffArray);  
  return arr.filter(function(item,index,arr){
    return arr.indexOf(item) === index;
  });  
}

sym([1, 2, 3], [5, 2, 1, 4]);
