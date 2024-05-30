document.addEventListener('DOMContentLoaded', () => {
    const addStageButton = document.getElementById('adminElement');
    const addStageModal = document.getElementById('adminModal');
    const closeModal = document.getElementById('closeModal');
    const addStageForm = document.getElementById('addStageForm');

    // Mostrar el modal al hacer clic en el botón "Añadir etapa"
    addStageButton.addEventListener('click', () => {
        addStageModal.style.display = 'block';
    });

    // Ocultar el modal al hacer clic en el botón de cerrar
    closeModal.addEventListener('click', () => {
        addStageModal.style.display = 'none';
    });

    // Ocultar el modal al hacer clic fuera del contenido del modal
    window.addEventListener('click', (event) => {
        if (event.target == addStageModal) {
            addStageModal.style.display = 'none';
        }
    });

    // Manejar el envío del formulario
    addStageForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        const stageName = document.getElementById('etapa').value;

        try {
            const response = await fetch('api/pipeline', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name: stageName })
            });

            if (response.ok) {
                const newStage = await response.json();
                console.log('Etapa creada:', newStage);
                location.reload(); // Recargar la página para mostrar la nueva etapa
            } else {
                console.error('Error al crear la etapa');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    });

    // Event listener for "Crear negocio" buttons
    const createBusinessButtons = document.querySelectorAll('.create-business-button');
    createBusinessButtons.forEach(button => {
        button.addEventListener('click', () => {
            const stageId = button.getAttribute('data-stage-id');
            console.log(`Crear negocio para etapa con ID: ${stageId}`);
            // Aquí puedes implementar la lógica para crear un negocio en la etapa específica
        });
    });
});
