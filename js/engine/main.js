$( function() {
    if(($(window).height() - $('.nav').height()) < $(window).width()){
        var loaderH = $(window).width();
        var loaderW= $(window).width();
    } else {
        var loaderH = $(window).height() - $('.nav').height();
        var loaderW= $(window).height() - $('.nav').height();
    }
    $(".loader").height(loaderH);
    $(".loader").width(loaderW);
    $( ".wrap" ).tabs();
} );