// Preloader Premium
window.addEventListener('load', function() {
    const preloader = document.getElementById('preloader');
    if (preloader) {
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 3000);
    }
});

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
    'ADICTIVA-123': {
        name: 'Promoción Adictiva 2024',
        products: [
            { name: 'Whisky Premium 12 años', image: './images/whisky-premium.jpg' },
            { name: 'Ron Añejo 10 años', image: './images/ronito 11.jpg' },
            { name: 'Gin Premium', image: './images/ginito 11.jpg' }
        ]
    },
    'ADICTIVA-456': {
        name: 'Descuento 50% Tragos',
        products: [
            { name: 'Mojito Clásico', image: './images/mojito.jpg' },
            { name: 'Margarita', image: './images/margarita.jpg' },
            { name: 'Daiquiri Fresa', image: 'https://images.unsplash.com/photo-1608270861620-7b9b51a1c4d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
            { name: 'Piña Colada', image: 'https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' }
        ]
    },
    'ADICTIVA-789': {
        name: 'Regalo Premium Adictiva',
        products: [
            { name: 'Vodka Premium', image: './images/vodka-premium.jpg' },
            { name: 'Tequila Gold', image: './images/tequila.jpg' },
            { name: 'Vino Tinto Reserva', image: './images/vino.jpg' }
        ]
    },
    'ADICTIVA-101': {
        name: 'Oferta Especial Adictiva',
        products: [
            { name: 'Martini Dry', image: './images/martini.jpg' },
            { name: 'Cosmopolitan', image: 'https://images.unsplash.com/photo-1569859882213-8f1a921fc121?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
            { name: 'Whisky Premium 12 años', image: './images/whisky-premium.jpg' }
        ]
    },
    'ADICTIVA-202': {
        name: 'Colección Elite Adictiva',
        products: [
            { name: 'Ron Añejo 10 años', image: './imagen/' },
            { name: 'Gin Premium', image: './images/ginito 11.jpg' },
            { name: 'Vodka Premium', image: './images/vodka-premium.jpg' },
            { name: 'Mojito Clásico', image: './images/mojito.jpg' }
        ]
    }
};

// Datos de tragos en descuento (Corregido error de sintaxis)
const discountedDrinks = [
    {
        name: 'Mojito Clásico',
        originalPrice: 25.00,
        discountPrice: 18.00,
        discount: 28,
        image: './images/mojito.jpg',
        description: 'Mojito clásico con ron blanco, menta fresca, lima y agua mineral.'
    },
    {
        name: 'Margarita',
        originalPrice: 27.00,
        discountPrice: 19.00,
        discount: 30,
        image: './images/margarita.jpg',
        description: 'Margarita tradicional con tequila, triple sec y jugo de limón fresco.'
    },
    {
        name: 'Piña Colada',
        originalPrice: 29.50,
        discountPrice: 21.00,
        discount: 31,
        image: 'https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        description: 'Mezcla tropical de ron, crema de coco y jugo de piña.'
    },
    {
        name: 'Daiquiri Fresa',
        originalPrice: 26.00,
        discountPrice: 19.00,
        discount: 27,
        image: 'https://images.unsplash.com/photo-1608270861620-7b9b51a1c4d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        description: 'Daiquiri refrescante con ron blanco, fresas frescas y limón.'
    },
    {
        name: 'Cosmopolitan',
        originalPrice: 28.00,
        discountPrice: 20.50,
        discount: 29,
        image: 'https://images.unsplash.com/photo-1569859882213-8f1a921fc121?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        description: 'Cosmopolitan sofisticado con vodka, cranberry y cítricos.'
    }
];

// Variables globales para el modal
let currentPromoCode = null;
let selectedProductGlobal = null;

function handlePromoSubmit(event) {
    event.preventDefault();

    const promoCode = document.getElementById('promoCode').value.trim().toUpperCase();

    // Validar que no esté vacío
    if (!promoCode) {
        Swal.fire({
            icon: 'warning',
            title: 'Campo vacío',
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
            text: 'El código ingresado no existe o ha expirado.\n\nCódigos válidos: ADICTIVA-123, ADICTIVA-456, ADICTIVA-789',
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

// Funciones del Modal de Ofertas
function openOffersModal() {
    const container = document.getElementById('offersContainer');
    container.innerHTML = '';
    
    // Generar tarjetas de tragos en descuento
    discountedDrinks.forEach(drink => {
        const card = document.createElement('div');
        card.className = 'bg-menta rounded-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-2 border-gold';
        
        const discountPercentage = drink.discount;
        const savings = (drink.originalPrice - drink.discountPrice).toFixed(2);
        
        card.innerHTML = `
            <div class="relative">
                <img src="${drink.image}" alt="${drink.name}" class="w-full h-40 object-cover">
                <div class="absolute top-3 right-3 bg-coral text-white px-3 py-1 rounded-full font-bold text-sm">
                    -${discountPercentage}%
                </div>
            </div>
            <div class="p-4">
                <h4 class="text-lg font-bold text-deep-menta mb-2 font-poppins">${drink.name}</h4>
                <p class="text-sm text-gray-600 mb-3">${drink.description}</p>
                
                <div class="mb-4 space-y-1">
                    <div class="flex items-center justify-between">
                        <span class="text-gray-600 font-semibold">Precio Original:</span>
                        <span class="text-gray-600 line-through">Bs. ${drink.originalPrice.toFixed(2)}</span>
                    </div>
                    <div class="flex items-center justify-between">
                        <span class="text-gold font-bold">Precio Descuento:</span>
                        <span class="text-gold text-2xl font-bold">Bs. ${drink.discountPrice.toFixed(2)}</span>
                    </div>
                    <div class="flex items-center justify-between pt-2 border-t border-gold">
                        <span class="text-coral font-semibold">Ahorras:</span>
                        <span class="text-coral font-bold">Bs. ${savings}</span>
                    </div>
                </div>
                
                <button onclick="addToCart('${drink.name}', ${drink.discountPrice})" class="w-full bg-gold text-deep-menta py-2 rounded-lg font-semibold hover:bg-opacity-80 transition-colors">
                    <i class="fas fa-shopping-cart mr-2"></i>Añadir al Carrito
                </button>
            </div>
        `;
        
        container.appendChild(card);
    });
    
    // Mostrar modal
    document.getElementById('offersModal').classList.remove('hidden');
    
    // Scroll al modal
    document.body.style.overflow = 'hidden';
}

function closeOffersModal() {
    document.getElementById('offersModal').classList.add('hidden');
    document.body.style.overflow = 'auto';
}

// --- LÓGICA DEL CARRITO GLOBAL ---
let globalCart = [];

function addToGlobalCart(name, price, details) {
    globalCart.push({ name, price, details });
    updateGlobalCartUI();
    
    // Mostrar la sección si estaba oculta
    const summarySection = document.getElementById('global-cart-summary');
    if (summarySection) summarySection.classList.remove('hidden');
}

function updateGlobalCartUI() {
    const list = document.getElementById('cart-list');
    const totalSpan = document.getElementById('grand-total');
    if (!list || !totalSpan) return;

    list.innerHTML = '';
    let total = 0;

    globalCart.forEach((item, index) => {
        total += item.price;
        const div = document.createElement('div');
        div.className = 'flex justify-between items-center bg-dark-burgundy p-5 rounded-2xl border border-gold/20 hover:border-gold transition-all fade-in';
        div.innerHTML = `
            <div>
                <h4 class="text-gold font-bold text-lg">${item.name}</h4>
                <p class="text-xs text-gray-400 italic">${item.details}</p>
            </div>
            <div class="flex items-center space-x-6">
                <span class="text-white font-mono font-bold text-xl">Bs. ${item.price.toFixed(2)}</span>
                <button onclick="removeFromGlobalCart(${index})" class="text-coral hover:text-white transition-colors">
                    <i class="fas fa-trash-alt"></i>
                </button>
            </div>
        `;
        list.appendChild(div);
    });

    totalSpan.textContent = `Bs. ${total.toFixed(2)}`;
    if (globalCart.length === 0) document.getElementById('global-cart-summary').classList.add('hidden');
}

function removeFromGlobalCart(index) {
    globalCart.splice(index, 1);
    updateGlobalCartUI();
}

function addToCart(drinkName, price) {
    addToGlobalCart(drinkName, price, "Oferta Especial");
    Swal.fire({ icon: 'success', title: '¡Añadido!', text: `${drinkName} se sumó a tu lista.`, background: '#0d7377', color: '#fbbf24', timer: 1500, showConfirmButton: false });
}

// Funciones del Modal de Pedido
const packagingOptions = [
    { id: 'mini', name: 'Esencia Diamante', size: '100ml', icon: 'fa-gem', basePrice: 5.00 },
    { id: 'flask', name: 'Frasco Alquimista', size: '250ml', icon: 'fa-vial', basePrice: 8.00 },
    { id: 'standard', name: 'Cristal Signature', size: '500ml', icon: 'fa-wine-bottle', basePrice: 12.00 },
    { id: 'party', name: 'Edición de Gala', size: '1L', icon: 'fa-crown', basePrice: 18.00 }
];

let selectedPackagingOrder = null;

function renderPackagingOptionsOrder() {
    const grid = document.getElementById('packagingGridOrder');
    if (!grid) return;
    grid.innerHTML = '';

    packagingOptions.forEach(pack => {
        const item = document.createElement('div');
        item.id = `order-pack-${pack.id}`;
        item.className = 'bg-menta p-4 rounded-2xl text-center cursor-pointer hover:scale-105 transition-all duration-300 border-2 border-transparent group shadow-lg hover:shadow-gold/20';
        if (selectedPackagingOrder && selectedPackagingOrder.id === pack.id) {
            item.classList.add('border-gold', 'bg-opacity-80');
        }
        
        item.onclick = () => selectPackagingOrder(pack);

        item.innerHTML = `
            <div class="text-3xl mb-2 text-gold group-hover:text-white transition-transform duration-300 group-hover:scale-110">
                <i class="fas ${pack.icon}"></i>
            </div>
            <span class="text-[11px] font-extrabold text-deep-black uppercase block truncate group-hover:text-white mb-1">${pack.name}</span>
            <span class="text-[9px] bg-deep-black text-gold px-2 py-0.5 rounded-full inline-block font-bold">${pack.size}</span>
        `;
        grid.appendChild(item);
    });
}

function selectPackagingOrder(pack) {
    selectedPackagingOrder = pack;
    document.querySelectorAll('[id^="order-pack-"]').forEach(el => {
        el.classList.remove('border-gold', 'bg-opacity-80');
    });
    const selectedEl = document.getElementById(`order-pack-${pack.id}`);
    if (selectedEl) selectedEl.classList.add('border-gold', 'bg-opacity-80');
}

function openOrderModal(drinkName) {
    document.getElementById('selectedDrink').value = drinkName;
    selectedPackagingOrder = null;
    renderPackagingOptionsOrder();
    document.getElementById('orderModal').classList.remove('hidden');
}

function closeOrderModal() {
    document.getElementById('orderModal').classList.add('hidden');
    document.getElementById('orderForm').reset();
    selectedPackagingOrder = null;
}

// Precios base de preparaciones (mapeo simple)
const drinkPrices = { "Mojito Clásico": 9.50, "Martini Dry": 11.00, "Margarita": 10.00 };

// Formulario de pedido
document.getElementById('orderForm').addEventListener('submit', function(e) {
    e.preventDefault();
    if (!selectedPackagingOrder) {
        Swal.fire({ icon: 'warning', title: 'Falta el envase', text: 'Por favor selecciona una presentación para tu pedido.', background: '#0d7377', color: '#fbbf24' });
        return;
    }

    const basePrice = drinkPrices[document.getElementById('selectedDrink').value] || 10.00;
    const finalPrice = basePrice + selectedPackagingOrder.basePrice;

    const drink = document.getElementById('selectedDrink').value;
    const notes = document.getElementById('notes').value;
    
    Swal.fire({
        icon: 'success',
        title: '¡Pedido Recibido!',
        html: `
            <div class="text-left bg-deep-black p-4 rounded border border-gold">
                <p class="mb-2"><strong>Preparación:</strong> <span class="text-gold">${drink}</span></p>
                <p class="mb-2"><strong>Envase:</strong> <span class="text-gold">${selectedPackagingOrder.name} (${selectedPackagingOrder.size})</span></p>
                <p><strong>Notas:</strong> ${notes || 'Ninguna'}</p>
            </div>
        `,
        background: '#0d7377',
        color: '#fbbf24',
        confirmButtonColor: '#fbbf24'
    });
    addToGlobalCart(drink, finalPrice, `Envase: ${selectedPackagingOrder.name} (${selectedPackagingOrder.size})`);
    closeOrderModal();
});

// Funciones del Modal Crea tu Licor
// MEZCLADOR INTERACTIVO DE LICORES
const ingredientOptions = [
    { id: 'whisky', name: 'Whisky', img: './images/whisky.jpg', unit: 'ml', pricePerUnit: 0.5 },
    { id: 'vodka', name: 'Vodka', img: './images/bodca.jpg', unit: 'ml', pricePerUnit: 0.4 },
    { id: 'ron', name: 'Ron', img: './images/Ron.webp', unit: 'ml', pricePerUnit: 0.45 },
    { id: 'gin', name: 'Gin', img: './images/gin (1).jpg', unit: 'ml', pricePerUnit: 0.48 },
    { id: 'tequila', name: 'Tequila', img: './images/tequila.webp', unit: 'ml', pricePerUnit: 0.42 },
    { id: 'vino', name: 'Vino', img: './images/vino.jpg', unit: 'ml', pricePerUnit: 0.3 },
    { id: 'lima', name: 'Lima', icon: '🍋', unit: 'oz', pricePerUnit: 1.5 },
    { id: 'soda', name: 'Soda', icon: '🫧', unit: 'ml', pricePerUnit: 0.1 },
    { id: 'menta', name: 'Menta', icon: '🌿', unit: 'hojas', pricePerUnit: 0.5 },
    { id: 'hielo', name: 'Hielo', icon: '🧊', unit: 'cubos', pricePerUnit: 0.1 }
];

let currentMix = [];
let selectedPackaging = null;

function openCreateModal() {
    currentMix = []; // Reset mix when opening modal
    document.getElementById('createModal').classList.remove('hidden');
    renderIngredientGrid();
    renderPackagingOptions();
    renderMix();
}

function closeCreateModal() {
    document.getElementById('createModal').classList.add('hidden');
    document.getElementById('createForm').reset();
    currentMix = [];
    selectedPackaging = null;
}

function renderIngredientGrid() {
    const grid = document.getElementById('ingredientGrid');
    grid.innerHTML = '';
    
    ingredientOptions.forEach(ing => {
        const item = document.createElement('div');
        item.className = 'bg-menta p-2 rounded-xl text-center cursor-pointer hover:scale-110 transition-transform border-2 border-transparent hover:border-gold group';
        item.onclick = () => addIngredientToMix(ing);
        
        const visual = ing.img 
            ? `<img src="${ing.img}" class="w-full h-12 object-cover rounded-lg mb-1 shadow-md">`
            : `<div class="text-2xl mb-1">${ing.icon}</div>`;
            
        item.innerHTML = `
            ${visual}
            <span class="text-[9px] font-bold text-deep-black uppercase block truncate group-hover:text-white">${ing.name}</span>
        `;
        grid.appendChild(item);
    });
}

function renderPackagingOptions() {
    const grid = document.getElementById('packagingGrid');
    grid.innerHTML = '';

    packagingOptions.forEach(pack => {
        const item = document.createElement('div');
        item.id = `pack-${pack.id}`;
        item.className = 'bg-menta p-4 rounded-2xl text-center cursor-pointer hover:scale-105 transition-all duration-300 border-2 border-transparent group shadow-lg hover:shadow-gold/20';
        if (selectedPackaging && selectedPackaging.id === pack.id) {
            item.classList.add('border-gold', 'bg-opacity-80');
        }
        
        item.onclick = () => selectPackaging(pack);

        item.innerHTML = `
            <div class="text-3xl mb-2 text-gold group-hover:text-white transition-transform duration-300 group-hover:scale-110">
                <i class="fas ${pack.icon}"></i>
            </div>
            <span class="text-[11px] font-extrabold text-deep-black uppercase block truncate group-hover:text-white mb-1">${pack.name}</span>
            <span class="text-[9px] bg-deep-black text-gold px-2 py-0.5 rounded-full inline-block font-bold">${pack.size}</span>
        `;
        grid.appendChild(item);
    });
}

function selectPackaging(pack) {
    selectedPackaging = pack;
    document.querySelectorAll('[id^="pack-"]').forEach(el => {
        el.classList.remove('border-gold', 'bg-opacity-80');
    });
    const selectedEl = document.getElementById(`pack-${pack.id}`);
    if (selectedEl) selectedEl.classList.add('border-gold', 'bg-opacity-80');
    updateTotalPrice(); // Update price when packaging changes
}

function addIngredientToMix(ing) {
    if (currentMix.find(item => item.id === ing.id)) {
        Swal.fire({ icon: 'info', title: 'Ya está en tu mezcla', text: 'Solo ajusta la cantidad abajo.', background: '#0d7377', color: '#fbbf24', timer: 1500, showConfirmButton: false });
        return;
    }
    // Set initial amount based on unit type
    currentMix.push({ ...ing, amount: (ing.unit === 'ml' ? 50 : (ing.unit === 'oz' ? 1 : 1)) });
    renderMix();
}

function renderMix() {
    const container = document.getElementById('mixContainer');
    if (currentMix.length === 0) {
        container.innerHTML = '<p class="text-gray-400 italic text-sm text-center">Toca los ingredientes arriba para empezar a mezclar...</p>';
        updateTotalPrice();
        updateTotalVolume();
        return;
    }
    
    container.innerHTML = '';
    currentMix.forEach((item, index) => {
        const row = document.createElement('div');
        row.className = 'bg-deep-menta bg-opacity-40 p-3 rounded-xl border border-gold border-opacity-30 fade-in';
        
        const maxVal = item.unit === 'ml' ? 250 : 12;
        
        row.innerHTML = `
            <div class="flex justify-between items-center mb-2">
                <span class="font-bold text-gold flex items-center">
                    ${item.img ? `<img src="${item.img}" class="w-6 h-6 rounded-full mr-2 object-cover border border-gold">` : `<span class="mr-2">${item.icon}</span>`}
                    ${item.name}
                </span>
                <button onclick="removeFromMix(${index})" class="text-coral hover:text-white transition-colors"><i class="fas fa-trash-alt"></i></button>
            </div>
            <div class="flex items-center space-x-4">
                <input type="range" min="1" max="${maxVal}" value="${item.amount}" 
                    class="flex-1 accent-gold cursor-pointer" 
                    oninput="updateMixAmount(${index}, this.value)">
                <span class="w-20 text-right font-mono font-bold text-white bg-deep-black px-2 py-1 rounded border border-gold border-opacity-50">
                    ${item.amount} ${item.unit}
                </span>
            </div>
        `;
        container.appendChild(row);
    });
    updateTotalPrice();
    updateTotalVolume();
}

function updateMixAmount(index, val) {
    currentMix[index].amount = parseInt(val);
    // Update the specific span for the amount
    const amountSpan = document.querySelector(`#mixContainer div:nth-child(${index + 1}) .font-mono`);
    if (amountSpan) {
        amountSpan.textContent = `${currentMix[index].amount} ${currentMix[index].unit}`;
    }
    updateTotalPrice();
    updateTotalVolume();
}

function removeFromMix(index) {
    currentMix.splice(index, 1);
    renderMix();
}

function calculateTotalPrice() {
    let totalIngredientCost = currentMix.reduce((acc, item) => {
        return acc + (item.amount * item.pricePerUnit);
    }, 0);

    let totalCost = totalIngredientCost + (selectedPackaging ? selectedPackaging.basePrice : 0);
    return totalCost;
}

function updateTotalPrice() {
    const priceSpan = document.getElementById('totalPrice');
    priceSpan.textContent = `Bs. ${calculateTotalPrice().toFixed(2)}`;
}

function updateTotalVolume() {
    const total = currentMix.filter(i => i.unit === 'ml').reduce((acc, curr) => acc + curr.amount, 0);
    document.getElementById('totalVolume').textContent = `${total} ml`;
}

document.getElementById('createForm').addEventListener('submit', function(e) {
    e.preventDefault();
    if (currentMix.length === 0) {
        Swal.fire({ icon: 'error', title: 'Mezcla vacía', text: 'Debes añadir al menos un ingrediente.', background: '#0d7377', color: '#fbbf24' });
        return;
    }

    if (!selectedPackaging) {
        Swal.fire({ icon: 'warning', title: 'Falta el envase', text: 'Por favor selecciona una presentación para tu licor.', background: '#0d7377', color: '#fbbf24' });
        return;
    }
    
    const name = document.getElementById('licorName').value;
    const instructions = document.getElementById('instructions').value;
    const ingredientList = currentMix.map(i => `${i.amount}${i.unit} de ${i.name}`).join(', ');
    const finalPrice = calculateTotalPrice().toFixed(2);

    Swal.fire({
        title: '¡Creación Enviada!',
        html: `
            <div class="text-left bg-deep-black p-4 rounded border border-gold">
                <p class="mb-2"><strong>Nombre:</strong> <span class="text-gold">${name}</span></p>
                <p class="mb-2"><strong>Precio Estimado:</strong> <span class="text-gold">Bs. ${finalPrice}</span></p>
                <p class="mb-2"><strong>Fórmula:</strong> ${ingredientList}</p>
                <p class="mb-2"><strong>Envase:</strong> <span class="text-gold">${selectedPackaging.name} (${selectedPackaging.size})</span></p>
                <p><strong>Nota:</strong> ${instructions}</p>
            </div>
        `,
        icon: 'success',
        confirmButtonText: '¡Salud!',
        background: '#0d7377',
        color: '#fbbf24',
        confirmButtonColor: '#fbbf24'
    });
    addToGlobalCart(`Personalizado: ${name}`, parseFloat(finalPrice), `Mezcla: ${ingredientList.substring(0, 30)}...`);
    closeCreateModal();
});

function finalCheckout() {
    const total = globalCart.reduce((acc, item) => acc + item.price, 0);
    Swal.fire({
        title: '¡Pedido Finalizado!',
        text: `El total de tu compra es Bs. ${total.toFixed(2)}. En breve nos contactaremos contigo para la entrega.`,
        icon: 'success',
        background: '#0d7377',
        color: '#fbbf24',
        confirmButtonColor: '#fbbf24'
    }).then(() => {
        globalCart = [];
        updateGlobalCartUI();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}