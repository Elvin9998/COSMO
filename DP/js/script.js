$(document).ready(function() {
    $('#autoWidth').lightSlider({
        autoWidth:true,
        loop:true,
        onSliderLoad: function() {
            $('#autoWidth').removeClass('cS-hidden');
        } 
    });  
  });



  $(".menu-toggle-btn").click(function () {
      $(this).toggleClass("fa-times");
      $(".navigation-menu").toggleClass("active");
  });


  $(function () {
      
    $('.preloader-wrapper').delay(2000).fadeOut("slow");

    $('.list-item').click(function () {
        $(this).addClass('active').siblings().removeClass('active');
        let filter = $(this).attr('data-filter');
  
        if (filter == 'all') {
            $('.filter-item').show(400);
        } else {
            $('.filter-item').not('.' + filter).hide(600);
            $('.filter-item').filter('.' + filter).show(600);
        }
    });
    $('.filter-container').magnificPopup({
        delegate: 'li',
        type: 'image',
        gallery: {
            enabled: true,
        },
        showCloseBtn: true,
        closeBtnInside: true,
        alignTop: false,
        closeOnBgClick: true,
    })


    
  });
  
  

  document.getElementById("btn_scroll_top").onclick=function(){
    window.scrollTo({
        top:0,
        left:0,
        behavior:"smooth",
    });
}

window.addEventListener("scroll",()=>{
    if(window.pageYOffset >100){
        document.getElementById("btn_scroll_top").classList.add("active");
    }else{
        document.getElementById("btn_scroll_top").classList.remove("active");
    }
})
