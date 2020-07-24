const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');


// Show Events
function showError(input, message){
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}
function showSuccess(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

//function isValid
function checkEmail(input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(input.value.trim())) {
        showSuccess(input);
    }else{
        showError(input, `Email 형식이 옳지 않습니다.`);
    }
}
// Check required fields
function checkRequrired(inputArr){
    inputArr.forEach(function(input){
        if(input.value.trim() == '') {
            showError(input, `${getFieldName(input)}, 한번 더 확인해주세요!!`)
        } else {
            showSuccess(input);
        }
    });
}
// Check input length
function checkLength(input, min, max){
    if(input.value.length < min){
        showError(input, `${getFieldName(input)} 최소 ${min} 글자 입니다.`);
    } else if(input.value.lenght > max) {
        showError(input, `${getFieldName(input)} 최대 ${max} 글자 입니다.`);
    } else{
        showSuccess(input);
    }
}

// Check Password Match
function checkPasswordsMatch(input1, input2){
    if(input1.value !== input2.value){
        showError(input2, `Password 가 일치하지 않습니다.`);
    }
}
// Get fieldName
function getFieldName(input){
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}
// Event Listeners
form.addEventListener('submit', function(e) {
    e.preventDefault();
    checkRequrired([username, email, password, password2]);
    checkLength(username, 3, 15);
    checkLength(password, 6, 25);
    checkEmail(email);
    checkPasswordsMatch(password, password2);
})