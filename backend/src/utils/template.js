import config from "../config/config.js";

export const createBudgetEmailTemplate = (user, cliente, budget) => {
    const acceptLink = `${config.back.BACKEND}/api/budgets/budgets/${budget._id}/response?action=accept`;
    const rejectLink = `${config.back.BACKEND}/api/budgets/budgets/${budget._id}/response?action=reject`;

    return `
   <!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Presupuesto de Diseño UX/UI para ${cliente.nombre}</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap');
        
        body {
      margin: 0;
    font-family: sans-serif;
    background-image: url('https://i.pinimg.com/originals/16/c9/4b/16c94b7f6e9ff75f3137ea0e6728509d.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    color: white;
    text-align: center;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    justify-content: center;
    align-items: center;
        }
        .container {
            max-width: 600px;
            margin: 20px auto;
            background-color: rgba(255, 255, 255, 0.9);
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 0 20px rgba(0,0,0,0.1);
        }
        .header {
            background: linear-gradient(135deg, #6e8efb, #a777e3);
            color: white;
            text-align: center;
            padding: 30px;
        }
        .header h1 {
            margin: 0;
            font-size: 28px;
            font-weight: 600;
                font-size: 3em;
    margin-bottom: 1em;
        }
        .content {
            padding: 30px;
            color: #555;
        }
        .signature {
            text-align: center;
            margin-top: 30px;
        }
        .actions {
            display: flex;
            justify-content: center;
            margin-top: 30px;
        }
        .btn {
            display: inline-block;
            padding: 12px 24px;
            color: white;
            text-decoration: none;
            border-radius: 25px;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 1px;
            transition: all 0.3s ease;
            margin: 0 10px;
        }
        .btn-accept {
            background-color: #4CAF50;
        }
        .btn-reject {
            background-color: #f44336;
        }
        .btn:hover {
            transform: translateY(-3px);
            box-shadow: 0 4px 10px rgba(0,0,0,0.2);
        }
        .footer {
            background-color: rgba(248, 248, 248, 0.8);
            text-align: center;
            padding: 20px;
            font-size: 14px;
            color: #888;
        }
        @media only screen and (max-width: 600px) {
            .container {
                margin: 0;
                border-radius: 0;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>Diseño UX/UI Personalizado</h1>
        </div>
        <div class="content">
            <h2>¡Hola, ${cliente.name}!</h2>
            <p>Soy ${user.userName}, diseñadora UX/UI apasionada por crear experiencias digitales excepcionales. Me emociona la oportunidad de colaborar contigo en tu proyecto.</p>
            <p>Basándome en nuestras conversaciones previas, he preparado un presupuesto personalizado para ti:</p>
            <ul>
                <li><strong>Proyecto:</strong> ${budget.descripcion}</li>
                <li><strong>Inversión:</strong> ${budget.monto}</li>
            </ul>
            <p>Este presupuesto incluye:</p>
            <ul>
                <li>Investigación de usuarios y análisis de competencia</li>
                <li>Wireframes y prototipos interactivos</li>
                <li>Diseño visual de alta fidelidad</li>
                <li>Pruebas de usabilidad y refinamiento</li>
                <li>Entrega de archivos fuente y documentación</li>
            </ul>
            <p>Estoy emocionada por la posibilidad de trabajar juntos y llevar tu visión al siguiente nivel. ¿Qué te parece si programamos una llamada para discutir los detalles?</p>
            <div class="actions">
                <a href="${acceptLink}" class="btn btn-accept">Aceptar Propuesta</a>
                <a href="${rejectLink}" class="btn btn-reject">Solicitar Cambios</a>
            </div>
            <div class="signature">
                <p>Saludos creativos,</p>
                <p>${user.userName}</p>
                <p>Diseñadora UX/UI</p>
            </div>
        </div>
        <div class="footer">
            <p>© 2023 ${user.userName} Diseño UX/UI. Todos los derechos reservados.</p>
        </div>
    </div>
</body>
</html>
    `;
};
