$(document).ready(function() {
    $("#carousel a, .picList a")
        .attr('rel', 'gallery')
        .fancybox({
            openEffect: 'none',
            closeEffect: 'none',
            margin: [20, 60, 20, 60]
        });
});
