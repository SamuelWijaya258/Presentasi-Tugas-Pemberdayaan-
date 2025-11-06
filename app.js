const tabletQuery = window.matchMedia('(width <= 1024px')
const toggleButton = document.getElementById('toggle-btn');
const sidebar = document.getElementById('sidebar');

function toggleSidebar(){
    sidebar.classList.toggle('close')
    toggleButton.classList.toggle('rotate')
}

function viewportChange(){
    if(tabletQuery.matches){
        sidebar.classList.add('close')
        toggleButton.classList.add('rotate')
    }
    else{
        sidebar.classList.remove('close')
        toggleButton.classList.remove('rotate')
    }
}

tabletQuery.addListener(viewportChange);

viewportChange(tabletQuery);

let darkmode = localStorage.getItem('darkmode');
const themeSwitch = document.getElementById("theme-switch");

const enableDarkmode = () => {
    document.body.classList.add('darkmode')
    localStorage.setItem('darkmode', "active")
}

const disableDarkmode = () => {
    document.body.classList.remove('darkmode')
    localStorage.setItem('darkmode', null)
}

if(darkmode === "active") enableDarkmode()

themeSwitch.addEventListener("click", () => {
    darkmode = localStorage.getItem('darkmode')
    darkmode !== "active" ? enableDarkmode() : disableDarkmode()
})