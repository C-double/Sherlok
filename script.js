// JavaScript для обработки чекбоксов
document.addEventListener("DOMContentLoaded", () => {
    // Находим все чекбоксы
    const checkboxes = document.querySelectorAll(".answer-input");

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener("change", () => {
            // Убедиться, что другие чекбоксы сброшены, если это необходимо
            if (checkbox.checked) {
                const siblingCheckboxes = checkbox
                    .closest(".answers")
                    .querySelectorAll(".answer-input");

                siblingCheckboxes.forEach(sibling => {
                    if (sibling !== checkbox) {
                        sibling.checked = false; // Сбрасываем другие чекбоксы
                    }
                });
            }
        });
    });
});
