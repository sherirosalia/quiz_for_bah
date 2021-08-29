
  jQuery(document).ready(function($) {
    // keep quiz title paragraph under and touching the header on page load
    $('#quiz-title').css({
      'margin-top':$('#header').outerHeight()
    });

    // logo hidden on page load, appears on quiz title section on scroll
    function hideShow(scroll) {
      if (scroll >= 236) {
        $('#logo-on-scroll').show();
      } else {
        $('#logo-on-scroll').hide();
      }
    }
    hideShow($(this).scrollTop());
    $(document).scroll(function() {
      hideShow($(this).scrollTop());
    });
  });

// get the sticky element
const stickyElm = document.querySelector('#quiz-title')

// const logo_popup = $("#logo-on-scroll").append("<img id='logo-on-scroll' src='logo.png'/>");

const observer = new IntersectionObserver( 
  ([e]) => e.target.classList.toggle('isSticky', e.intersectionRatio < 1),
  {threshold: [1]}
  
  
  
);

observer.observe(stickyElm)



$(document).ready(function() {
  $(document).on('click','#logo-on-scroll',function(){

    
      $("#logo-on-scroll").css({'transform': 'rotate(-25deg) scaleX(-1)'});
  });
});



function calcscore(){
  var score = 0;
  $(".calc:checked").each(function(){
    data= $(this).data('price');
      // score+=parseInt($(this).val(),10);
      score+=parseInt(data);
  });
  // $("input[name=sum]").val(score)
  $('#results').text(score);
}
$().ready(function(){
  $(".calc").change(function(){
      calcscore()
  });
});







  



