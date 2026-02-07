const projectData = {
    robotics: {
        title: "Роботизация производства",
        pre: ["Тренд на импортозамещение", "Дефицит кадров", "Оптимизация затрат", "Субсидии до 50%"],
        effects: ["Рост выработки на 40%", "Окупаемость от 14 мес", "Работа 24/7 без потери качества", "Снижение травматизма"],
        partners: ["НПП Радиосвязь", "УВЗ", "ОмскТрансМаш"],
        images: [
            "https://i.ibb.co/1GtNrqPj/image.png", "https://i.ibb.co/B2MPgVWY/image.png",
            "https://i.ibb.co/CpxHGsYY/image.png", "https://i.ibb.co/sJNFG9sK/image.png",
            "https://i.ibb.co/WNLtW5Bw/image.png", "https://i.ibb.co/k6HPbKs8/image.png"
        ],
        captions: [
            "Сварка кузовных элементов", "Сборочный манипулятор",
            "Паллетирование продукции", "Логистический робот AGV",
            "Нанесение покрытий", "Интеграция в конвейер"
        ]
    },
    quality: {
        title: "Контроль качества",
        pre: ["Развитие алгоритмов ИИ", "Оцифровка процессов дефектоскопии", "Снижение влияния человеческого фактора"],
        effects: ["Брак снижен на 35%", "Скорость контроля x3", "Автоматическая сортировка", "Обнаружение микродефектов"],
        partners: ["ГАЗ ГРУППА", "ШЕРЕМЕТЬЕВО", "ЕВРАЗ"],
        images: [
            "https://i.ibb.co/6dL0hc9/image.png", "https://i.ibb.co/TB3Mc4Vq/image.png",
            "https://i.ibb.co/3mDt1wkS/image.png", "https://i.ibb.co/N6QXGXmP/image.png",
            "https://i.ibb.co/0yrPsvGH/image.png", "https://i.ibb.co/ynQKsVBk/image.png"
        ],
        captions: [
            "Анализ структуры металла", "Детекция на ленте",
            "Контроль комплектности", "Тепловизионный контроль",
            "Лазерное сканирование", "Пост видеоаналитики"
        ]
    },
    security: {
        title: "Средства охраны (ИТСО)",
        pre: ["Выполнение требований ФЗ-256", "Антитеррористическая защищенность", "Снижение издержек на охрану"],
        effects: ["Реакция на угрозы < 5 сек", "Затраты на персонал -30%", "100% покрытие периметра", "Интеграция с биометрией"],
        partners: ["РОСНЕФТЬ", "МВД РОССИИ", "ФОРВАРД ЭНЕРГО"],
        images: [
            "https://i.ibb.co/XZ65YFQb/image.png", "https://i.ibb.co/C5fhRSjq/image.png",
            "https://i.ibb.co/Cpq6jKVX/image.png", "https://i.ibb.co/Xkkk5wb2/image.png",
            "https://i.ibb.co/7NTrr57q/image.png", "https://i.ibb.co/7tyWcmvg/image.png"
        ],
        captions: [
            "Защита периметра", "Обнаружение БПЛА",
            "Биометрический доступ", "Ситуационный центр",
            "Интеллектуальное видео", "Досмотровый комплекс"
        ]
    },
    eco: {
        title: "Экомониторинг",
        pre: ["Программа «Безопасный труд»", "Автоматизированный контроль выбросов", "ESG-повестка"],
        effects: ["Аварийность -50%", "Штрафы 0 руб", "Сбор данных 24/7", "Прозрачность для регуляторов"],
        partners: ["НОРНИКЕЛЬ", "СУЭК", "СЕЛИГДАР"],
        images: [
            "https://i.ibb.co/KpVNHXKx/image.png", "https://i.ibb.co/JwSJ3vfK/image.png",
            "https://i.ibb.co/pv40LC1H/image.png", "https://i.ibb.co/fdZGCyYj/image.png",
            "https://i.ibb.co/fY50zwwW/image.png", "https://i.ibb.co/yFmPpXhx/image.png"
        ],
        captions: [
            "Мониторинг выбросов", "Анализ воздуха",
            "Контроль сточных вод", "Визуализация данных",
            "Сеть IoT датчиков", "Пост контроля"
        ]
    },
    equipment: {
        title: "Технологическое оборудование",
        pre: ["Замена зарубежных вендоров", "Модернизация парка", "Инженерное сопровождение"],
        effects: ["КПД +25%", "Срок службы +15 лет", "Снижение простоев", "Локальный сервис"],
        partners: ["ЯЗДА", "ЯМЗ", "ХИАГДА"],
        images: [
            "https://i.ibb.co/hR5NBkZq/image.png", "https://i.ibb.co/4RwQwpqb/image.png",
            "https://i.ibb.co/vCsDZh6Q/image.png", "https://i.ibb.co/1fCPdsNB/image.png",
            "https://i.ibb.co/fVX0HMtx/image.png", "https://i.ibb.co/tp125yc0/image.png",
            "https://i.ibb.co/3YLP8644/image.png", "https://i.ibb.co/Z6V4LW6X/image.png"
        ],
        captions: [
            "Насосная станция", "Модульная котельная",
            "Вентиляция", "Теплообменник",
            "Узел учета", "Турбоагрегат",
            "Очистные сооружения", "Управление ТП"
        ]
    }
};

function openSlide(id) {
    const item = projectData[id];
    const content = document.getElementById('modal-content');
    
    content.innerHTML = `
        <div class="slide-grid animate__animated animate__fadeIn">
            <div class="info-col">
                <p style="color: #666; font-size: 0.8rem; letter-spacing: 2px;">РЕШЕНИЕ</p>
                <h2>${item.title}</h2>
                
                <div style="margin: 40px 0;">
                    <p style="color: #ff4f12; font-size: 0.7rem; font-weight: bold; letter-spacing: 2px; margin-bottom: 20px;">ЗАДАЧИ</p>
                    <ul style="list-style: none; padding: 0; margin: 0; border-top: 1px solid #222;">
                        ${item.pre.map(p => `<li style="padding: 15px 0; border-bottom: 1px solid #222; font-size: 0.9rem; opacity: 0.8;">${p}</li>`).join('')}
                    </ul>
                </div>

                <div style="margin-bottom: 40px;">
                    <p style="color: #ff4f12; font-size: 0.7rem; font-weight: bold; letter-spacing: 2px; margin-bottom: 20px;">ФАКТИЧЕСКИЙ ЭФФЕКТ</p>
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px;">
                        ${item.effects.map(e => `<div style="background: #111; padding: 15px; font-size: 0.85rem; border-left: 2px solid #ff4f12;">${e}</div>`).join('')}
                    </div>
                </div>

                <div>
                    <p style="color: #444; font-size: 0.6rem; font-weight: bold; letter-spacing: 3px; margin-bottom: 15px;">ПАРТНЕРЫ ПО ВНЕДРЕНИЮ</p>
                    <div style="display: flex;">
                        ${item.partners.map(p => `<span class="partner-tag">${p}</span>`).join('')}
                    </div>
                </div>
            </div>
            <div class="visual-col">
                <div class="mosaic">
                    ${item.images.map((img, i) => `
                        <div class="m-item animate__animated animate__zoomIn animate__delay-${i}s">
                            <div class="m-img"><img src="${img}"></div>
                            <p class="m-caption">${item.captions[i] || "Проект"}</p>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    `;

    document.getElementById('modal').classList.add('visible');
    document.body.style.overflow = 'hidden';
}

function closeSlide() {
    document.getElementById('modal').classList.remove('visible');
    document.body.style.overflow = 'auto';
}
