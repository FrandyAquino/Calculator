const buttons = document.querySelectorAll('#button');
const display = document.getElementById('screen-calculator');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const valor = button.getAttribute('data-valor');
        
        if (valor === '='){
            display.value = eval(display.value);
        } 
        else if (valor === 'C'){
            display.value = '';
        }
        else if (valor === '+/-'){
            display.value = display.value * -1;
        }
        else {
            display.value += valor;
        }
    });
})

