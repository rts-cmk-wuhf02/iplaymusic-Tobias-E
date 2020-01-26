document.addEventListener("DOMContentLoaded", function(){

// Hide/show sub categories
    let arrayMore = Array.from(document.querySelectorAll('.categoriesContainer__category'));
    let arraySub = Array.from(document.querySelectorAll('.categoriesContainer__subCategories'));
    
    arrayMore.forEach(category => {
        category.addEventListener('click', function(){
            if(arraySub[arrayMore.indexOf(category)].classList.contains('hide')){
                arraySub[arrayMore.indexOf(category)].classList.remove('hide')
            } else{
                arraySub[arrayMore.indexOf(category)].classList.add('hide')
            }
        });
    });

// Different background color on each category
    const colors = ['#D70060', '#E54028', '#F18D05', '#F2BC06', '#5EB11C', '#3A7634', '#0ABEBE', '#00A1CB', '#115793'];
    arrayMore.forEach(e => {
        e.style.background = colors[arrayMore.indexOf(e) % 9]
    });
});



