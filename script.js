// Control de Audio
let audioPlaying = false;

function toggleAudio() {
    const audio = document.getElementById('bgAudio');
    const button = document.getElementById('audioToggle');
    
    if (audioPlaying) {
        audio.pause();
        audio.muted = true;
        button.innerHTML = '<i class="fas fa-volume-mute text-xl"></i>';
        audioPlaying = false;
    } else {
        audio.muted = false;
        audio.play().catch(error => {
            console.log('Error reproduciendo audio:', error);
        });
        button.innerHTML = '<i class="fas fa-volume-up text-xl"></i>';
        audioPlaying = true;
    }
}

// Intentar reproducir audio automáticamente cuando la página carga
window.addEventListener('load', function() {
    const audio = document.getElementById('bgAudio');
    audio.muted = true;
    audio.play().catch(error => {
        console.log('Autoplay bloqueado por el navegador. El usuario debe hacer clic en el botón de audio.');
    });
});

// Slider automático
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const indicators = document.querySelectorAll('.indicator');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.opacity = i === index ? '1' : '0';
    });
    indicators.forEach((indicator, i) => {
        indicator.style.opacity = i === index ? '1' : '0.5';
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

// Auto-play
setInterval(nextSlide, 5000);

// Controles manuales
document.getElementById('next').addEventListener('click', nextSlide);
document.getElementById('prev').addEventListener('click', prevSlide);

// Indicadores
indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
        currentSlide = index;
        showSlide(currentSlide);
    });
});

// Formulario de contacto
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    // Simular envío (en producción, enviar a servidor)
    alert('¡Mensaje enviado con éxito! Gracias por contactarnos.');
    this.reset();
});

// Funciones del Modal
function openModal(title, price, description) {
    document.getElementById('modalTitle').textContent = title;
    document.getElementById('modalPrice').textContent = 'Precio: ' + price;
    document.getElementById('modalDescription').textContent = description;
    document.getElementById('productModal').classList.remove('hidden');
}

function closeModal() {
    document.getElementById('productModal').classList.add('hidden');
}

// Funciones del Modal de Pedido
function openOrderModal(drinkName) {
    document.getElementById('selectedDrink').value = drinkName;
    document.getElementById('orderModal').classList.remove('hidden');
}

function closeOrderModal() {
    document.getElementById('orderModal').classList.add('hidden');
    document.getElementById('orderForm').reset();
}

// Formulario de pedido
document.getElementById('orderForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const drink = document.getElementById('selectedDrink').value;
    const quantity = document.getElementById('quantity').value;
    const notes = document.getElementById('notes').value;
    alert(`Pedido enviado: ${drink} - Cantidad: ${quantity} ml\nNotas: ${notes || 'Ninguna'}\n¡Gracias por tu pedido!`);
    closeOrderModal();
});

// Funciones del Modal Crea tu Licor
function openCreateModal() {
    document.getElementById('createModal').classList.remove('hidden');
}

function closeCreateModal() {
    document.getElementById('createModal').classList.add('hidden');
    document.getElementById('createForm').reset();
    // Reset ingredients to one row
    const container = document.getElementById('ingredientsContainer');
    const rows = container.querySelectorAll('.ingredient-row');
    for (let i = 1; i < rows.length; i++) {
        rows[i].remove();
    }
}

function addIngredient() {
    const container = document.getElementById('ingredientsContainer');
    const newRow = document.createElement('div');
    newRow.className = 'ingredient-row flex space-x-2 mb-2';
    newRow.innerHTML = `
        <select class="flex-1 p-3 bg-dark-burgundy text-white rounded-lg border border-gold focus:outline-none focus:ring-2 focus:ring-gold" required>
            <option value="">Seleccionar Ingrediente</option>
            <option value="Whisky">Whisky</option>
            <option value="Vodka">Vodka</option>
            <option value="Ron">Ron</option>
            <option value="Gin">Gin</option>
            <option value="Tequila">Tequila</option>
            <option value="Vino">Vino</option>
            <option value="Cerveza">Cerveza</option>
            <option value="Jugo de Lima">Jugo de Lima</option>
            <option value="Jugo de Naranja">Jugo de Naranja</option>
            <option value="Soda">Soda</option>
            <option value="Azúcar">Azúcar</option>
            <option value="Menta">Menta</option>
            <option value="Hielo">Hielo</option>
        </select>
        <input type="number" placeholder="Cantidad" min="1" class="w-24 p-3 bg-dark-burgundy text-white rounded-lg border border-gold focus:outline-none focus:ring-2 focus:ring-gold" required>
        <select class="w-20 p-3 bg-dark-burgundy text-white rounded-lg border border-gold focus:outline-none focus:ring-2 focus:ring-gold" required>
            <option value="ml">ml</option>
            <option value="oz">oz</option>
            <option value="g">g</option>
            <option value="unid">unid</option>
        </select>
        <button type="button" onclick="removeIngredient(this)" class="bg-burgundy text-white px-3 py-2 rounded-lg hover:bg-opacity-80"><i class="fas fa-trash"></i></button>
    `;
    container.appendChild(newRow);
}

function removeIngredient(button) {
    const row = button.parentElement;
    if (document.querySelectorAll('.ingredient-row').length > 1) {
        row.remove();
    } else {
        Swal.fire('Error', 'Debe haber al menos un ingrediente', 'error');
    }
}

// Formulario Crea tu Licor
document.getElementById('createForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('licorName').value;
    const instructions = document.getElementById('instructions').value;
    const ingredients = [];
    const rows = document.querySelectorAll('.ingredient-row');
    rows.forEach(row => {
        const select = row.querySelector('select');
        const input = row.querySelector('input[type="number"]');
        const unit = row.querySelector('select:last-of-type');
        if (select.value && input.value) {
            ingredients.push(`${input.value} ${unit.value} de ${select.value}`);
        }
    });

    if (ingredients.length === 0) {
        Swal.fire('Error', 'Debe añadir al menos un ingrediente', 'error');
        return;
    }

    const ingredientList = ingredients.join(', ');
    Swal.fire({
        title: '¡Licor Creado!',
        html: `<strong>${name}</strong><br>Ingredientes: ${ingredientList}<br>Instrucciones: ${instructions}`,
        icon: 'success',
        confirmButtonText: 'Enviar Pedido',
        showCancelButton: true,
        cancelButtonText: 'Cancelar'
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire('Pedido Enviado', 'Tu licor personalizado ha sido enviado. ¡Gracias!', 'success');
            closeCreateModal();
        }
    });
});