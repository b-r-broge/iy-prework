// 1. Minimum
function min( a , b) {
  if (a < b) {
    return a
  }
  return b
}

// 2. Recursion
function isEven( x ) {
  if ( x < 0 ) {
    return isEven(x+2);
  } else if ( x == 0 ) {
    return true;
  } else if ( x == 1 ) {
    return false;
  } else if ( x > 1 ) {
    return isEven(x-2);
  }
}

// 3. Bean Counting
function countBs(str) {
  var bCount = 0;
  for (var i = 0 ; i < str.length ; i++) {
    if ( str.charAt(i) === "B" ) {
      bCount++
    }
  }
  return bCount
}

function countChar(str, char) {
  var count = 0;
  for ( var i = 0 ; i < str.length ; i++) {
    if ( str.charAt(i) === char ) {
      count++
    }
  }
  return count
}
