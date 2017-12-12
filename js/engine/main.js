$( function() {
    initLoader();
    $( ".wrap" ).tabs();
    load('wishlist', 'main');
} );

function load(target, state) {
    $(".loader").show();
    $(".sl-content").hide();
    switch (target){
        case 'wishlist':
            loadWishList(state);
            break;
    }
}
