$(document).ready(function() {
    function close_accordion_section() {
        $('.accordion .accordion-section-title').removeClass('active');
        $('.accordion .accordion-section-content').slideUp(400).removeClass('open');
    }
 
    $('.accordion-section-title').click(function(e) {
        // Grab current anchor value
        var currentAttrValue = $(this).attr('href');
        // console.log(currentAttrValue);
        
        // Grab toggle number
        var clientNum = currentAttrValue.replace('#accordion-', '');
        // console.log(clientNum);
        
        if($(e.target).is('.active')) {
            close_accordion_section();
        }else {
            close_accordion_section();
            // Switch image
            $('.screencap').attr('src', 'images/preview' + clientNum  + '.jpg');
            // console.log($('.screencap').attr('src'));
            // Add active class to section title
            $(this).addClass('active');
            // Open up the hidden content panel
            $('.accordion ' + currentAttrValue).slideDown(400).addClass('open'); 
            
            
        }
 
        e.preventDefault();
    });


});