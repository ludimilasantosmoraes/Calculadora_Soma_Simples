const form = document.getElementById('sum-form');

console.log(form);

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const valor1 = parseFloat(document.getElementById('N1').value);
    const valor2 = parseFloat(document.getElementById('N2').value);

    window.alert(valor1 + valor2);
});
