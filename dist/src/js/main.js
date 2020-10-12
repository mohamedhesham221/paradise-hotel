$(function(){
    'use strict';



  //box shadow appear when scroll down 
    $(window).scroll(function(){

        if($(this).scrollTop() >= 500){

            $(".navbar").css({
                boxShadow: "0 5px 30px #000000"
            })
        }else{

            $(".navbar").css({
                boxShadow: "unset"
            })
        }
    })


// hide and show password
    $(".for-join i:first-child").on("click", function(){
        
        $(this).hide();
        $(".for-join i:last-child").show();
        $("#changeAttr").removeAttr("type","password").attr("type","text");
    })

    $(".for-join i:last-child").on("click", function(){
        
        $(this).hide();
        $(".for-join i:first-child").show();
        $("#changeAttr").removeAttr("type","text").attr("type","password");
    })
//hide and show password
    $(".for-sign i:first-child").on("click", function(){
        
        $(this).hide();
        $(".for-sign i:last-child").show();
        $("#changeAttr2").removeAttr("type","password").attr("type","text");
    })

    $(".for-sign i:last-child").on("click", function(){
        
        $(this).hide();
        $(".for-sign i:first-child").show();
        $("#changeAttr2").removeAttr("type","text").attr("type","password");
    })

//rooms js


//click function to open slider-for-single
$("#openSingleSlider").on("click", function(){

    $("#singleBed").fadeIn(2000)
})

//click function to close slider-for-single
$("#closeSingleSlider").on("click", function(){

    $("#singleBed").fadeOut(2000)
})

//click function to open slider-for-double
$("#openDoubleSlider").on("click", function(){

    $("#doubleBed").fadeIn(2000)
})

//click function to close slider-for-double
$("#closeDoubleSlider").on("click", function(){

    $("#doubleBed").fadeOut(2000)
})

//click function to open slider-for-deluxe
$("#openDeluxeSlider").on("click", function(){

    $("#deluxeBed").fadeIn(2000)
})

//click function to close slide-for-deluxe
$("#closeDeluxeSlider").on("click", function(){

    $("#deluxeBed").fadeOut(2000)
})

//click function to close slide-for-suite
$("#openSuiteSlider").on("click", function(){

    $("#suiteBed").fadeIn(2000)
})

//click function to close slide-for-suite
$("#closeSuiteSlider").on("click", function(){

    $("#suiteBed").fadeOut(2000)
})

//prevent default for a except room-nav a  && details-room a
$("a:not(.room-nav a):not(.details-room a)").on("click", function(e){
    e.preventDefault(); 

//data scroll to sections
    $("html,body").animate({
        scrollTop: $("#" + $(this).data('scroll')).offset().top
    }, "fast")
})

//add class to navbar li
$(".navbar .nav-item").on("click", function(){

    $(this).addClass("active").siblings().removeClass("active")
})

//function to add class and remove from others to mark the active section  
$("#si").on("click", function(){

    $(".single-img").addClass("border")
    $(".double,.deluxe,.suite").addClass("opacity")

    if($(".single-img").hasClass("border") && $(".double,.deluxe,.suite").addClass("opacity")){

        $(".double-img,.deluxe-img,.suite-img").removeClass("border");
        $(".single").removeClass("opacity");   
    }

})

//function to add class and remove from others to mark the active section  
$("#do").on("click", function(){
    $(".double-img").addClass("border")
    $(".single,.deluxe,.suite").addClass("opacity")

    if($(".double-img").hasClass("border") && $(".single,.deluxe,.suite").addClass("opacity")){

        $(".single-img,.deluxe-img,.suite-img").removeClass("border");
        $(".double").removeClass("opacity");        
    }    
})

//function to add class and remove from others to mark the active section  
$("#de").on("click", function(){
    $(".deluxe-img").addClass("border")
    $(".double,.single,.suite").addClass("opacity")


    if($(".deluxe-img").hasClass("border") && $(".single,.double,.suite").addClass("opacity")){

        $(".single-img,.double-img,.suite-img").removeClass("border");
        $(".deluxe").removeClass("opacity");        
    }    
})

//function to add class and remove from others to mark the active section  
$("#su").on("click", function(){
    $(".suite-img").addClass("border")
    $(".double,.deluxe,.single").addClass("opacity")

    if($(".suite-img").hasClass("border") && $(".single,.double,.deluxe").addClass("opacity")){

        $(".single-img,.double-img,.deluxe-img").removeClass("border");
        $(".suite").removeClass("opacity");        
    }    
})

//remove all classes from rooms 
$(".rooms").on("click", function(){
    $(".double,.deluxe,.single,.suite").removeClass("opacity")
    $(".single-img,deluxe-img,.double-img,.suite-img")
})

//welcome message with typed.js
var typed = new Typed('.type', {
    strings: ['WELCOME TO OUR' , ' <i class="fas fa-crown"></i> PARADISE <i class="fas fa-crown"></i> <br> <img class="img-fluid" src="images/logo.png">'], 
                                typeSpeed: 80,
                                backSpeed: 30,
                                loop: true,
    smartBackspace: true, // Default value 
    showCursor: false
  });

})

//overlay loading
$(window).on("load", function(){


     $(".loading-welcome-message").fadeOut(8000,function(){
        $('body').css('overflow','auto')
     })

     

 })
