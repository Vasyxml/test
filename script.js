// Перевірка доступності Telegram Web App API
if (window.Telegram && window.Telegram.WebApp) {
    // Ініціалізація Telegram Web App
    Telegram.WebApp.ready();

    // Ховаємо верхній бар
    Telegram.WebApp.BackButton.hide();
    Telegram.WebApp.setHeaderColor("bg_color");
    Telegram.WebApp.expand();

    // Забезпечуємо коректне обнулення відступів
    document.body.style.paddingTop = "calc(var(--tg-safe-area-inset-top) * 0)";
    console.log("Telegram Web App API працює коректно.");
} else {
    console.error("Telegram Web App API недоступний.");
}
