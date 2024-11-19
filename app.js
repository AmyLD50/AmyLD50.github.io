const toggleButton = document.getElementById("theme-toggle");
const body = document.body;

const currentMode = localStorage.getItem("theme") || "dark-mode";
body.classList.add(currentMode);

toggleButton.textContent = currentMode === "dark-mode" ? "Switch to Light Mode" : "Switch to Dark Mode";

toggleButton.addEventListener("click", () => {
    const newMode = body.classList.contains("dark-mode") ? "light-mode" : "dark-mode";
    body.classList.replace("dark-mode", newMode);
    body.classList.replace("light-mode", newMode);

    toggleButton.textContent = newMode === "dark-mode" ? "Switch to Light Mode" : "Switch to Dark Mode";

    localStorage.setItem("theme", newMode);
});
document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll(".section");

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    sections.forEach(section => {
        observer.observe(section);
    });
});


function mailButton(){
    alert("test");
};
