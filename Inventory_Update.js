// 1st solution 
function updateInventory(arr1, arr2) {
  var i= 0;
  var len1 = arr1.length;
  var len2 = arr2.length;
  // if arr1 ===[], i.e., arr1.length is 0:
  if(len1===0){
    arr1=arr2.map(function(item){
      return item;
    });
  }
  // if arr1.length>0:
  while(i<len1){
    for(var j=0;j<len2;j++){
      if(arr1[i][1] === arr2[j][1]){
        arr1[i][0] += arr2[j][0];
        break;
      }else if(arr1.join().indexOf(arr2[j][1])<0){
        arr1.push(arr2[j]);  // check and push the extra item of arr2 to arr1
      }
    }
    i++;
  }
  // sort the item in alphabetic order:
  return arr1.sort(function(a,b){
    return a[1]>b[1];
  });
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

updateInventory(curInv, newInv);



// 2nd solution using forEach();
function updateInventory(arr1, arr2) {
  // All inventory must be accounted for or you're fired!
  if(arr1.length === 0){
    arr1 = arr2;
  }
  else{
    arr1.forEach(function(item,index,array){
      for(var i = 0; i < arr2.length; i++){
        if(item[1] == arr2[i][1]){
           item[0] += arr2[i][0];
           break;
        }
        if(array.join().indexOf(arr2[i][1]) < 0){
           array.push(arr2[i]);
        }    
      }
    });
  }
  arr1.sort(function(a,b){
    return a[1] > b[1];
  });
  return arr1;
}