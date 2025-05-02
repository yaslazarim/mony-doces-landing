document.querySelector(".bi-list").addEventListener('click', openMenu)
document.querySelector(".bi-x").addEventListener('click', closeMenu)

function openMenu(){
    var hamburguer_menu = document.querySelector(".main-navigation__hamburguer")
    hamburguer_menu.style.display = "block"
    hamburguer_menu.style.right = "0px"
}

function closeMenu(){
    document.querySelector(".main-navigation__hamburguer").style.display = "none"   
}

document.querySelectorAll(".main-action").forEach((action) => {
    action.addEventListener('click', closeMenu)
})
