// Module 22_2
function inchToFeet(inche){
    const feet = parseInt(inche/12);
    console.log(feet, "feet")
    const remainingInche = parseInt(inche%12);
    console.log(remainingInche)
    console.log(feet, "feet", remainingInche, "inche" )
}
inchToFeet(75);
const a = parseFloat(74 % 12);
console.log(a)