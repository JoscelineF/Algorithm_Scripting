
var Person = function(firstAndLast) {
    // if use 'Person.prototype' instead of 'this',Object.keys(bob).length will be 0 instead of 6
    // whenever the constructor is called, the methods would get reassigned (that is, for every object creation)if using 'this', while not get reassigned using 'Person.prototype.'.

    this.getFullName = function() {
      return firstAndLast;
    };
    this.getFirstName = function() {
      return firstAndLast.split(" ")[0];
    };
    this.getLastName = function() {
      return firstAndLast.split(" ")[1];
    };
    this.setFullName = function(fullName) {
       firstAndLast = fullName;
    };
    this.setFirstName = function(first) {
       var arr = firstAndLast.split(" ");
       arr.splice(0,1,first);
       firstAndLast = arr.join(' ');
    };
    this.setLastName = function(last) {
       var arr = firstAndLast.split(" ");
       arr.splice(1,1,last);
       firstAndLast = arr.join(' ');
    };         
};

var bob = new Person('Bob Ross');
bob.getFullName();
/*
Object.keys(bob).length should return 6.
bob instanceof Person should return true.
bob.firstName should return undefined.
bob.lastName should return undefined.
bob.getFirstName() should return "Bob".
bob.getLastName() should return "Ross".
bob.getFullName() should return "Bob Ross".
bob.getFullName() should return "Haskell Ross" after bob.setFirstName("Haskell").
bob.getFullName() should return "Haskell Curry" after bob.setLastName("Curry").
bob.getFullName() should return "Haskell Curry" after bob.setFullName("Haskell Curry").
bob.getFirstName() should return "Haskell" after bob.setFullName("Haskell Curry").
*/
