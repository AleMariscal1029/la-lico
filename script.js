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

// Mapeo de códigos de promoción a productos disponibles
const promoCodeProducts = {
    'ADICTIVA-2024-A5F9': {
        name: 'Promoción Adictiva 2024',
        products: [
            { name: 'Whisky Premium 12 años', image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
            { name: 'Ron Añejo 10 años', image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
            { name: 'Gin Premium', image: 'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' }
        ]
    },
    'ADICTIVA-5678-K2L8': {
        name: 'Descuento 50% Tragos',
        products: [
            { name: 'Mojito Clásico', image: 'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
            { name: 'Margarita', image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
            { name: 'Daiquiri Fresa', image: 'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
            { name: 'Piña Colada', image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' }
        ]
    },
    'ADICTIVA-9012-M3R6': {
        name: 'Regalo Premium Adictiva',
        products: [
            { name: 'Vodka Premium', image: 'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
            { name: 'Tequila Gold', image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
            { name: 'Vino Tinto Reserva', image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' }
        ]
    },
    'ADICTIVA-3456-N7P2': {
        name: 'Oferta Especial Adictiva',
        products: [
            { name: 'Martini Dry', image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
            { name: 'Cosmopolitan', image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
            { name: 'Whisky Premium 12 años', image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' }
        ]
    },
    'ADICTIVA-7890-Q1T5': {
        name: 'Colección Elite Adictiva',
        products: [
            { name: 'Ron Añejo 10 años', image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
            { name: 'Gin Premium', image: 'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
            { name: 'Vodka Premium', image: 'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
            { name: 'Mojito Clásico', image: 'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' }
        ]
    }
};

// Variables globales para el modal
let currentPromoCode = null;
let selectedProductGlobal = null;

// Manejar envío del formulario de código
function handlePromoSubmit(event) {
    event.preventDefault();
    
    const promoCode = document.getElementById('promoCode').value.trim().toUpperCase();
    
    // Validar que no esté vacío
    if (!promoCode) {
        Swal.fire({
            icon: 'warning',
            title: '⚠️ Código vacío',
            text: 'Por favor ingresa un código de descuento.',
            background: '#0d7377',
            color: '#fbbf24',
            confirmButtonColor: '#fbbf24'
        });
        return;
    }
    
    // Validar que el código exista
    if (!promoCodeProducts[promoCode]) {
        Swal.fire({
            icon: 'error',
            title: '❌ Código inválido',
            text: 'El código ingresado no existe o ha expirado.\n\nCódigos válidos: ADICTIVA-2024-A5F9, ADICTIVA-5678-K2L8, ADICTIVA-9012-M3R6',
            background: '#0d7377',
            color: '#fbbf24',
            confirmButtonColor: '#fbbf24'
        });
        return;
    }
    
    // Código válido - abrir modal con productos
    currentPromoCode = promoCode;
    openProductsModal(promoCode);
}

// Abrir modal con productos disponibles
function openProductsModal(promoCode) {
    const promoData = promoCodeProducts[promoCode];
    const container = document.getElementById('productsContainer');
    
    // Limpiar y generar tarjetas de productos
    container.innerHTML = '';
    
    promoData.products.forEach(product => {
        const card = document.createElement('div');
        card.className = 'bg-dark-burgundy rounded-lg overflow-hidden cursor-pointer hover:scale-105 transition-transform border-2 border-gold product-option';
        card.onclick = () => selectProductFromModal(product.name);
        
        card.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="w-full h-32 object-cover">
            <div class="p-4 text-center">
                <p class="text-gold font-bold">${product.name}</p>
            </div>
        `;
        
        container.appendChild(card);
    });
    
    // Limpiar datos anteriores
    document.getElementById('customerName').value = '';
    document.getElementById('customerPhone').value = '';
    selectedProductGlobal = null;
    
    // Mostrar modal
    document.getElementById('productsModal').classList.remove('hidden');
}

// Seleccionar producto del modal
function selectProductFromModal(productName) {
    selectedProductGlobal = productName;
    
    // Destacar la tarjeta seleccionada
    document.querySelectorAll('.product-option').forEach(card => {
        card.classList.remove('ring-4', 'ring-gold');
        if (card.querySelector('p').textContent === productName) {
            card.classList.add('ring-4', 'ring-gold');
        }
    });
}

// Confirmar canje
function confirmRedemption() {
    const customerName = document.getElementById('customerName').value.trim();
    const customerPhone = document.getElementById('customerPhone').value.trim();
    
    // Validar nombre
    if (!customerName) {
        Swal.fire({
            icon: 'warning',
            title: '⚠️ Nombre requerido',
            text: 'Por favor ingresa tu nombre completo.',
            background: '#0d7377',
            color: '#fbbf24',
            confirmButtonColor: '#fbbf24'
        });
        return;
    }
    
    // Validar teléfono
    if (!customerPhone) {
        Swal.fire({
            icon: 'warning',
            title: '⚠️ Teléfono requerido',
            text: 'Por favor ingresa tu número de teléfono.',
            background: '#0d7377',
            color: '#fbbf24',
            confirmButtonColor: '#fbbf24'
        });
        return;
    }
    
    // Validar producto seleccionado
    if (!selectedProductGlobal) {
        Swal.fire({
            icon: 'warning',
            title: '⚠️ Producto no seleccionado',
            text: 'Por favor selecciona un producto haciendo click en él.',
            background: '#0d7377',
            color: '#fbbf24',
            confirmButtonColor: '#fbbf24'
        });
        return;
    }
    
    // ¡Canje exitoso!
    closeProductsModal();
    
    Swal.fire({
        icon: 'success',
        title: '🎉 ¡Canje Confirmado!',
        html: `
            <div style="text-align: left;">
                <p style="margin: 10px 0;"><strong>Nombre:</strong> ${customerName}</p>
                <p style="margin: 10px 0;"><strong>Código:</strong> <span style="color: #fbbf24;">${currentPromoCode}</span></p>
                <p style="margin: 10px 0;"><strong>Producto Canjeado:</strong> <span style="color: #fbbf24;">${selectedProductGlobal}</span></p>
                <p style="margin: 10px 0;"><strong>Teléfono:</strong> ${customerPhone}</p>
                <hr style="margin: 20px 0; border-color: #fbbf24;">
                <p style="margin: 10px 0;">✓ Tu canje será procesado en 3-5 días hábiles</p>
            </div>
        `,
        background: '#0d7377',
        color: '#fbbf24',
        confirmButtonColor: '#fbbf24',
        confirmButtonText: '¡Excelente!'
    });
    
    // Limpiar formulario principal
    document.getElementById('promoCode').value = '';
    document.getElementById('promoCodeForm').reset();
    
    // Log para servidor
    console.log({
        promoCode: currentPromoCode,
        selectedProduct: selectedProductGlobal,
        customerName: customerName,
        customerPhone: customerPhone,
        timestamp: new Date().toISOString()
    });
}

// Cerrar modal
function closeProductsModal() {
    document.getElementById('productsModal').classList.add('hidden');
    currentPromoCode = null;
    selectedProductGlobal = null;
}

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