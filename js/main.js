$(document).ready(function () {
    let type_po = '';

    new CustomSelect('#select-1', {
        name: 'po',
        options: [
            ['Тип первый', 'Тип первый'],
            ['Тип второй', 'Тип второй'],
            ['Тип третий', 'Тип третий']
        ],
        onSelected(select) {
            type_po = select.value
        },
    });

    const formRegistration = $('.form-registration');
    const name = $('.form-registration input[name="name"]')
    const email = $('.form-registration input[name="email"]')
    const tel = $('.form-registration input[name="tel"]')
    const name_po = $('.form-registration input[name="name_po"]')
    const text = $('.form-registration textarea[name="text"]')

    tel.mask("+7 (999) 99-99-999");

    formRegistration.on('submit', function (e) {
        e.preventDefault();
        $('.form-registration__label-error').remove();
        const field = {
            name: name.val().trim(),
            email: email.val().trim(),
            tel: tel.val().trim(),
            name_po: name_po.val().trim(),
            type_po: type_po,
            text: text.val().trim(),
        }
        if (field.name.length < 1) {
            name.before("<label class='form-registration__label-error'>Заполните поле</label>");
        }
        if (field.email.length < 1) {
            email.before("<label class='form-registration__label-error'>Заполните поле</label>");
        }
        if (field.tel.length < 1) {
            tel.before("<label class='form-registration__label-error'>Заполните поле</label>");
        }
        if (field.name_po.length < 1) {
            name_po.before("<label class='form-registration__label-error'>Заполните поле</label>");
        }
        if (field.type_po === '') {
            $('#select-1').before("<label class='form-registration__label-error'>Заполните поле</label>");
        }
        if (field.text.length < 1) {
            text.before("<label class='form-registration__label-error'>Заполните поле</label>");
        }
        $.ajax({
            url: '',
            method: '',
            dataType: 'html',
            data: $(this).serialize(),
            success: function(){
                console.log(field)
                e.target.reset();
            },
            beforeSend: function() {
                if ($('.form-registration__label-error').length > 0) {
                    return false;
                }
            },
        });
    });
});
