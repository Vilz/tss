if($(".js-img-fullscreen").length) {
    $(window).load(function() {    

        var theWindow        = $(window),
            $bg              = $(".js-img-fullscreen img"),
            aspectRatio      = $bg.width() / $bg.height();
                                    
        function resizeBg() {
            
            if ( (theWindow.width() / theWindow.height()) < aspectRatio ) {
                $bg
                    .removeClass()
                    .addClass('bgheight');
            } else {
                $bg
                    .removeClass()
                    .addClass('bgwidth');
            }
                        
        }
                                    
        theWindow.resize(resizeBg).trigger("resize");

    });
}