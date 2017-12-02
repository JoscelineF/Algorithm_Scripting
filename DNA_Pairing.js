// 1st solution
function pairElement(str) {
  var arr = [];
  var i=0;
  while(i<str.length){
    switch(str[i]){
      case "A":
        arr.push(["A","T"]);
        break;
      case "T":
        arr.push(["T","A"]);
        break;
      case "C":
        arr.push(["C","G"]);
        break;
      case "G":
        arr.push(["G","C"]);
        break;
    }    
    i++;
  }  
  return arr;
}
pairElement("GCG");


// 2nd solution using map()
function pairElement(str) {
  var arr = str.split("");
  var pair = "";
  var result = arr.map(function(item,index,array){
    if(item === "A"){
      pair = "T";
    }else if(item === "T"){
      pair = "A";
    }else if(item === "C"){
      pair = "G";
    }else if(item === "G"){
      pair = "C";
    }
    return [item,pair];
  });
  return result;
}

// 3rd solution
function pairElement(str) {
  // define a DNA pairing object
  var map={
    'A':'T',
    'T':'A',
    "G":'C',
    'C':'G'
   };
  var arr=[];
  var i=0;
  var len=str.length;
  while(i<len){
    var value=map[str[i]];
    arr.push([str[i],value]);
    i++;
    }      
  return arr;
}