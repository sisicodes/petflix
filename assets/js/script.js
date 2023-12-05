const myform = document.getElementById('myform');

myform.noValidate = true;


myform.addEventListener('submit', validateForm)


function validateForm(e) {
    const form = e.target;
    console.log('testing validation')
    if (form.checkValidity()) {
        //form is valid 
    } else {
        //form is not valid - cancel submit
        e.preventDefault();
        //apply invalid class 
        Array.from(form.elements).forEach(i => {
            let select = '#'+i.id+ ' ~ div.errorDes';
            if (i.id != '') {
                let errorLabel = document.querySelector(select);
                if (i.checkValidity()) {
                    //field is valid - remove class
                    i.classList.remove('error');
                    errorLabel.textContent = '';
                } else {
                    //field is invalid - add class
                    i.classList.add('error');
                    if(i.validity.valueMissing) {
                        errorLabel.textContent = 'required field';
                    }
                }
            }
        })
    };
};

const fname = document.getElementById('fname');
const nameError = document.querySelector('#fname ~ div.errorDes')

fname.addEventListener('focusout', (event) => {
    if (fname.validity.valueMissing) {
        nameError.textContent = '*required field';
        fname.classList.add('error');
    } else {
        nameError.textContent = '';
        fname.classList.remove('error');
    };
});
const confirmPassword = document.getElementById('confirm');
const password = document.getElementById('password');
const confirmError = document.querySelector('#confirm ~ div.errorDes');

confirmPassword.addEventListener('focusout', (event) => {
    
    if (confirmPassword.validity.valueMissing) {
        confirmError.textContent = 'required field';
        confirmPassword.classList.add('error');
    } else if (confirmPassword.value != password.value) {
        confirmError.textContent= 'password does not match';
        console.log('password match error');
        confirmPassword.classList.add('error');
        
    } else {
        confirmError.textContent='';
        confirmPassword.classList.remove('error');
    }
})

const passwordError = document.querySelector('#password ~ div.errorDes');

password.addEventListener('focusout', (event) => {
    if (password.checkValidity()) {
        password.classList.remove('error');
        passwordError.textContent = '';
    } else {
        password.classList.add('error')
        if (password.validity.valueMissing) {
            passwordError.textContent = 'required field'
        } else if (password.validity.tooShort) {
            passwordError.textContent = 'password must be between 8 and 25 characters'
        } else if (password.validity.patternMismatch) {
            passwordError.textContent = 'password must include a uppercase, lowercase, number, and special character'  
        }
    }
})

const email = document.getElementById('email');
const emailError = document.querySelector('#email ~ div.errorDes');

email.addEventListener('focusout', (event) => {
    if (email.checkValidity()) {
        email.classList.remove('error')
        emailError.textContent = '';
    } else {
        email.classList.add('error')
        if (email.validity.valueMissing) {
            emailError.textContent ='required field'
        } else {
            emailError.textContent = 'please enter a valid email'
        }
    }
})

