/**
 * Page toggler events
 */

function changeActive(link) {
    if(link.hasClass('active')) return;
    $('.navbar-nav li a.active').removeClass('active');
    link.addClass('active');
}

function changePage(page) {
    let page2 = page.attr('href');
    $.post(page2, (result) => {
        result = createQuestion(result);
        $('.tester').hide().html(result).fadeIn(350);
    });
    changeActive(page);
}

/**
 * Content creator
 */

function createQuestion(title) {
    return $('<div>').addClass('p-3').append(
        $('<p>').addClass('h-1 text-info').html(title)
    );
}