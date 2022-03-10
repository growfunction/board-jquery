$( document ).ready(function() {
   $('li a').on('click tap', function(){
       $(this).toggleClass('active')
       if($(this).hasClass('active')){
        $(this).closest('li').find('.sub-menu').addClass('d-flex')
        $(this).closest('li').find('a').find('pre').addClass('d-none')
        $(this).closest('li').find('a').find('.counter').text('19').addClass('right')
        $(this).closest('li').find('a').find('.rotate').addClass('rotate-active')
        
       }else{ 
        $(this).closest('li').find('.sub-menu').removeClass('d-flex')
        $(this).closest('li').find('a').find('pre').removeClass('d-none')
        $(this).closest('li').find('a').find('.counter').text('1').removeClass('right')
        $(this).closest('li').find('a').find('.rotate').removeClass('rotate-active')
       }
   })
   $('.sub-menu li a').on('click tap', function(){
        if($('.sub-menu').hasClass('d-flex')){
            $(this).closest('li').find('.sub-menu-child').toggleClass('d-flex')
        }else{
            
        }
    })
   $('.click-sidebar').on('click tap', function(){
        $('.sidebar').toggleClass('sidebar-active')
    })
});
