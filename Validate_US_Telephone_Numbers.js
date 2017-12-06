function telephoneCheck(str) {
  var patt = /^1?\s?(\d{3}|\(\d{3}\))[\s-]?\d{3}[\s-]?\d{4}$/;
  return patt.test(str);  
}

telephoneCheck("555-555-5555");
/* check all the valid formats below:
555-555-5555
(555)555-5555
(555) 555-5555
555 555 5555
5555555555
1 555 555 5555
*/