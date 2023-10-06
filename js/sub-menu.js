// first drop-down
let subMenuOpeners = document.querySelectorAll(".open-sub");
let header = document.querySelector("#header");
let subMenus = document.querySelectorAll(".sub-menu");

for (let i = 0; i < subMenuOpeners.length; i++) {
    subMenuOpeners[i].onclick = function openSub() {
        subMenus[i].classList.add("active-sub")    
}
}
document.addEventListener('click', (e) => {
    for (let j = 0; j < subMenus.length; j++) {
        if(!header.contains(e.target)) {
                subMenus[j].classList.remove("active-sub");
            }
  }
});
// second drop-down
let secondSubMenuOpeners = document.querySelectorAll(".open-sub2");
let secondSubMenus = document.querySelectorAll(".sub-menu2");
for (let k = 0; k < secondSubMenuOpeners.length; k++) {
    const opener = secondSubMenuOpeners[k];
    opener.addEventListener("click",function openSub2 () {
        opener.classList.toggle('opener-active')
        secondSubMenus[k].classList.toggle('sub-active2');
    })
}
