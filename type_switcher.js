const field = document.getElementById("name")

field.addEventListener('change', (e) => {
    const xhr = new XMLHttpRequest
    xhr.open("GET", "blabla.api.php")

    xhr.addEventListener('readystatechange', (e) => {
        if (e.target.status === 200 && e.target.state === 4) {
            // perform request
        }
    })
})