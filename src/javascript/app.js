document.addEventListener("DOMContentLoaded", function(){
    const params = new URLSearchParams(window.location.search);
    console.log(params)
    const page = params.toString("/");
    console.log(page)
});