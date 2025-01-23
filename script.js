// script.js

// Ініціалізація Telegram Web App API
Telegram.WebApp.ready();

// Ховаємо верхній бар
Telegram.WebApp.BackButton.hide(); // Приховуємо кнопку "Назад"
Telegram.WebApp.setHeaderColor("bg_color"); // Встановлюємо прозорий колір бару
Telegram.WebApp.expand(); // Розгортаємо додаток на весь екран

// Лог для перевірки доступних відступів
console.log("Safe area insets:");
console.log("Top inset: " + window.getComputedStyle(document.documentElement).getPropertyValue('--tg-safe-area-inset-top'));
console.log("Bottom inset: " + window.getComputedStyle(document.documentElement).getPropertyValue('--tg-safe-area-inset-bottom'));

// Забезпечуємо обнулення відступу, якщо top-bar все ще займає місце
document.body.style.paddingTop = "calc(var(--tg-safe-area-inset-top) * 0)";

// Альтернативний спосіб: встановлюємо висоту вручну
const setFullScreenHeight = () => {
    const viewportHeight = window.innerHeight; // Висота екрану
    document.body.style.height = `${viewportHeight}px`;
};

// Оновлюємо висоту при зміні розмірів вікна
window.addEventListener("resize", setFullScreenHeight);
setFullScreenHeight();
