// 1st solution
function translatePigLatin(str) {
  var vowels = ['a','e','i','o','u'];
  // check if the first letter is a vowel
  if(vowels.indexOf(str[0])!==-1){
    return str + "way";
  }
  // relocate the consonant letter to the end until the initial letter is a vowel
  while(vowels.indexOf(str[0])===-1){
    str = str.slice(1)+str.slice(0,1);
  }
  return str+"ay";
}

translatePigLatin("consonant");


// 2nd solution
function translatePigLatin(str) {
  var vowel=['a','e','i','o','u'];
  var i=0;
  var newstr=str;
  
  while(i<str.length){
    if(vowel.indexOf(str[i])===-1){
      i++;
    }
    // avoid potential infinite loop
    else{
      break;
    }
  }

  if(i==0){
    newstr=newstr+"way";  
  }
  else{
    newstr=newstr.substr(i)+newstr.substr(0,i)+"ay";   
  }
  return newstr;
}

translatePigLatin("california");