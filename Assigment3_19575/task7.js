var a = [10,20,4,40,60,70];
var b = [1,2,3,4,5,6,7,8,9,10];
var union = a.concat(b);
var numArray = union;
numArray.sort(function(a, b) {
  return a - b;
});
numArray = [...new Set(numArray)];
document.write(numArray);
