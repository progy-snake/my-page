// Слайдер
let slideIndex = 0;
const slides = document.querySelectorAll(".slides .slide");
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = i === index ? "block" : "none";
    });
}

prevButton.addEventListener("click", () => {
    slideIndex = (slideIndex > 0) ? slideIndex - 1 : slides.length - 1;
    showSlide(slideIndex);
});

nextButton.addEventListener("click", () => {
    slideIndex = (slideIndex < slides.length - 1) ? slideIndex + 1 : 0;
    showSlide(slideIndex);
});

showSlide(slideIndex);

// Функція збереження та відображення коментарів
const commentList = document.getElementById("commentList");
const commentInput = document.getElementById("commentInput");
const submitComment = document.getElementById("submitComment");

function loadComments() {
    const comments = JSON.parse(localStorage.getItem("comments")) || [];
    comments.forEach((comment) => {
        const li = document.createElement("li");
        li.textContent = comment;
        commentList.appendChild(li);
    });
}

submitComment.addEventListener("click", () => {
    const comment = commentInput.value.trim();
    if (comment) {
        // Додаємо новий коментар до списку
        const li = document.createElement("li");
        li.textContent = comment;
        commentList.appendChild(li);
        
        // Оновлюємо localStorage
        const comments = JSON.parse(localStorage.getItem("comments")) || [];
        comments.push(comment);
        localStorage.setItem("comments", JSON.stringify(comments));

        commentInput.value = "";
    }
});

// Завантажуємо коментарі при завантаженні сторінки
loadComments();

// Форма замовлення
const orderForm = document.getElementById("orderForm");
orderForm.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Ваше замовлення прийнято!");
    orderForm.reset();
});

// Пошук стилю
function searchStyle(styleName) {
    const query = encodeURIComponent(styleName);
    const searchURL = `https://www.google.com/search?q=${query}`;
    window.open(searchURL, "_blank");
}
