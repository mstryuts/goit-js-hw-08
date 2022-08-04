import throttle from 'lodash.throttle';

const refs = {
    form : document.querySelector('.feedback-form'),
    input : document.querySelector('.feedback-form input'),
    message : document.querySelector('.feedback-form textarea'),
}

const formData = {};
