// Перевірка доступності Telegram Web App API
if (window.Telegram && window.Telegram.WebApp) {
    const app = window.Telegram.WebApp;

    // Ініціалізація Web App
    app.ready();

    // Запит на перехід у повноекранний режим
    app.requestFullscreen();

    // Приховування верхнього бару
    app.setHeaderColor('hidden');

    // Розгортання додатку на весь екран
    app.expand();
} else {
    console.error("Telegram Web App API недоступний.");
}
