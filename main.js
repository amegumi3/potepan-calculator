const screen = document.querySelector(".screen");
let result = "";
let indexNumbers = [];

// 数字、少数点、ACを押したとき
function clickBtn(button) {
  let  value= button.textContent;
  if (value == "AC" ) {
    result = 0;
    screen.textContent = result;
    result = "";
  }else if (value == "C"){
    result = result.substring(0,operatorLast()+1);
    screen.textContent = result;
    indexNumbers=[];
  } else if (value == ".") {
      if (result == ""  ){
      console.log("please another number");
      }else {
        result += value ;
        screen.textContent = result;
        console.log(result);
      }
    } else if (value == "00") {
      if (result == "" || lastBtn()) {
        console.log("please another number");
      }else {
        result += value ;
        screen.textContent = result;
        console.log(result);
      }
    } else {
    result += value ;
    screen.textContent = result;
    console.log(result);
  }
}

// 演算子を押した時
function clickOperator(button) {
  if (lastBtn()) {
    result  = result.slice(0,-1) + button.textContent;
    screen.textContent = result;
  } else if (result == "") {
    console.log("please number");
  }else {
  console.log(result);
  result += button.textContent;
  screen.textContent = result;
  }
}

// イコールを押した時
function equalBtn() {
  let resultReplace = result.replace(/×/g,"*").replace(/÷/g,"/");
  screen.textContent = eval(resultReplace);
  result="";
}

//最後の演算子があるインデックス番号
const operatorLast = function (max) {
  indexNumbers.push(result.lastIndexOf("+"));
  indexNumbers.push(result.lastIndexOf("-"));
  indexNumbers.push(result.lastIndexOf("×"));
  indexNumbers.push(result.lastIndexOf("÷"));
  console.log(indexNumbers);
  const arrayMax = function (a,b) {return Math.max(a,b);}
  return  indexNumbers.reduce(arrayMax);
};

// 前の入力が演算子か否か
function lastBtn() {
  let operators = ["+","-","×","÷"];
  return operators.includes(result.slice(-1));
}

// +/-を押した時
function plusMinus () {
  if (result == "") {
    result = "-" ;
    screen.textContent = result;
  }else if (result[operatorLast()] == "+") {
    result = result.replace(result[operatorLast()],"-");
    screen.textContent = result;
    indexNumbers = [];
  }else if (result[operatorLast()] == "-") {
    result = result.replace(result[operatorLast()],"+");
    screen.textContent = result;
    indexNumbers = [];
  }else {
    let front = result.slice(0,operatorLast()+1);
    let back = result.slice(operatorLast()+1);
    result = front + "-" + back ;
    console.log(result); 
    screen.textContent = result;
  }
}