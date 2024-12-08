const form = document.getElementById('loginForm');

form.addEventListener("submit", async function (e){
    e.preventDefault();
    const data = new FormData(form);
    const object = {};
    data.forEach((value,key) => object[key]=value);
    const response = await fetch('/api/sessions/login', {
        method:'POST',
        body:JSON.stringify(object),
        headers:{
            "Content-Type": "application/json"
        },
        credentials: 'include'
    })
    const result = await response.json();
    if (response.status === 200) {
        return window.location.replace("http://localhost:3000/");
      }
});
