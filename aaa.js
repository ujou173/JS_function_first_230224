let pokemon = ["피카츄", "라이츄", "파이리", "꼬북이", "버터플"];

console.log(pokemon[0]); //피카츄

for(i = 0 ; i < pokemon.length; i++) {
  console.log(pokemon[i]);
}

function bmiCalculateReturnString(myWeight, myHeight) {
  let bmi = myWeight / (myHeight * myHeight);
  return "BMI = " + bmi + "Kg/m^2";
}
console.log(bmiCalculateReturnString(70, 1.68));