let docTitle = "keep it Trendy" ; 
window.addEventListener("blur", () =>{
    document.title = "Come back :(";
})
window.addEventListener("focus", () => {
    document.title = docTitle ; 
})
const header = document. querySelector ("header");
window. addEventListener ("scroll", function () {
    header. classList. toggle ("sticky", this window. scrollY > 0);
})


