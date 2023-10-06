const footerCategories = document.querySelectorAll(".footer-top__menu-category");
const footerCategoriesMenues = document.querySelectorAll(".footer-top__menu-items");

for (let i = 0; i < footerCategories.length; i++) {
    const footerCategory = footerCategories[i];
    const footerCategoriesMenu = footerCategoriesMenues[i];
    footerCategory.addEventListener('click', function showMenuColumn() {
        footerCategory.classList.toggle('category-active');
        footerCategoriesMenu.classList.toggle('menu-active');
    })
    
}