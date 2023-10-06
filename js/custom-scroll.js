// const container = document.querySelector(".scroll-container");
// const content = document.querySelector(".content");

// let isDragging = false;
// let startX;
// let startY;
// let scrollLeft;
// let scrollTop;

// container.addEventListener("mousedown", (e) => {
//   isDragging = true;
//   startX = e.clientX;
//   startY = e.clientY;
//   scrollLeft = container.scrollLeft;
//   scrollTop = container.scrollTop;
//   container.style.cursor = "grabbing";
// });

// container.addEventListener("mousemove", (e) => {
//   if (!isDragging) return;
//   const deltaX = e.clientX - startX;
//   const deltaY = e.clientY - startY;
//   container.scrollLeft = scrollLeft - deltaX;
//   container.scrollTop = scrollTop - deltaY;
// });

// container.addEventListener("mouseup", () => {
//   isDragging = false;
//   container.style.cursor = "grab";
// });

// container.addEventListener("mouseleave", () => {
//   isDragging = false;
//   container.style.cursor = "grab";
// });

// container.addEventListener("wheel", (e) => {
//   container.scrollLeft += e.deltaX;
//   container.scrollTop += e.deltaY;
//   e.preventDefault();
// });
