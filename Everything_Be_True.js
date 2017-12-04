// 1st solution
function truthCheck(collection, pre) {
  // Is everyone being true?
  return collection.every(function(item,index,arr){
    return item[pre];
  });

 }

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");


// 2nd solution
function truthCheck(collection,pre){
  for(var i in collection){
    if(!collection[i][pre]){
      return false;
    }
  }
  return true;
}
