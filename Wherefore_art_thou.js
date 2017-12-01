function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line
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
  
  // Only change code above this line
  return arr;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
