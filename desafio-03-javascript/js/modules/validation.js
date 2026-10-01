import { saveDraft } from './storage.js';

dayjs.extend(window.dayjs_plugin_customParseFormat);

function getFieldError(field) {
    const value = field.value.trim();

    if (field.required && value === '') {
        return 'Preencha este campo obrigatório.';
    }
    if (value === '') {
        return '';
    }

    const minimum = field.getAttribute('minlength');
    const maximum = field.getAttribute('maxlength');
    if (minimum !== null && value.length < Number(minimum)) {
        return `Informe pelo menos ${minimum} caracteres.`;
    }
    if (maximum !== null && value.length > Number(maximum)) {
        return `Informe no máximo ${maximum} caracteres.`;
    }

    if (field.id === 'email' && field.validity.typeMismatch) {
        return 'Informe um e-mail válido, como nome@dominio.com.';
    }

    if (field.id === 'cpf' && !/^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(value)) {
        return 'Use o formato 000.000.000-00 para o CPF.';
    }
    if (field.id === 'telefone' && !/^\d{2} \d{4,5}-\d{4}$/.test(value)) {
        return 'Informe DDD e telefone, como 48 99999-9999 ou 48 3333-3333.';
    }
    if (field.id === 'cep' && !/^\d{5}-\d{3}$/.test(value)) {
        return 'Use o formato 00000-000 para o CEP.';
    }
    if (field.id === 'numero' && !/^(\d+|s\/n)$/i.test(value)) {
        return 'Informe um número ou S/N.';
    }

    if (field.id === 'nascimento') {
    const birthDate = dayjs(value, 'YYYY-MM-DD', true);
    const today = dayjs();

    if (!birthDate.isValid()) {
        return 'Informe uma data de nascimento válida.';
    }

    if (birthDate.isAfter(today, 'day')) {
        return 'A data de nascimento não pode estar no futuro.';
    }

    const age = today.diff(birthDate, 'year');

    if (age < 18) {
        return 'É necessário ter pelo menos 18 anos para realizar o cadastro.';
    }
}

    if (!field.validity.valid) {
        return 'Confira o formato e o preenchimento deste campo.';
    }
    return '';
}

function formatPhone(value) {
    const digits = value.replace(/\D/g, '').slice(0, 11);
    if (digits.length <= 2) {
        return digits;
    }

    const areaCode = digits.slice(0, 2);
    const phoneNumber = digits.slice(2);
    if (phoneNumber.length <= 4) {
        return `${areaCode} ${phoneNumber}`;
    }

    let hyphenPosition = 4;
    if (phoneNumber.length === 9) {
        hyphenPosition = 5;
    }
    return `${areaCode} ${phoneNumber.slice(0, hyphenPosition)}-${phoneNumber.slice(hyphenPosition)}`;
}

function formatCep(value) {
    const digits = value.replace(/\D/g, '').slice(0, 8);
    if (digits.length <= 5) {
        return digits;
    }

    const firstPart = digits.slice(0, 5);
    const secondPart = digits.slice(5);

    return `${firstPart}-${secondPart}`;
}

function formatCpf(value) {
    const digits = value.replace(/\D/g, '').slice(0, 11);
    if (digits.length <= 3) {
        return digits;
    }
    if (digits.length <= 6) {
        return `${digits.slice(0, 3)}.${digits.slice(3)}`;
    }
    if (digits.length <= 9) {
        return `${digits.slice(0, 3)}.${digits.slice(3, 6)}.${digits.slice(6)}`;
    }
    
    return `${digits.slice(0, 3)}.${digits.slice(3, 6)}.${digits.slice(6, 9)}-${digits.slice(9)}`;
}

function updateField(field) {
    const error = getFieldError(field);
    const messageId = `erro-${field.id}`;
    const message = document.getElementById(messageId);

    field.setAttribute('aria-describedby', messageId);
    field.setAttribute('aria-invalid', String(error !== ''));
    field.classList.toggle('campo-invalido', error !== '');
    field.classList.toggle('campo-valido', error === '' && field.value.trim() !== '');
    message.textContent = error;
    message.classList.toggle('visivel', error !== '');
    field.dataset.validated = 'true';
    return error === '';
}

function isRegistrationField(element) {
    return element.matches('input, select, textarea') &&
        element.closest('#formulario-cadastro') !== null;
}

export function startValidation(content) {
    content.addEventListener('input', function (event) {
        const field = event.target;
        if (!isRegistrationField(field)) {
            return;
        }
        
        if (field.id === 'cpf') {
            field.value = formatCpf(field.value);
        }

        if (field.id === 'telefone') {
            field.value = formatPhone(field.value);
        }

        if (field.id === 'cep') {
            field.value = formatCep(field.value);
        }

        if (field.dataset.validated === 'true') {
            updateField(field);
        }
        document.getElementById('feedback-cadastro').textContent = '';

        saveDraft(field.closest('#formulario-cadastro'));
    });

    content.addEventListener('focusout', function (event) {
        if (isRegistrationField(event.target)) {
            updateField(event.target);
        }
    });

    content.addEventListener('submit', function (event) {
        const form = event.target;
        if (form.id !== 'formulario-cadastro') {
            return;
        }
        event.preventDefault();

        const fields = form.querySelectorAll('input, select, textarea');
        let firstInvalid = null;
        fields.forEach(function (field) {
            const valid = updateField(field);
            if (!valid && firstInvalid === null) {
                firstInvalid = field;
            }
        });

        const feedback = document.getElementById('feedback-cadastro');
        if (firstInvalid !== null) {
            feedback.textContent = 'Revise os campos indicados antes de continuar.';
            firstInvalid.focus();
            return;
        }
        feedback.textContent = 'Preenchimento validado. Demonstração: nenhum cadastro foi enviado. O preenchimento permanece como rascunho neste navegador.';
    });
}
