$( function() {
    if(($(document).height() - $('.nav').height()) < $(document).width()){
        var loaderH = $(document).height() - $('.nav').height();
        var loaderW= $(document).height() - $('.nav').height();
    } else {
        var loaderH = $(document).width();
        var loaderW= $(document).width();
    }
    $(".loader").height(loaderH);
    $(".loader").width(loaderW);
    $( ".wrap" ).tabs();
} );