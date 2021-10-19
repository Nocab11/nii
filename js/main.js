$(document).ready(function () {
    let type_po = '';
    let select_index = '';
    console.log('type_po', type_po)
    new CustomSelect('#select-1', {
        name: 'po',

        options: [
            ['Тип первый', 'Тип первый'],
            ['Тип второй', 'Тип второй'],
            ['Тип третий', 'Тип третий']
        ],
        onSelected(select, option) {
            // выбранное значение

            type_po = select.value
            console.log(`Выбранное значение: ${type_po}`);
            console.log(type_po.length);
            // индекс выбранной опции
            select_index = select.selectedIndex
            console.log(`Индекс выбранной опции: ${select.selectedIndex}`);
            // выбранный текст опции
            const text = option ? option.textContent : '';
            console.log(`Выбранный текст опции: ${text}`);
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
        console.log($('.form-registration__label-error').length)
        const field = {
            name: name.val().trim(),
            email: email.val().trim(),
            tel: tel.val().trim(),
            name_po: name_po.val().trim(),
            type_po: type_po,
            text: text.val().trim(),
        }
        if (field.name.length < 1) {
            name.before("<label class='form-registration__label-error'>Заполните поле </label>");
        }
        if (field.email.length < 1) {
            email.before("<label class='form-registration__label-error'>Заполните поле </label>");
        }
        if (field.tel.length < 1) {
            tel.before("<label class='form-registration__label-error'>Заполните поле </label>");
        }
        if (field.name_po.length < 1) {
            name_po.before("<label class='form-registration__label-error'>Заполните поле </label>");
        }
        if (field.type_po === '') {
            $('#select-1').before("<label class='form-registration__label-error'>Заполните поле </label>");
        }
        if (field.text.length < 1) {
            text.before("<label class='form-registration__label-error'>Заполните поле </label>");
        }
        $.ajax({
            url: '',
            method: 'post',
            dataType: 'html',
            data: $(this).serialize(),
            success: function(data){
                console.log(field)
            },
            beforeSend: function() {
                if ($('.form-registration__label-error').length > 0) {
                    return false;
                }
                // $empty = formRegistration.find("input").filter(function() {
                //     return this.value === "";
                // });

                // if (field.email.length === 0) {
                //     email.before("<label class='form-registration__label-error'>Заполните поле </label>");
                //     return false;
                // } else {
                //     $('.form-registration__label-error').remove();
                // }
                // if (field.tel.length === 0) {
                //     tel.before("<label class='form-registration__label-error'>Заполните поле </label>");
                // } else {
                //     $('.form-registration__label-error').remove();
                // }
                // if (field.name_po.length === 0) {
                //     name_po.before("<label class='form-registration__label-error'>Заполните поле </label>");
                // } else {
                //     $('.form-registration__label-error').remove();
                // }
                // if (field.type_po === '') {
                //     $('#select-1').before("<label class='form-registration__label-error'>Заполните поле </label>");
                // } else {
                //     $('.form-registration__label-error').remove();
                // }
                // if (field.text.length === 0) {
                //     text.before("<label class='form-registration__label-error'>Заполните поле </label>");
                //     return false;
                // } else {
                //     $('.form-registration__label-error').remove();
                // }



                // if($empty.length) {
                //     console.log('$empty', $empty)
                //     alert('You must fill out all fields in order to submit a change');
                //     return false;
                // }else{
                //     return true;
                // };
            },
        });

    })
    const form = document.getElementById('form');

    function getFormValue(event) {
        event.preventDefault();
        const name = form.querySelector('[name="name"]'), //получаем поле name
            age = form.querySelector('[name="age"]'), //получаем поле age
            terms = form.querySelector('[name="terms"]'), //получаем поле terms
            plan = form.querySelector('[name="plan"]'); //получаем поле plan
        const data = {
            name: name.value,
            age: age.value,
            plan: plan.value,
            terms: terms.checked,
            // sel: sel
        };
        console.log(data);
    }

    $('#form').on('submit', function (e) {
        e.preventDefault();
        const name = form.querySelector('[name="name"]'), //получаем поле name
            age = form.querySelector('[name="age"]'), //получаем поле age
            terms = form.querySelector('[name="terms"]'), //получаем поле terms
            plan = form.querySelector('[name="plan"]'); //получаем поле plan
        const items = {
            name: name.value,
            age: age.value,
            plan: plan.value,
            terms: terms.checked,
            // sel: sel
        };

        $.ajax({
            url: '',
            method: 'post',
            dataType: 'html',
            data: $(this).serialize(),
            success: function(data){
                console.log(items)
            },
            beforeSend: function() {
                $empty = $('#form').find("input").filter(function() {
                    return this.value === "";
                });
                if($empty.length) {
                    alert('You must fill out all fields in order to submit a change');
                    return false;
                }else{
                    return true;
                };
            },
        });
        e.target.reset()
    })
});
