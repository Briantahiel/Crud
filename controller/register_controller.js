const form = document.querySelector("[data-form]");


const createClient = (name, email) => {
    return fetch("http://localhost:3000/profile", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({name, email, id: uuid.v4()})
    });
}

form.addEventListener("submit", (e) => {
   e.preventDefault();
   const name = document.querySelector("[data-name]").value;
   const email = document.querySelector("[data-email]").value;
   createClient(name, email)
   .then(res => {
    window.location.href = "/screens/registro_completado.html"
   })
   .catch(err => console.log(err));
   console.log(name, email)
});



