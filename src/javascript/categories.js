document.addEventListener("DOMContentLoaded", function(){
    
    const more = document.querySelectorAll(".categoriesContainer__category");

    Array.from(more).forEach(link => {
        link.addEventListener('click', function(){
            console.log('hello!')
        })
    })
});