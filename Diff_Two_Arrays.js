// 1st solution
function diffArray(arr1, arr2) {
   var newArr = [];
      for(var i=0;i<arr1.length;i++){
         if(arr2.indexOf(arr1[i])==-1){
           newArr.push(arr1[i]);
         }    
      }
      for(var j=0;j<arr2.length;j++){
         if(arr1.indexOf(arr2[j])==-1){
           newArr.push(arr2[j]);
         }    
      }  
  return newArr;
}

diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]);

// 2nd solution using filter
function diff(arr1, arr2) {
  var newArr = [];
  var a1=arr1.filter(function(item,index,array){
    return (arr2.indexOf(item)<0);
  });
  var a2=arr2.filter(function(item,index,array){
    return (arr1.indexOf(item)<0);
  });
  newArr=a1.concat(a2); 
  return newArr;
}
diff([1, 2, 3, 5], [1, 2, 3, 4, 5]);



