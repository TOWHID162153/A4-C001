// 1. feet to inches
const mahim = 69;

function inchToFeet(inches) {
  const feet = (inches / 12);
    return feet;
}
inchToFeet(mahim);
const result = inchToFeet(mahim);
console.log("Mahim inch to feet :",result);

// 2. feet to inches
function feetToInches(feet) {
    const inches = (feet * 12);
        return inches;
}
feetToInches(result);
console.log("Mahim feet to inches :",feetToInches(result));
