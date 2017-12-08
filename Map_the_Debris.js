// T=2*Math.PI*Math.sqrt(Math.pow((earthRadius+avgAlt),3)/GM)
function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  for(var i=0;i<arr.length;i++){
    var a = arr[i].avgAlt + earthRadius;
    var T = 2*Math.PI*Math.sqrt(Math.pow(a,3)/GM);
    delete arr[i].avgAlt;
    arr[i].orbitalPeriod = Math.round(T);
  }  
  return arr;
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);
