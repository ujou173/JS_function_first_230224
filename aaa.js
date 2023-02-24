let pokemon = ["피카츄", "라이츄", "파이리", "꼬북이", "버터플"];

console.log(pokemon[0]); //피카츄

for(i = 0 ; i < pokemon.length; i++) {
  console.log(pokemon[i]);
}

// bmi 계산기
function bmiCalculateReturnString(myWeight, myHeight) { //몸무게와 키를 매개변수로 한다
  let bmi = myWeight / ((myHeight * 0.01) * (myHeight * 0.01)); // 몸무게 / 키^2을 계산. 우리는 평소 키를 cm 단위로 자주 사용하므로 m로 변환을 위해 0.01을 곱해준다
  return "BMI = " + bmi + "Kg/m^2"; // 계산 결과를 반환한다
}
console.log(bmiCalculateReturnString(70, 168)); //70kg을 몸무게로, 168cm를 키로 해서 계산

// 부가가치세 계산기
function taxCalculateReturnString(price) {
  let vat = price * 10 / 100;
  return "V.A.T = " + vat + "원" 
}
console.log(taxCalculateReturnString(3700));

// 사칙연산 계산기
function numberCalculate(firstValue, calc, secondValue) {
  let result;
  if(calc === "+") {
    result = firstValue + secondValue;
    return result;
  } else if(calc === "-") {
    result = firstValue - secondValue;
    return result;
  } else if (calc === "x") {
    result = firstValue * secondValue;
    return result;
  } else if (calc === "/") {
    result = firstValue / secondValue;
    return result;
  } else {
    result = "계산 부호가 정확하지 않습니다";
    return result;
  }
}
console.log("------")
console.log(numberCalculate(27, 1, 3));