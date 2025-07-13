document.getElementById("dark-mode").onclick = toggleDarkMode;
function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle("dark-mode");
    const isDarkMode = body.classList.contains("dark-mode");
    localStorage.setItem("darkMode", isDarkMode ? "enabled" : "disabled");
}