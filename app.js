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
