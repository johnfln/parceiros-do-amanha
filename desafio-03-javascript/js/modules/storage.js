const draftKey = 'ong-rascunho-cadastro';

export function saveDraft(form) {
    const data = {};
    const fields = form.querySelectorAll('input, select, textarea');

    fields.forEach(function (field) {
        data[field.id] = field.value;
    });

    try {
        localStorage.setItem(draftKey, JSON.stringify(data));
    } catch (error) {
        console.error('Não foi possível salvar o rascunho.', error);
    }
}

export function restoreDraft() {
    const form = document.getElementById('formulario-cadastro');
    if (!form) {
        return;
    }

    try {
        const savedText = localStorage.getItem(draftKey);
        if (savedText === null) {
            return;
        }

        const data = JSON.parse(savedText);
        if (data === null || typeof data !== 'object') {
            return;
        }

        const fields = form.querySelectorAll('input, select, textarea');
        fields.forEach(function (field) {
            if (typeof data[field.id] === 'string') {
                field.value = data[field.id];
            }
        });
    } catch (error) {
        console.error('Não foi possível restaurar o rascunho.', error);
    }
}