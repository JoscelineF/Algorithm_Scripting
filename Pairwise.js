// 1st solution
function pairwise(arr, arg) {
       var sum = 0,
           len = arr.length;
       for(var i = 0; i < len; i++){
           for(var j = i+1;j < len; j++){
               if(arr[i]+arr[j] === arg){
                   sum =sum + i +j;
                 // remove repetition:
                   delete arr[i];   
                   delete arr[j];  //or: arr[j] = "null" || undefined;
               }
           }
       }
       return sum;
    }
pairwise([1,4,2,3,0,5], 7);


// 2nd solution:
function pairwise(arr, arg) {
  var temp = [];
  if(arr.length === 0){
    return 0;
  }
  for(var i = 0; i < arr.length; i++){
    for(var j = 0; j < arr.length; j++){ 
      if(i !== j && arr[i] + arr[j] === arg){       
         temp.push(i,j);
         delete arr[i];
         delete arr[j];
         break;
      }
    }
  } 
  return temp.reduce(function(prev,cur){
    return prev + cur;
  });
}
