function binaryAgent(str) {
  var biCode = str.split(" ");
  var result="";
  var i=0;
  var len=biCode.length;
  while (i<len){
    result+=String.fromCharCode(parseInt(biCode[i],2));
    i++;
  }
  return result;
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");