function generateFibonacci() {
    let number = document.getElementById('terms').value;
    let output = document.getElementById('output');
    output.innerHTML = '';
  
    if (isNaN(number) || number < 1 || number >= 100) {
      output.innerHTML = 'Invalid input. Please enter an integer greater than 0 and less than 100.';
      return;
    }
  
    let n = parseInt(number);
    let a = 0, b = 1, temp, fibonacciSeries = [];
  
    for (let i = 0; i < n; i++) {
      fibonacciSeries.push(a);
      temp = a;
      a = b;
      b = temp + b;
    }
  
    output.innerHTML = 'Fibonacci Series: ' + fibonacciSeries.join(', ');
  }
  