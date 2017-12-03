// 1st solution
function uniteUnique() {
  var arr = [];
  var len = arguments.length;
  var i = 0;
  while(i<len){
    for(var j=0;j<arguments[i].length;j++){
      if(arr.indexOf(arguments[i][j])===-1){
        arr.push(arguments[i][j]);
      }
    }
    i++;
  }
  return arr;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);

// 2nd solution using Array.prototype.concat.apply()
function uniteUnique() {
   var arr=[];
   var allArray=Array.prototype.concat.apply([], arguments);
   for(var i=0;i<allArray.length;i++){
      if(arr.indexOf(allArray[i])===-1){
         arr.push(allArray[i]);
      }
   }
   return arr;
}
console.log(uniteUnique([1, 3, 2], [1, [5]], [2, [4]]));

// 3rd solution using Array.from(), reduce() & filter()
function uniteUnique(){
  var args = Array.from(arguments);
  var arr = args.reduce(function(prev,curr){
    return prev.concat(curr);
  });
  return arr.filter(function(item,index,arr){
    return arr.indexOf(item) === index;
  });
}