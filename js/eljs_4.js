// 1. range
function range(x, y) {
  var out = [];
  if ( x < y ) {
    for (var i = x; i <= y ; i++) {
      out.push(i);
    }
  } else {
    console.log("Invalid Range");
  }
  return out;
}

function rangePlus(x , y, step) {
  var out = [];
  if (step == undefined) {
    step = 1;
  }
  if (x < y && step > 0) {
    for (var i = x; i <= y; i += step) {
      out.push(i);
    }
  } else if (x > y && step < 0){
    for (var i = x; i >= y; i += step) {
      out.push(i);
    }
  } else {
    console.log("Step produces infinite loop, aborting")
  }
  return out;
}


// 2. Reverse Array
function reverseArray(arr) {
  out = []
  for (var i = (arr.length-1) ; i >= 0 ; i--) {
    out.push  (arr[i]);
  }
  return out
}

function reverseArrayInPlace(arr) {
  for ( var i = 0 ; i < Math.floor(arr.length/2); i++) {
    var tmp = arr[i];
    arr[i] = arr[arr.length-1-i];
    arr[arr.length-1-i] = tmp;
  }
}


// 3. Lists

function arrayToListRecur(arr) {
  if (arr.length == 0) {
    return null;
  } else {
    var obj = arr[0];
    arr.shift();
    listObj = {
      value: obj,
      rest: arrayToList(arr)
    }
    return listObj;
  }
}

function listToArray(lst) {
  var outArr = [];
  while (lst.rest != null) {
    outArr.push(lst.value);
    lst = lst.rest;
  }
  outArr.push(lst.value);
  return outArr
}

function prepend(ele, lst) {
  return {
    value: ele,
    rest: lst
  }
}

function nth(lst, x) {
  var tmpLst = lst;
  for (var i = 0; i <= x; i++) {
    if ( tmpList.rest != null ) {
      tmpLst = tmpLst.rest;
    } else {
      return undefined;
    }
  }
  return tmpList.value
}

function nthRecurse(lst, x) {
  if ( x == 0 ) {
    return lst.value;
  } else if ( lst.rest == null ){
    return undefined;
  } else {
    return nthRecurse(lst.rest, x-1);
  }
}

// 4. Deep Equal
function noNullObj(x) {
  return (typeof(x) === 'object') && (x !== null)
}

function deepEqual(x, y) {
  if ( x === y) {
    return true
  } else if ( noNullObj(x) && noNullObj(y) ) {
    var xArr = Object.keys(x);
    var yArr = Object.keys(y);
    if (xArr.length != yArr.length) {
      return false;
    } else {
      for (var i = 0; i < xArr.length; i++) {
        return deepEqual(x[xArr[i]], y[yArr[i]]);
      }
    }
  }
  return false
}
