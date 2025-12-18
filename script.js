const products = [
    // СТІКЕРИ
    { 
        id: 1, 
        name: 'СТІКЕР "ВОВЧИК"', 
        price: 30, 
        category: 'stickers', 
        img: 'images/st_vovk.png', 
        desc: 'Одиночний стікер кумедного стилізованого вовка.\n \nМатеріал: водостійка плівка з матовою ламінацією.\n \nРозмір: 7х7 см.' 
    },
    { 
        id: 2, 
        name: 'СТІКЕРПАК "ШОЗАДИКУНИ"', 
        price: 200, 
        category: 'stickers', 
        img: 'images/sp_dikuni.png',
        desc: 'Стікерпак із 10 стікерів дуже хижих диких звірів. \n\n Матеріал: водостійка плівка з матовою ламінацією.\n \nРозмір: А5.' 
    },
    { id: 3, 
        name: 'СТІКЕР "КОТИК"', 
        price: 30, 
        category: 'stickers', 
        img: 'images/st_kotik.png', 
        desc: 'Одиночний стікер кумедного стилізованого котика.\n \nМатеріал: водостійка плівка з матовою ламінацією.\n \nРозмір: 7х7 см.' },

    { id: 4, 
        name: 'СТІКЕР "ХРАМ"', 
        price: 30, 
        category: 'stickers', 
        img: 'images/st_church.png', 
        desc: 'Одиночний стікер з зображенням Андріївського Храму.\n \nМатеріал: водостійка плівка з матовою ламінацією.\n \nРозмір: 7х7 см.' },

    { id: 5, 
        name: 'СТІКЕРПАК "ШОЗАКОТИКИ"', 
        price: 200, 
        category: 'stickers', 
        img: 'images/sp_cats.png', 
        desc: 'Стікерпак із 7 стікерів кумедних котів. \n\n Матеріал: водостійка плівка з матовою ламінацією.\n \nРозмір: А5.' },

    { id: 6, 
        name: 'СТІКЕР "МЕДИЦИНА"', 
        price: 30, 
        category: 'stickers', 
        img: 'images/stmed_canabis_1.png', 
        desc: 'Одиночний стікер кумедного медичного канабіса.\n \nМатеріал: водостійка плівка з матовою ламінацією.\n \nРозмір: 7х7 см.' },

    // ОДЯГ
    { id: 7, 
        name: 'ФУТБОЛКА "PZDC"', 
        price: 900, 
        category: 'clothes', 
        img: 'images/th_pzdc_1.png', 
        desc: 'Стильна футболка з 50х50 АІ прінтом "Це Пі*дець".\n \nМатеріал: Футболка виготовлена з 95% якісної бавовни та 5% еластану, що робить її м’якою, приємною до тіла та еластичною. Оверсайз-крій забезпечує максимальний комфорт, а універсальний стиль пасує до будь-якого гардероба. Доступна у чорному та білому кольорах, що легко поєднуються з будь-яким образом..\n \nКолір: Чорна. \n \nРозмір: L.' },

    { id: 8, 
        name: 'ФУТБОЛКА "САДО"', 
        price: 900, 
        category: 'clothes', 
        img: 'images/th_sado_1.png', 
        desc: 'Футболка з принтом садо діда на лицевій стороні.\n \nМатеріал: Футболка виготовлена з 95% якісної бавовни та 5% еластану, що робить її м’якою, приємною до тіла та еластичною. Оверсайз-крій забезпечує максимальний комфорт, а універсальний стиль пасує до будь-якого гардероба. Доступна у чорному та білому кольорах, що легко поєднуються з будь-яким образом..\n \nКолір: Біла. \n \nРозмір: L.' },

    { id: 9, 
        name: 'ФУТБОЛКА "DEPRESSO"', 
        price: 900, 
        category: 'clothes', 
        img: 'images/th_depresso_1.png',
        desc: 'Футболка з антидепресивним прінтом для міських прогулянок.\n \nМатеріал: Футболка виготовлена з 95% якісної бавовни та 5% еластану, що робить її м’якою, приємною до тіла та еластичною. Оверсайз-крій забезпечує максимальний комфорт, а універсальний стиль пасує до будь-якого гардероба. Доступна у чорному та білому кольорах, що легко поєднуються з будь-яким образом..\n \nКолір: Фіолетова. \n \nРозмір: L.' },

    // БРЕЛКИ
    { id: 10, 
        name: 'БРЕЛОК "КОТИК"', 
        price: 350, 
        category: 'accessories', 
        img: 'images/BR_KOTIK.jpg', 
        desc: 'Кумедний брелок котик з мечем. \n \nМатеріал: Смола \n \nРозмір: 7х5 см \n \nФурнітура: чорний хромований карабін' },

    { id: 11, 
        name: 'БРЕЛОК "МЕЧ"', 
        price: 350, 
        category: 'accessories', 
        img: 'images/BR_sword.jpg', 
        desc: 'Брелок магічного меча з оком. \n \nМатеріал: Смола \n \nРозмір: 10х4 см \n \nФурнітура: чорний хромований карабін' },

    { id: 12, 
        name: 'БРЕЛОК "ПАТРІК"', 
        price: 350, 
        category: 'accessories', 
        img: 'images/BR_patric.png', 
        images: ['images/BR_patric.png'], 
        desc: 'Пахатлівий патрік на гачку. \n \nМатеріал: Смола \n \nРозмір: 7х7 см \n \nФурнітура: Відсутня' },

    // ПОСТЕРИ
    { id: 13, 
        name: 'ПОСТЕР "CHRONOS" A3 ', 
        price: 700, 
        category: 'posters', 
        img: 'images/post_1.png', 
        desc: 'Постер високої якості.' },

    { id: 14, 
        name: 'ПОСТЕР "КІБЕР ЧЕРЕП" A3 ', 
        price: 700, 
        category: 'posters', 
        img: 'images/post_2.png', 
        desc: 'Монстри серед нас.' },

    // МОДЕЛЬКИ
    { id: 15, 
        name: 'ФІГУРКА "ВОЇН ФОФ"', 
        price: 1600,
        category: 'models', 
        img: 'images/fig_fof.png', 
        desc: 'Колекційна фігурка солдата з всесвіту "Fear of Faith" з томатним пивом в руках.\n \n Матеріал: Смола \n \nСклад: Персонаж + Підставка \n \nРозмір: 12х7 см' },

    { id: 16, 
        name: 'ФІГУРКА "ТІНІ СТАЛКЕР"', 
        price: 1600, 
        category: 'models', 
        img: 'images/fig_stalk1.png', 
        desc: 'Колекційна фігурка кумедного сталкера.\n \n Матеріал: Смола \n \nСклад: Персонаж + підставка \n \nРозмір: 12х7 см' },

    { id: 17, 
        name: 'ФІГУРКА "ДЕРПІ КІТ"', 
        price: 1400, 
        category: 'models', 
        img: 'images/fig_cat.png', 
        desc: 'Колекційна фігурка кота Дерпі з мультфільма "КПоп Мисливці на демонів".\n \n Матеріал: Смола \n \nСклад: Моноліт \n \nРозмір: 10х7 см' },

    // ЗНИЖКИ
    { id: 18, 
        name: 'СЕТ "SKULL EMOJI"', 
        price: 120, 
        category: 'discounts', 
        img: 'images/mp_scullemot.png', 
        desc: 'Стікерпак із 10 стікерів дуже емоційних кольорових черепів. \n\n Матеріал: водостійка плівка з матовою ламінацією.\n \nРозмір: 7Х7см' }
];

let cart = [];
let currentProduct = null;
let currentImageIndex = 0; // Змінна для відстеження фото в галереї

// Відображення товарів на головній
function renderProducts(filter = 'all') {
    const grid = document.getElementById('shop');
    if (!grid) return;
    grid.innerHTML = '';
    const filtered = filter === 'all' ? products : products.filter(p => p.category === filter);
    
    filtered.forEach(p => {
        const div = document.createElement('div');
        div.className = 'product-card';
        div.onclick = () => openProduct(p);
        div.innerHTML = `<img src="${p.img}"><p>${p.name}</p><b>${p.price} ГРН</b>`;
        grid.appendChild(div);
    });
}


const orderForm = document.querySelector('.checkout-form');

if (orderForm) {
    orderForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Зупиняємо стандартне перезавантаження сторінки

        // Очищуємо кошик
        cart = []; 
        updateCartUI(); // Оновлюємо лічильник на іконці

        // Закриваємо модальне вікно кошика
        closeModal('cart-modal');

        // Повідомляємо користувача (опціонально)
        alert('Дякуємо! Ваше замовлення прийняте.');
        
        // 5Очищуємо поля форми для наступного разу
        orderForm.reset();
    });
}

// Відкриття модалки товару
function openProduct(p) {
    currentProduct = p;
    currentImageIndex = 0; // Завжди починаємо з першого фото
    
    document.getElementById('modal-img').src = p.img;
    document.getElementById('modal-title').innerText = p.name;
    document.getElementById('modal-price').innerText = p.price + " ГРН";
    document.getElementById('qty-input').value = 1;
    
    // Відображаємо опис (якщо його немає, пишемо стандартний текст)
    const descEl = document.querySelector('.modal-desc');
    if (descEl) descEl.innerText = p.desc || "Опис скоро буде оновлено.";

    // Генеруємо мініатюри, якщо фото більше ніж одне
    renderThumbnails(p);

    document.getElementById('product-modal').style.display = 'block';
}

// Оновлення фото при перемиканні
function updateModalImage() {
    const mainImg = document.getElementById('modal-img');
    if (currentProduct.images && currentProduct.images[currentImageIndex]) {
        mainImg.src = currentProduct.images[currentImageIndex];
    }
    
    // Підсвічуємо активний слот
    document.querySelectorAll('.thumb').forEach((t, i) => {
        t.style.borderColor = (i === currentImageIndex) ? '#261f41' : 'transparent';
        t.style.opacity = (i === currentImageIndex) ? '1' : '0.6';
    });
}

// Створення мініатюр
function renderThumbnails(p) {
    const thumbContainer = document.getElementById('thumbnails-container');
    if (!thumbContainer) return;
    thumbContainer.innerHTML = '';

    if (p.images && p.images.length > 1) {
        p.images.forEach((imgSrc, index) => {
            const thumb = document.createElement('img');
            thumb.src = imgSrc;
            thumb.className = 'thumb';

            // Стилі для мініатюр
            thumb.style = "width:50px; height:50px; object-fit:cover; cursor:pointer; border:2px solid transparent; border-radius:4px; opacity:0.6; transition:0.3s;";
            thumb.onclick = (e) => {
                e.stopPropagation();
                currentImageIndex = index;
                updateModalImage();
            };
            thumbContainer.appendChild(thumb);
        });
        updateModalImage(); // Позначаємо першу активну
    }
}

// Функції для стрілочок галереї
function changeSlide(step) {
    if (!currentProduct.images || currentProduct.images.length <= 1) return;
    currentImageIndex += step;
    if (currentImageIndex >= currentProduct.images.length) currentImageIndex = 0;
    if (currentImageIndex < 0) currentImageIndex = currentProduct.images.length - 1;
    updateModalImage();
}

// Керування кількістю (модалка)
function changeQty(v) {
    let i = document.getElementById('qty-input');
    let n = parseInt(i.value) + v;
    if (n >= 1) i.value = n;
}

// Додавання в кошик
function addToCart() {
    const qty = parseInt(document.getElementById('qty-input').value);
    const existing = cart.find(item => item.id === currentProduct.id);
    if (existing) existing.qty += qty;
    else cart.push({ ...currentProduct, qty });
    
    updateCartUI();
    closeModal('product-modal');
}

// Оновлення іконки кошика
function updateCartUI() {
    const icon = document.getElementById('cart-icon');
    const count = document.getElementById('cart-count');
    if (cart.length > 0) {
        icon.classList.remove('hidden');
        count.innerText = cart.reduce((acc, item) => acc + item.qty, 0);
    } else {
        icon.classList.add('hidden');
    }
}

// Відкриття кошика
function openCart() {
    const list = document.getElementById('cart-items-list');
    const totalDisplay = document.getElementById('total-val');
    let total = 0;
// Умова якщо кошик порожній
    if (cart.length === 0) {
        list.innerHTML = '<p style="text-align:center; padding: 20px;">Кошик порожній</p>';
        if (totalDisplay) totalDisplay.innerText = "0";
    } else {
        list.innerHTML = cart.map(item => {
            const itemTotal = item.price * item.qty;
            total += itemTotal;
            return `
            
                <div class="cart-item" style="display:flex; align-items:center; justify-content:space-between; margin-bottom:15px; padding-bottom:10px; border-bottom:1px solid #eee;">
                    <img src="${item.img}" style="width:50px; height:50px; border-radius:8px; object-fit:cover;">
                    <div style="flex:1; margin-left:15px; font-size:13px; font-weight:bold; text-transform:uppercase;">
                        ${item.name}
                    </div>
                    <div class="cart-qty-wrapper" style="display:flex; border:1px solid #ccc; align-items:center; margin:0 15px;">
                        <button onclick="updateCartItemQty(${item.id}, -1)" style="border:none; background:none; padding:5px 10px; cursor:pointer;">-</button>
                        <input type="text" value="${item.qty}" readonly style="width:30px; border:none; text-align:center; font-size:14px;">
                        <button onclick="updateCartItemQty(${item.id}, 1)" style="border:none; background:none; padding:5px 10px; cursor:pointer;">+</button>
                    </div>
                    <div style="font-weight:bold; width:80px; text-align:right;">${itemTotal} ГРН</div>
                    <button onclick="removeFromCart(${item.id})" style="background:none; border:1px solid #ccc; border-radius:50%; width:25px; height:25px; margin-left:10px; cursor:pointer; color:#999;">×</button>
                </div>
            `;
        }).join('');
    }

    if (totalDisplay) totalDisplay.innerText = total;
    document.getElementById('cart-modal').style.display = 'block';
}

function updateCartItemQty(id, delta) {
    const item = cart.find(i => i.id === id);
    if (item) {
        item.qty += delta;
        if (item.qty <= 0) removeFromCart(id);
        else openCart();
    }
    updateCartUI();
}
//видаляємо лот
function removeFromCart(id) {
    cart = cart.filter(i => i.id !== id);
    updateCartUI();
    openCart();
}

function filterProducts(cat) {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    // Використовуємо window.event для пошуку кнопки, якщо вона була натиснута
    if (window.event) window.event.target.classList.add('active');
    renderProducts(cat);
}

function closeModal(id) {
    document.getElementById(id).style.display = 'none';
}

function scrollToTop(e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Початковий запуск
renderProducts();

function createFloatingElements(count) {
    const container = document.getElementById('background-elements');
    if (!container) return;

    // Іконки фонів
    const images = [
        'images/skull_back.png', 
        'images/et_back.png'   
    ];

    for (let i = 0; i < count; i++) {
        const element = document.createElement('img');
        
        // Випадковий вибір іконки зі списку
        const randomImg = images[Math.floor(Math.random() * images.length)];
        element.src = randomImg;
        
        element.className = 'floating-skull'; 

        // Випадковий розмір і прозорість
        const size = Math.random() * 50 + 50; 
        element.style.width = `${size}px`;
        element.style.opacity = Math.random() * 0.2 + 0.4; // Прозорість 
        
        element.style.left = Math.random() * 100 + "vw";
        element.style.top = Math.random() * 100 + "vh";
        
        // Випадкова швидкість
        element.style.animationDuration = (Math.random() * 20 + 15) + "s";
        element.style.animationDelay = (Math.random() * 10) + "s";
        element.style.transform = `rotate(${Math.random() * 360}deg)`;

        container.appendChild(element);
    }
}

// Запуск функції
window.addEventListener('load', () => createFloatingElements(55));

