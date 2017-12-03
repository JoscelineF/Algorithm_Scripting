// 1st solution
function spinalCase(str) {
  str = str.replace(/(\B[A-Z])/g," $1")  // add space before the second onward capital letter
  		   .replace(/_/g," ")
  		   .replace(/\s+/g,"-")
  		   .toLowerCase();
  return str;
}

spinalCase('This Is Spinal Tap');
spinalCase("thisIsSpinalTap");
spinalCase("The_Andy_Griffith_Show");
spinalCase("Teletubbies say Eh-oh");
spinalCase("AllThe-small Things");


// 2nd solution
function spinalCase(str) {
  str = str.replace(/_/g," ")
        .replace(/([A-Z])/g," $1")
        .replace(/^\s/,"")   // remove the space at the beginning of the sentence
        .replace(/\s+/g,"-")
        .toLowerCase();
  return str;