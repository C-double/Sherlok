document.addEventListener("DOMContentLoaded", () => {
    // Находим все радио-кнопки
    const radios = document.querySelectorAll(".answer-input");

    radios.forEach(radio => {
        radio.addEventListener("change", () => {
            // Определяем текущий вопрос
            const question = radio.closest(".question");

            // Скрываем все ответы внутри текущего вопроса
            const results = question.querySelectorAll(".answer-result");
            results.forEach(result => {
                result.style.display = "none"; // Скрываем текст результата
            });

            // Показываем ответ, связанный с выбранной радио-кнопкой
            if (radio.checked) {
                const result = radio.nextElementSibling.nextElementSibling;
                if (result) {
                    result.style.display = "block";
                }
            }
        });
    });
});
