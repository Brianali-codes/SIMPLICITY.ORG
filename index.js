function toggleNavbar(){

    let navbar = document.getElementById("navigation")
    let open = document.getElementById("navbar-open")


    if (open.style.display === "none" || open.style.display === "" ){
        open.style = "display :block;"
    }
    else if (open.style.display === "block"){
        open.style = "display :none;" 
    }
    


}
document.getElementById("navigation").onclick = toggleNavbar;














