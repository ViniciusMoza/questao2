document.getElementById('verifyButton').addEventListener('click', function() {
    let num = parseInt(document.getElementById('numInput').value);
    let isFibonacci = checkFibonacci(num);
    
    if (isFibonacci) {
        document.getElementById('result').innerText = num + ' pertence à sequência de Fibonacci.';
    } else {
        document.getElementById('result').innerText = num + ' não pertence à sequência de Fibonacci.';
    }
});


function checkFibonacci(num) {
    if (num === 0 || num === 1) {
        return true;
    }

    let a = 0;
    let b = 1;
    let nextFib = a + b;

    while (nextFib <= num) {
        if (nextFib === num) {
            return true;
        }
        a = b;
        b = nextFib;
        nextFib = a + b;
    }

    return false;
}
