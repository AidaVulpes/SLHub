function initLoader() {
    if(($(window).height() - $('.nav').height() - 80) > ($(window).width() - $('.nav').height() - 80)){
        var loaderH = $(window).width() -  $('.nav').height() - 80;
        var loaderW= $(window).width() -  $('.nav').height() - 80;
    } else {
        var loaderH = $(window).height() - $('.nav').height() - 80;
        var loaderW= $(window).height() - $('.nav').height() - 80;
    }
    $(".loader").height(loaderH);
    $(".loader").width(loaderW);
}