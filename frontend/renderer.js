fetch('http://127.0.0.1:8000/api/message')
    .then(res => res.json())
    .then(data => {
        document.getElementById('message').innerText = data.message;
    })
    .catch(err => {
        document.getElementById('message').innerText = "Impossible de joindre le backend.";
        console.error(err);
    });
