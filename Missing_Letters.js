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
