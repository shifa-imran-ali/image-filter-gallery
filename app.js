let filterBtns = document.querySelectorAll(".filter-btns button");
let products = document.querySelectorAll(".products .item");
let filterProducts = function(e) {
    let activeBtns = document.querySelectorAll(".filter-btns button.active");
    for (let i = 0; i < activeBtns.length; i++) {
        activeBtns[i].classList.remove("active");
    }
    e.target.classList.add("active");
    for (let i = 0; i < products.length; i++) {
        let item = products[i];
        let shouldHide = !(item.getAttribute("data-name") === e.target.getAttribute("data-name") || e.target.getAttribute("data-name") === "all");
        if (shouldHide) {
            item.classList.add("hide");
        } else {
            item.classList.remove("hide");
        }
    }
};
for (let i = 0; i < filterBtns.length; i++) {
    filterBtns[i].addEventListener("click", filterProducts);
}
