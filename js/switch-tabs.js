let switchTabs = document.querySelectorAll(".products-categories__tab ");
let switchButtons = document.querySelectorAll(".products-categories__switch");

function removeActiveClass() {
    switchTabs.forEach(( switchTabs) =>  switchTabs.classList.remove('active-tab'));
    switchButtons.forEach(( switchButtons) =>  switchButtons.classList.remove('active-btn'));
      }

for (let i = 0; i < switchButtons.length; i++) {
   let switchButton = switchButtons[i];
   
   switchButton.addEventListener('click', function showTab() {
    removeActiveClass();
    switchButton.classList.add('active-btn');
    switchTabs[i].classList.add('active-tab');
   })
}