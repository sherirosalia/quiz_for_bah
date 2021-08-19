
window.addEventListener('load', (event) => {
    console.log('page is fully loaded');
    

  });

  $(window).scroll(function(){
    var sticky = $('.sticky'),
        scroll = $(window).scrollTop();
  
    if (scroll >= 300) sticky.addClass('fixed');
    else sticky.removeClass('fixed');
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

  // this works for one button
  // $(function(){
  //   $('input[type=radio]').on('click',function(){
  //     data= $(this).data('price');
  //     $('#results').text(data);
     
  //   });
  // });

