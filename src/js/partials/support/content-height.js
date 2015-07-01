//content-height fix 

function resizeSiteContent() {
    var windowHeight = $(window).height();
    var debug = $(".debug, .debug .grid");

    //var bgb = $(".body-bg-bottom");
    //var bgr = $(".body-bg-right");
    //var bgbH = $($(".container-wrapper").height()).toEm()-127.5;
    //console.log($($(".container-wrapper").height()).toEm())
    /*bgb.css({
        "height":bgbH+"rem", 
    });*/

    //$(".body-bg").css("min-height",$(".container-wrapper").height()+"px");
    
    debug.css({"height":windowHeight+"px"});
    
}
resizeSiteContent();
$(window).resize(function(){
    resizeSiteContent();
});
//setInterval(function(){resizeSiteContent();},500)