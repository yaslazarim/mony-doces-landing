document.querySelector(".bi-list").addEventListener('click', openMenu)
document.querySelector(".bi-x").addEventListener('click', closeMenu)

function openMenu(){
    var hamburguer_menu = document.querySelector(".main-navigation__hamburguer")
    hamburguer_menu.style.display = "block"

}

function closeMenu(){
    document.querySelector(".main-navigation__hamburguer").style.display = "none"   
}