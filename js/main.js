
var options = {
  strings: ["website", "softweres","apps"],
  typeSpeed: 50,
     startDelay: 10,
    backSpeed:50,
    backDelay: 700,
    loop: true
}

var typed = new Typed(".element", options);

var navChange = $("#navEnd").offset().top
$(window).scroll(function(){

 var windowScroll = $(window).scrollTop()
 
 if(windowScroll > navChange)
     {
         
$(".custom-nav").css("backgroundColor","#fff")
$(".custom-nav").css("boxShadow","5px 5px 15px 0 rgba(31, 31, 31, 0.07)")
$(".custom-nav").css("height","60px")        
$(".nav-item a").css("color","#000")
$(".icons i").css("color","#000")
$(".icons i").css("border","1px soild #000")
$(".navbar-brand img").attr('src','images/logo-dark.png')
         
     }
else
    {
$(".custom-nav").css("backgroundColor","transparent") 
$(".custom-nav").css("boxShadow","0")
$(".custom-nav").css("height","80px")
$(".nav-item a").css("color","#fff")
$(".icons i").css("color","#fff")
$(".icons i").css("border","1px soild #fff")
$(".navbar-brand img").attr('src','images/logo-light.png')
        
    
    }
   
})
//var mySvg = $('svg').drawsvg();
//
//mySvg.drawsvg('animate');


