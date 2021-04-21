changePage($('.navbar-nav li a.active'));

$('.navbar-nav li a').click(function() {
    changePage($(this));
    return false;
});