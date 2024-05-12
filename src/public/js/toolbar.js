const generateNavBar = document.createElement("nav");
generateNavBar.classList("tools_container")
generateNavBar.innerHTML = ` <ul>
<a href="/crm">CRM</a><li></li>
<li>Marketing</li>
<li>Contenidos</li>
<li>Ventas</li>
<li>Buyer Persona</li>
</ul>`;

document.body.appendChild(generateNavBar)