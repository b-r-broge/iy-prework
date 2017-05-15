// 1. pyramid of #
var outstr = "#";
for (var i = 0; i < 7; i++) {
  console.log(outstr);
  outstr += "#"
}
console.log("\n\n")
// Second Way
for (var i = 0; i<7; i++) {
  var outstr = "#";
  if (outstr.length < (i+1)) {
    for (var j = 0; j < i ; j++) {
   	  outstr += "#"
    }
  }
  console.log(outstr);
}
// Third Way
for (var i = 0; i<7; i++) {
  var outstr = "#";
  while (outstr.length < i+1) {
    outstr += "#";
  }
}

// 2. FizzBuzz

// Your code here.
var fizz = "Fizz";
var buzz = "Buzz";

for (var i = 1; i<=100 ; i++) {
  var out = "";
  if ( i % 3 === 0 ) {
    out = out + fizz;
  }
  if ( i % 5 === 0 ) {
    out = out + buzz;
  }
  if (out.length > 0) {
    console.log(out);
  } else {
    console.log(i)
  }
}

// 3. Chessboard

var size = 8;

var out = "";
for (var i = 0 ; i < size ; i++) {
  for (var j = 0; j < size ; j++) {
    if ( i % 2 === 0 ) {
      if ( j % 2 === 0 ) {
        out += " ";
      } else {
        out += "#";
      }
    } else {
      if ( j % 2 === 1 ) {
        out += " ";
      } else {
        out += "#";
      }
    }
  }
  out += "\n"
}

console.log(out);
