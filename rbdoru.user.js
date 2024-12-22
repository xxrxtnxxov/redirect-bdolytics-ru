// ==UserScript==
// @name         Перенаправление на Bdolytics RU
// @namespace    https://github.com/xxrxtnxxov/redirect-bdolytics-ru
// @version      0.2
// @description  Автоматически перенаправляет с https://bdolytics.com/*/* на https://bdolytics.com/ru/*, если не начинается с /ru/
// @author       antiQuarianN
// @match        https://bdolytics.com/*/*
// @grant        none
// @run-at       document-start
// @license      MIT
// ==/UserScript==

(function() {
    'use strict';

    // Получаем текущий URL
    var currentUrl = window.location.href;

    // Проверяем, соответствует ли URL шаблону https://bdolytics.com/*/* и не начинается ли с /ru/
    if (currentUrl.match(/^https:\/\/bdolytics\.com\/[^\/]+\/.+$/) && !currentUrl.match(/^https:\/\/bdolytics\.com\/ru\//)) {
        // Заменяем часть URL после домена на ru/остальная_часть_URL
        var newUrl = currentUrl.replace(/^https:\/\/bdolytics\.com\/[^\/]+\//, 'https://bdolytics.com/ru/');

        // Перенаправляем на новый URL
        window.location.href = newUrl;
    }
})();
