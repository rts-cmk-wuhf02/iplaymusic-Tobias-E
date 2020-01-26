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


//
});



