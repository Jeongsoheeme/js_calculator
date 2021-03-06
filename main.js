let numOne = '';
let operator = '';
let numTwo = '';
const $operator = document.querySelector('#operator');
const $result = document.querySelector('#result');
//querySelector과 getElementById의 차이점은 querySelector은 css선택자까지 입력해줘야하고
//getElementById는 기호없이 아이디만 입력해야한다 즉, id 있는 요소에만 사용 가능하다.
//html 요소를 변수로 사용할 경우 같은 이름의 변수가 또 있다면 앞에 $를 붙여 구분 시킨다. ex) operator



const onClickNumber = (number) => () => {
  if (operator) {
    numTwo += number;
  } else {
    numOne += number;
  }
  console.log('numOne : ' + numOne, 'numTwo : ' + numTwo, 'operator : ' + operator);
  $result.value += number;
}

const onClickOperator = (op) => () => {
  if (numOne && !numTwo) {
    operator = op;
    $operator.value = op;
    $result.value = '';
  } else if (!numOne) {
    alert('숫자를 먼저 입력하세요.');
  }
}

const onClickClear = () => () => {
  console.log('reset');
  $operator.value = '';
  $result.value = '';
  numOne = operator = numTwo = '';
}

//if문
// const onClickCalculator = () => () => {
//   if (operator == '+') {
//     $result.value = parseInt(numOne) + parseInt(numTwo);
//     console.log($result.value);
//   } else if (operator == '-') {
//     $result.value = parseInt(numOne) - parseInt(numTwo);
//     console.log($result.value);
//   } else if (operator == '*') {
//     $result.value = parseInt(numOne) * parseInt(numTwo);
//     console.log($result.value);
//   } else if (operator == '/') {
//     $result.value = parseInt(numOne) / parseInt(numTwo);
//     console.log($result.value);
//   }
// }

//switch문
const onClickCalculator = () => () => {
  switch (operator) {
    case '+':
      $result.value = parseInt(numOne) + parseInt(numTwo);
      console.log($result.value);
      break;
    case '-':
      $result.value = parseInt(numOne) - parseInt(numTwo);
      console.log($result.value);
      break;
    case '*':
      $result.value = parseInt(numOne) * parseInt(numTwo);
      console.log($result.value);
      break;
    case '/':
      $result.value = parseInt(numOne) / parseInt(numTwo);
      console.log($result.value);
      break;
    default:
      break;
  }
}

document.querySelector('#num-0').addEventListener('click', onClickNumber('0'));
document.querySelector('#num-1').addEventListener('click', onClickNumber('1'));
document.querySelector('#num-2').addEventListener('click', onClickNumber('2'));
document.querySelector('#num-3').addEventListener('click', onClickNumber('3'));
document.querySelector('#num-4').addEventListener('click', onClickNumber('4'));
document.querySelector('#num-5').addEventListener('click', onClickNumber('5'));
document.querySelector('#num-6').addEventListener('click', onClickNumber('6'));
document.querySelector('#num-7').addEventListener('click', onClickNumber('7'));
document.querySelector('#num-8').addEventListener('click', onClickNumber('8'));
document.querySelector('#num-9').addEventListener('click', onClickNumber('9'));
document.querySelector('#plus').addEventListener('click', onClickOperator('+'));
document.querySelector('#minus').addEventListener('click', onClickOperator('-'));
document.querySelector('#divide').addEventListener('click', onClickOperator('/'));
document.querySelector('#multiply').addEventListener('click', onClickOperator('*'));
document.querySelector('#clear').addEventListener('click', onClickClear());
document.querySelector('#calculate').addEventListener('click', onClickCalculator());