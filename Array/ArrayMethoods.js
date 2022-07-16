function forEach(array, cb) {
    for (let i = 0; i < array.length; i++) {
      cb(array[i], i, array);
    }
  }
  
  function map(array, cb) {
    let newArr = [];
    for (let i = 0; i < array.length; i++) {
      newArr.push(cb(array[i], i, array));
    }
    return newArr;
  }
  
  function filter(array, cb) {
    let newArr = [];
    for (let i = 0; i < array.length; i++) {
      const element = array[i];
      if (cb(element, i, array)) newArr.push(element);
    }
    return newArr;
  }
  
  function some(array, cb) {
    for (let i = 0; i < array.length; i++) {
      if (cb(array[i], i, array)) return true;
    }
    return false;
  }
  
  function every(array, cb) {
    for (let i = 0; i < array.length; i++) {
      if (!cb(array[i], i, array)) return false;
    }
    return true;
  }
  
  const arr = [1, 14, 16];
  
  function checkIfNumBiggerThenTwo(num) {
    if (num > 2) {
      return true;
    } else {
      return false;
    }
  }
  
  console.log(arr.every((num) => num > 2));
