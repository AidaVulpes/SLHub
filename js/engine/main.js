$( function() {
    if(($(document).height() - $('.nav').height()) < $(document).width()){
        var loaderH = $(document).width();
        var loaderW= $(document).width();
    } else {
        var loaderH = $(document).height() - $('.nav').height();
        var loaderW= $(document).height() - $('.nav').height();
    }
    $(".loader").height(loaderH);
    $(".loader").width(loaderW);
    $( ".wrap" ).tabs();
} );