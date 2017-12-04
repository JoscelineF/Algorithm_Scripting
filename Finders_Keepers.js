
function findElement(arr, func) {
  var num = 0;
  var newArr = arr.filter(func);
  num = newArr[0];
  return num;
 // just one statement below could be enough:
 // return arr.filter(func)[0];
}

findElement([1, 2, 3, 4], function(num){ return num % 2 === 0; });
