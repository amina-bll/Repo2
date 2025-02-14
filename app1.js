let number = 15;

function fiz_buz() {
  if (number % 3 === 0 && number % 5 === 0) {
    console.log("FizBuz");
    return "FizBuz";
  } else if (number % 3 === 0) {
    console.log("Fiz");
    return "Fiz";
  } else if (number % 5 === 0) {
    console.log("Buz");
    return "Buz";
  } else {
    console.log("ni Fiz ni Buz ni FizBuz");
    return "ni Fiz ni Buz ni FizBuz";
  }
}

fiz_buz();

// Array inverse

let array = [1, 2, 2, 2, 0,0,0 , 0, 3, 3, 4, 5];
let arrayInverse = [];
for (let i = array.length - 1; i >= 0; i--) {
  arrayInverse.push(array[i]);
}
console.log(arrayInverse);

function maxArray(array) {
  let max = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
    }
  }
  return max;
}
console.log(maxArray(array));

function deleteDouble(array) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (newArray.indexOf(array[i]) === -1) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}

console.log(deleteDouble(array));

function deleteDoublem(array) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (newArray.includes(array[i])) continue;
    else newArray.push(array[i]);
  }
  return newArray;
}

console.log(deleteDoublem(array));

function parOrdre(array) {
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] > array[i + 1]) {
      return false;
    }
  }
  return true;
}
console.log(parOrdre(array));



function zeros(array) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] == 0) {
            newArray.unshift(array[i]);
        }
        else 
        newArray.push(array[i]);
    }
    return newArray;
}

console.log(zeros(array))
