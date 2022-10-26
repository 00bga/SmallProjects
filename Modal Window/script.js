const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const closeBtn = document.querySelector(".close");
const showBtn = document.querySelectorAll(".show-modal");

const openModal = function () {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
};

const closeModal = function () {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
};

for (let i = 0; i < showBtn.length; i++) {
    showBtn[i].addEventListener("click", openModal);
}

closeBtn.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && !modal.classList.contains("hidden"))
    {
        closeModal();
    }
})
