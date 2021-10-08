document.getElementById('btncalc').onclick = function() {
    let numbers = [];
    for (let i=0; i < 10; i++) {
        let randomNumber = (Math.round(Math.random() * 20) - 10);
        numbers.push(randomNumber);
    }

    document.querySelector('.generated').innerHTML = `Generated: ${numbers.join(' ')}`;

    let max = Math.max(...numbers);
    document.querySelector('.max').innerHTML = `Max: ${max}`;

    let min = Math.min(...numbers);
    document.querySelector('.min').innerHTML = `Min: ${min}`;

    let sum = numbers.reduce((a, b) => a + b, 0);
    document.querySelector('.sum').innerHTML = `Sum: ${sum}`;

    let average = sum/10;
    document.querySelector('.average').innerHTML = `Average: ${average}`;

    let product = numbers.reduce( (a, b) => a * b );
    document.querySelector('.product').innerHTML = `Product: ${product}`;

}