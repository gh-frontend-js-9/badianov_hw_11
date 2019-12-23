let message = {
    loading: 'loading...',
    success: 'success',
    failure: 'failure...',
};

let form = document.querySelector('.form'),
    input = form.getElementsByTagName ('input'),
    statusMessage = document.createElement('div');
 

statusMessage.classList.add('status');

function sendForm(form){

    form.addEventListener('submit', event => {
        event.preventDefault();
        form.appendChild(statusMessage);

        let formData = new FormData(form);

    function postData() {
        return new Promise( (resolve, reject) => {
            let request = new XMLHttpRequest();
            request.open('POST', 'http:/localhost:3000/api/users/login');
            request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');

            request.onreadystatechange = function () {
                if(request.readyState < 4) {
                    resolve();
                } else if (request.readyState === 4) {
                    if (request.status == 200 && request.status < 300) {
                        resolve();
                    } else {
                        reject();
                    }
                }
            };

            let obj = {};
            formData.forEach ( (value, key) => {
                obj[key] = value;
            });
            let json = JSON.stringify(obj);
            request.send(json);

        });
    }

    function clearInput() {
        for (let i = 0; i < input.length; i++) {
            input[i].value = '';
        }
    }

    postData (formData)
        .then (() => statusMessage.innerHTML = message.loading)
        .then (() => statusMessage.innerHTML = message.sucsess)
        .catch (() => statusMessage.innerHTML = message.failure)
        .then (clearInput);
    });

}

sendForm(form);