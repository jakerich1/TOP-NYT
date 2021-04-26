const footSpan = document.querySelectorAll('.fcol')

footSpan.forEach(element => {
    element.addEventListener("click", event => {
        let group = event.target.dataset['group']
        toggleList(group)
    })
});

function toggleList(group){

    if (window.innerWidth < 850) {

        document.querySelectorAll('.linWrap').forEach(element => {
            element.style.display = "none"
        });

        const groupSelect = `div[data-linkGroup="${group}"]`
        const list = document.querySelector(groupSelect)
        
        list.style.display = "grid"

    } 

}

window.addEventListener("resize", function () {

    if (window.innerWidth > 849) {
        document.querySelectorAll('.linWrap').forEach(element => {
            element.style.display = "block"
        });
    }else{
        document.querySelectorAll('.linWrap').forEach(element => {
            element.style.display = "none"
        });
    }

})