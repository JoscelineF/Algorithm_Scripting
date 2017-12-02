// 1st solution
function fearNotLetter(str) {
  str = str.toLowerCase();
  var len = str.length;
  var startCode = str.charCodeAt(0);
  var endCode = str.charCodeAt(len-1);
  var alphb="";
  var i=startCode;
  while(i<=endCode){
    alphb+=String.fromCharCode(i);
    i++;
  }
  
  if(endCode-startCode+1 === len){
    return undefined;
  }else{
    for(var j=0;j<alphb.length;j++){
      if(str.indexOf(alphb[j])===-1){
        return alphb[j];
      }
    }
  }
}
fearNotLetter("abce");

// 2nd solution
function fearNotLetter(str) {
  var arr = str.split("");
  var temp = [];
  var start = str.charCodeAt(0);
  var end = str.charAt(str.length - 1).charCodeAt(0);
  for(var i = start; i < end + 1; i++){
    var item = String.fromCharCode(i);
    if(arr[0] !== item){  
      temp.push(item);
    }else{
      arr.shift();
    }
  }
  if(temp.length === 0){
    return undefined;
  }else{
    return temp.join("");
  }  
}
