window.onload = function () {
    let username = document.getElementById('udername');
    let error = document.getElementById('error');

    document.getElementById('form').addEventListener('submit', function (e) {
        e.preventDefault();
        if (validateUsername()) {
            hideError();
            window.alert('Formularz został wysłany')
        }
    });


    function validateUsername() {
        let userValid = true;
        return userValid;

    }
        function checkRequired() {
        return username.value.length > 0
        }

        if (!checkRequired()) {
            userValid = false;
        } else if (!checkMinMaxLength()) {
            userValid = false;
        }

        checkMinMaxLength(){
            return username.value.length >= 3 && username.value.length <= 10;
    }
        function showErrorText(err) {
            error.textContent = err;
            error.removeAttribute('hidden');
        }

        function hideError() {
            error.setAttribute('hidden','')
        }

};

//window.onload = function () {
//     let username = document.getElementById('username');
//     let error = document.getElementById('error');
//
//     document.getElementById('form').addEventListener('submit', function (e) {
//         e.preventDefault();
//         if (validateUsername()) {
//             hideError();
//             window.alert('Formularz został wysłany')
//         }
//     });
//
//
//     function validateUsername() {
//         let userValid = true;
//         if (!checkRequired()) {
//             userValid = false;
//             showErrorText('Nazwa użytkownika nie może być pusta.');
//         } else if (!checkMinMaxLenght()) {
//             userValid = false;
//             showErrorText('Nazwa użytkownika powinna mieć długość od 3 do 10 znaków');
//         }
//         return userValid;
//     }
//
//     function checkRequired() {
//         return username.value.length > 0;
//     }
//
//     function checkMinMaxLenght() {
//         return username.value.length >= 3 && username.value.length <= 10;
//     }
//
//     function showErrorText(err) {
//         error.textContent = err;
//         error.removeAttribute('hidden');
//     }
//
//     function hideError() {
//         error.setAttribute('hidden', '');
//     }
//
//
// };