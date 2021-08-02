$(document).ready(function(){
    $(".menu-btn").on("click", function(e) {
        e.preventDefault();
        console.log("click");
        $(".nav-element").toggleClass("active-nav");
    });
})
