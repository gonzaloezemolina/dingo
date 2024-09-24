const form = document.getElementById('registerForm');

form.addEventListener("submit", async function (e){
    e.preventDefault();
    const data = new FormData(form);
    const object = {};
    data.forEach((value,key) => object[key]=value);
    const response = await fetch('/api/sessions/registro', {
        method:'POST',
        body:JSON.stringify(object),
        headers:{
            "Content-Type": "application/json"
        }
    })
    const result = await response.json();
    console.log(result);
})