// 1st solution
function addTogether() {
  if(typeof arguments[0] !== "number"||(arguments.length>1&&typeof arguments[1]!=="number")){
    return undefined;
  }
  
  if(arguments.length===1){
    var args0 = arguments[0];
    var sumTwoAnd = function(num){
      if(typeof num !=="number"){
        return undefined;
      }
      return args0+num;      
    };
    return sumTwoAnd;
  }else{
    return arguments[0]+arguments[1];
  }     
}

addTogether(2,3);


// 2nd solution
function addTogether() {
  //typeof returns (null,number,string,boolean,undefined)
  if(typeof arguments[0]=="number" && typeof arguments[1]=="number"){
    return arguments[0]+arguments[1];
  }
  else if(arguments.length==1 && typeof arguments[0]=="number"){
    var x=arguments[0];
    return function(y){
      if(typeof y =="number"){
        return x+y;  // else, default return undefined
      }
    };
  }  
}