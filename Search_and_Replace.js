// 1st solution
function myReplace(str, before, after) {
  var arr = str.split(" ");
  var rIndex = arr.indexOf(before);
  var patt =/[A-Z]/;
  var aftStr ="";
  if(patt.test(before.charAt(0))){
    aftStr = after.charAt(0).toUpperCase()+after.substr(1);
    arr.splice(rIndex,1,aftStr);
    str=arr.join(" ");
  }else{
    aftStr = after.charAt(0).toLowerCase()+after.substr(1);
    arr.splice(rIndex,1,aftStr);
    str=arr.join(" ");
  }
  return str;
}
myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");


// 2nd solution
function isFirstUpper(str){
  if(str.charAt(0)==str.charAt(0).toUpperCase()){
    return true;
  }
  else{
    return false;
  }
}

function firstToUpper(str){
  return str.replace(str.charAt(0),str.charAt(0).toUpperCase());
}
// take into account the condition that the initial letter of after string may be uppercase
function firstToLower(str){
  return str.replace(str.charAt(0),str.charAt(0).toLowerCase());
}
function myReplace(str, before, after) {  
  if(isFirstUpper(before)){
    after=firstToUpper(after);
  }else{
    after=firstToLower(after);
  }
  str=str.replace(before,after);
  return str;
}

myReplace("A quick brown fox Jumped over the lazy dog", "Jumped", "leaped");
