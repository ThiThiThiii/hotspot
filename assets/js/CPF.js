function formatarEValidarCPF(campo) {
            let cpf = campo.value.replace(/\D/g, '');
            if (cpf.length <= 11) {
                cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2");
                cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2");
                cpf = cpf.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
                campo.value = cpf;
            }
            validarCPF(cpf);
        }

        function validarCPF(cpf) {
            const resultado = document.getElementById('resultado');
            const cpfLimpo = cpf.replace(/\D/g, '');

            if (cpfLimpo.length !== 11 || /^(\d)\1+$/.test(cpfLimpo)) {
                resultado.textContent = 'CPF inválido!';
                resultado.className = 'invalid';
                return false;
            }

            let soma = 0;
            let resto;

            for (let i = 1; i <= 9; i++) {
                soma += parseInt(cpfLimpo.substring(i-1, i)) * (11 - i);
            }

            resto = (soma * 10) % 11;
            if (resto === 10 || resto === 11) {
                resto = 0;
            }
            if (resto !== parseInt(cpfLimpo.substring(9, 10))) {
                resultado.textContent = 'CPF inválido!';
                resultado.className = 'invalid';
                return false;
            }

            soma = 0;
            for (let i = 1; i <= 10; i++) {
                soma += parseInt(cpfLimpo.substring(i-1, i)) * (12 - i);
            }

            resto = (soma * 10) % 11;
            if (resto === 10 || resto === 11) {
                resto = 0;
            }
            if (resto !== parseInt(cpfLimpo.substring(10, 11))) {
                resultado.textContent = 'CPF inválido!';
                resultado.className = 'invalid';
                return false;
            }

            resultado.textContent = 'CPF válido!';
            resultado.className = 'valid';
            return true;
        }