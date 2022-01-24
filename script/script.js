const $form = document.querySelector('#form')

console.log($form);

$form.addEventListener('submit', handleSubmit)

async function handleSubmit(event) {
    event.preventDefault();
    let status = document.getElementById("status");
    let data = new FormData(event.target);
    fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        status.textContent = `Gracias ${$form.name.value}, tu mensaje fue enviado!`;
        form.reset()
    }).catch(error => {
        status.textContent = "Oops! Hubo un problema, tu mensaje no fue enviado"
    });
}