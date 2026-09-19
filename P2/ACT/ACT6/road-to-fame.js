document.addEventListener("DOMContentLoaded", () => {
    const pathContainer = document.getElementById("rthfPathContainer");
    const totalStages = 18;

    // Puedes personalizar los títulos y rutas de cada laboratorio aquí
    for (let i = 1; i <= totalStages; i++) {
        const nodeContainer = document.createElement("div");
        nodeContainer.className = "rthf-node-container";

        nodeContainer.innerHTML = `
            <div class="rthf-node">${i}</div>
            <div class="rthf-tooltip">
                <h4>Laboratorio ${i}: Fase Táctica</h4>
                <div class="rthf-preview-box">
                    <!-- Aquí puedes incrustar una miniatura de imagen o un iframe directo al PDF -->
                    <span class="rthf-preview-placeholder">Evidencia PDF - Lab ${i}</span>
                </div>
                <a href="labs/laboratorio-${i}.html" class="rthf-lab-btn">Ver Laboratorio</a>
            </div>
        `;

        pathContainer.appendChild(nodeContainer);
    }
});