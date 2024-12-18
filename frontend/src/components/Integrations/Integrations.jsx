import React from 'react'
import './Integrations.css'

const Integrations = () => {
    const notion = './notion.png'
    const stripe = './stripe.webp'
    const paypal = './paypal.png'
    const gmail = './gmail.png'
    const meta = './meta.jpg'
    const linkedin = './linkedin.jpg'
    const whatsapp = './whatsapp.jpg'
    const mercadopago = './mercadopago.png'
    const mercadolibre = './mercadolibre.webp'
    const microsoftTeams = './microsoftteams.png'
    const tiendaNube = './tiendanube.png'
    const manyChat = './manychat.png'

  return (
    <div class="containerIntegrations">
    <div class="grid">
        <div class="card notion">
            <div class="card-header">
                {/* <i class="card-icon" data-lucide="book">{notion}</i> */}
                <img className='card-icon' src={notion} alt="logo de notion"/>
                <span class="badge">Productividad</span>
            </div>
            <h3>Notion</h3>
            <p>Sincroniza tus notas y documentos con tu CRM</p>
            <button class="button" id='notion'>Conectar</button>
        </div>
        <div class="card meta">
            <div class="card-header">
                <img className='card-icon' src={meta} alt="logo de meta"/>
                <span class="badge">Redes Sociales</span>
            </div>
            <h3>Meta</h3>
            <p>Gestiona tus campañas de Facebook e Instagram</p>
            <button class="button">Conectar</button>
        </div>
        <div class="card linkedin">
            <div class="card-header">
                <img className='card-icon' src={linkedin} alt="logo de linkedin"/>
                <span class="badge">Redes Sociales</span>
            </div>
            <h3>LinkedIn</h3>
            <p>Conecta con tu red profesional</p>
            <button class="button">Conectar</button>
        </div>
        <div class="card gmail">
            <div class="card-header">
                <img className='card-icon' src={gmail} alt="logo de gmail"/>
                <span class="badge">Mensajería</span>
            </div>
            <h3>Gmail</h3>
            <p>Sincroniza tu cuenta de Gmail</p>
            <button class="button">Conectar</button>
        </div>
        <div class="card whatsapp">
            <div class="card-header">
                <img className='card-icon' src={whatsapp} alt="logo de notion"/>
                <span class="badge">Mensajería</span>
            </div>
            <h3>WhatsApp</h3>
            <p>Gestiona tus conversaciones comerciales</p>
            <button class="button">Conectar</button>
        </div>
        <div class="card microsoft-teams">
            <div class="card-header">
                <img className='card-icon' src={microsoftTeams} alt="logo de microsoft teams" />
                <span class="badge">Colaboración</span>
            </div>
            <h3>Microsoft Teams</h3>
            <p>Integra las comunicaciones de tu equipo</p>
            <button class="button">Conectar</button>
        </div>
    
        <div class="card manychat">
            <div class="card-header">
                <img className='card-icon' src={manyChat} alt="logo de manyChat"/>
                <span class="badge">Marketing</span>
            </div>
            <h3>ManyChat</h3>
            <p>Automatiza tus conversaciones</p>
            <button class="button">Conectar</button>
        </div>

        <div class="card mercadopago">
            <div class="card-header">
                <img className='card-icon' src={mercadopago} alt="logo de mercado pago" />
                <span class="badge">Cuentas financieras</span>
            </div>
            <h3>Mercado Pago</h3>
            <p>Vincula tu cuenta de Mercado Pago</p>
            <button class="button">Conectar</button>
        </div>

        <div class="card stripe">
            <div class="card-header">
                <img className='card-icon' src={stripe} alt="logo de stripe" />
                <span class="badge">Cuentas financieras</span>
            </div>
            <h3>Stripe</h3>
            <p>Mira tu cuenta de Stripe en Dingo</p>
            <button class="button">Conectar</button>
        </div>

        <div class="card paypal">
            <div class="card-header">
                <img className='card-icon' src={paypal} alt="logo de paypal" />
                <span class="badge">Cuentas financieras</span>
            </div>
            <h3>PayPal</h3>
            <p>Añadi PayPal para manejar tus ingresos</p>
            <button class="button">Conectar</button>
        </div>
    </div>
</div>
  )
}

export default Integrations



   