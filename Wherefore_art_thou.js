// 1st solution 
function whatIsInAName(collection, source) {
  var arr = [];
  var srKey, srKey_val;
  for(var key in source){
    srKey = key;
    srKey_val = source[key];
  }
  for(var i=0,len=collection.length;i<len;i++){
    for(var key in collection[i]){
      if(srKey == key && srKey_val == collection[i][key]){
        arr.push(collection[i]);
      }
    }
  }  
  return arr;
}
whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });

// 2nd solution
function whatIsInAName(collection,source){
  var arr = [];
  arr = collection.filter(function(item,index){
    for(var key in source){
      if(!item.hasOwnProperty(key)||item[key]!==source[key]){
        return false;
      }
    }
   return true;
  });
  return arr;
}

// 3rd solution
function whatIsInAName(collection,source){
    var arr = [];
    var keys = Object.keys(source);
    arr = collection.filter(function(item,index){
        for(var i = 0; i < keys.length; i++){
            if(!item.hasOwnProperty(keys[i]) || item[keys[i]] !== source[keys[i]]){
                return false;
            }
        }
        return true;
    });
    return arr;
}


