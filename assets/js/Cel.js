function formatarCelular(input) {
  var numero = input.value;
  var numeros = numero.replace(/\D/g, ''); // Remove tudo que não é dígito
  var formatado = numeros.replace(/^(\d{2})(\d{5})(\d{4}).*/, '($1) $2-$3'); // Formata para (11) 11111-1111
  input.value = formatado;
}