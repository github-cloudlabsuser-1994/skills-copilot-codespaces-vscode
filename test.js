const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter the first number: ', (firstNumber) => {
  rl.question('Enter the second number: ', (secondNumber) => {
    rl.question('Enter the operator ( +, -, *, / ): ', (operator) => {
      let result;
      switch(operator) {
        case '+':
          result = parseFloat(firstNumber) + parseFloat(secondNumber);
          break;
        case '-':
          result = parseFloat(firstNumber) - parseFloat(secondNumber);
          break;
        case '*':
          result = parseFloat(firstNumber) * parseFloat(secondNumber);
          break;
        case '/':
          if(secondNumber != '0') {
            result = parseFloat(firstNumber) / parseFloat(secondNumber);
          } else {
            console.log('Error! Division by zero is not allowed.');
            rl.close();
            return;
          }
          break;
        default:
          console.log(`Error! Operator '${operator}' is not supported.`);
          rl.close();
          return;
      }
      console.log(`The result is: ${result}`);
      rl.close();
    });
  });
});