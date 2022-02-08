const menuIcon = document.querySelector(".menu");
const closeSidebar = document.querySelector(".close");
const sidebar = document.querySelector(".sidebar");
const sidebarTitle = document.querySelector(".sidebar-title");

menuIcon.addEventListener("click", () => {
  sidebar.classList.add("sidebar-toggle");
  sidebarTitle.classList.remove("hide");
});

closeSidebar.addEventListener("click", () =>
  sidebar.classList.remove("sidebar-toggle")
);
