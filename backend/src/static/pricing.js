const plans = [
    {
        title: "Starter",
        monthlyPrice: 7000,
        yearlyPrice: 70000,
        features: [
            "1 Cuenta",
            "Almacenamiento básico",
            "Gestión de contactos",
            "Gestión de tareas y proyectos básicos",
            "Calendario",
            "Time tracker",
            "Email templates básicos",
            "Formularios de contacto de leads",
            "Creador de portafolio web básico",
            "Contratos y plantillas básicas",
            "Gestor de aprobaciones",
            "Pipeline/Oportunidades",
            "Finanzas básicas",
            "Integraciones: Stripe, PayPal, MercadoPago, Notion"
        ],
        color: "starter"
    },
    {
        title: "Pro",
        monthlyPrice: 14000,
        yearlyPrice: 140000,
        features: [
            "Todo lo de Starter",
            "Almacenamiento medio",
            "Scheduler de social media",
            "Automatización avanzada de emails",
            "Acceso a red DingoConnect",
            "Gestión de campañas",
            "Email marketing avanzado",
            "Formularios de contacto y lead avanzados",
            "Contratos y plantillas avanzadas",
            "CMS para creación de portafolios/landing pages",
            "Test A/B en landing pages",
            "Integración con APIs adicionales: Meta Ads, LinkedIn, WhatsApp, Microsoft Teams, ManyChat",
            "Finanzas avanzadas"
        ],
        color: "pro"
    },
    {
        title: "Growth",
        monthlyPrice: 24000,
        yearlyPrice: 240000,
        features: [
            "Todo lo de Pro",
            "Hasta 5 cuentas",
            "Almacenamiento ilimitado",
            "Soporte prioritario",
            "Gestión de equipo",
            "AI Avanzada",
            "CMS Avanzado",
            "Análisis predictivo de ventas",
            "Diagramas de flujos",
            "Integración con Figma, Slack y Github",
            "Gestión de proyectos avanzada",
            "Flujos de trabajo automatizados"
        ],
        color: "growth"
    }
];

const pricingContainer = document.getElementById('pricing-container');
const pricingToggle = document.getElementById('pricing-toggle');
const monthlyLabel = document.getElementById('monthly-label');
const annualLabel = document.getElementById('annual-label');

function createPricingCard(plan, isAnnual) {
    const price = isAnnual ? plan.yearlyPrice : plan.monthlyPrice;
    const period = isAnnual ? '/año' : '/mes';

    const card = document.createElement('div');
    card.className = `pricing-card ${plan.color}`;

    card.innerHTML = `
        <div class="pricing-header">
            <h2 class="pricing-title">${plan.title}</h2>
            <div class="pricing-price">
                $${price.toLocaleString()}
                <span class="pricing-period">${period}</span>
            </div>
        </div>
        <ul class="pricing-features">
            ${plan.features.map(feature => `<li>${feature}</li>`).join('')}
        </ul>
        <a href="#" class="pricing-button">Elegir Plan</a>
    `;

    return card;
}

function renderPricingCards(isAnnual) {
    pricingContainer.innerHTML = '';
    plans.forEach(plan => {
        const card = createPricingCard(plan, isAnnual);
        pricingContainer.appendChild(card);
    });
}

pricingToggle.addEventListener('change', (e) => {
    const isAnnual = e.target.checked;
    renderPricingCards(isAnnual);
    monthlyLabel.classList.toggle('active', !isAnnual);
    annualLabel.classList.toggle('active', isAnnual);
});

// Inicializar con precios mensuales
renderPricingCards(false);