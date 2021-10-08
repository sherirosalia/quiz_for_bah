
  jQuery(document).ready(function($) {
    // keep quiz title paragraph under and touching the header on page load
    $('#quiz-title').css({
      'margin-top':$('#header').outerHeight()
    });

    // logo hidden on page load, appears on quiz title section on scroll
    function hideShow(scroll) {
      if (scroll >= 236) {
        $('#logo-on-scroll').show();
        $('#quiz-explanation2').show();
        $('#quiz-explanation1').hide();
        $('#magnifying-glass').hide();
      } else {
        $('#logo-on-scroll').hide();
        $('#quiz-explanation2').hide();
        $('#quiz-explanation1').show();
        $('#magnifying-glass').show();

      }
    }
    hideShow($(this).scrollTop());
    $(document).scroll(function() {
      hideShow($(this).scrollTop());
    });
  });

// get the sticky element
const stickyElm = document.querySelector('#quiz-title')



const observer = new IntersectionObserver( 
  ([e]) => e.target.classList.toggle('isSticky', e.intersectionRatio < 1),
  {threshold: [1]}
  
  
  
);

observer.observe(stickyElm)


$(document).ready(function() {
  $('#readiness').hide(); 

  let counter = 0
  $(document).on('click','#logo-on-scroll',function(){
    counter = counter +1
    // alert(counter) 
    // console.log(counter % 2) 
    let remainder = counter % 2
    // console.log(remainder)
     
    if( remainder === 0){
      console.log('zero remainder: ' + remainder);
      $("#logo-on-scroll").css({'transform': 'rotate(8deg) scaleX(-1)'});
    }

    else{
      console.log('remainder of one: ' + remainder);
      $("#logo-on-scroll").css({'transform': 'rotate(-18deg) scaleX(-1)'});
    }
      
      

   
  });

});


function calcscore(){
  var score = 0;
  var count = 0;
  $(".calc:checked").each(function(){
    data= $(this).data('price');

      score+=parseInt(data);
      count = count + 1
      
      return score
      
  });

  $('#results').text(score); 

  

  if(count ===6){
    console.log(score)
    $('#readiness').show();

    if(score > 15){
      // alert('you are ready Freddy!')
      $('#readiness-text').text('\" Congratulations, you are data ready!  Here are some ideas of what you might want to do next to accelerate the monetization of data momentum. \"');
    }
    else if(score > 11){

      $('#readiness-text').text('\"Well done!  The data experience you have gained so far has powered your success and given you a knowledge base with which to build.  Here is where you might want to go next. \"');
      // alert('check out article on selling your data')

    }
    else if(score <=10){
      $('#readiness-text').text('\"Congratulations! You are thinking about the information your business has collected and how to organize it. You have the chance now to architect something that will serve you for many years to come. Lets chat to see how we can support you in your data journey. \"');

      // alert('you\'re poised to make a lot of money')

    }

    // else if(score > 9){
    //   $('#readiness-text').text('\"You still have time to sharpen your pencil\"');

    //   // alert('time to sharpen your pencil')

    // }

    // else {
    //   $('#readiness-text').text('\"We are here for you!\"');
    //   // alert('we are here for you')
    // }

  }


  }
  






function calcscoreOld(){
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





// $(document).ready(function() {
//   for (var counter = 0; counter < 11; counter++){
//     console.log(counter)
//     for($(document).on('click','#logo-on-scroll',function(){
//       console.log('clicked')
//       console.log(counter % 2)
      
//     }


//   })

// }
  // for($(document).on('click','#logo-on-scroll',function()){
  //   numberOfClicks ++1;
  // }
  // $(document).on('click','#logo-on-scroll',function(){
    


    
  

//     for (var numberOfClicks = 1; numberOfClicks < 4; numberOfClicks++){
//       if(numberOfClicks % 2 === 1){
//         $("#logo-on-scroll").css({'transform': 'rotate(-25deg) scaleX(-1)'});

//       }
//       if(numberOfClicks % 2 === 0){
//         $("#logo-on-scroll").css({'transform': 'rotate(25deg) scaleX(-1)'});

//       }
//     }

      
//   });
// });

// $("#button").click(function() {
//   var $jObj = $("#shape");
//   if ($jObj.hasClass('rotate90')) {
//       $jObj.removeClass('rotate90').addClass('rotate180');    
//   } else {
//       $jObj.removeClass('rotate180').addClass('rotate90');   
//   }
// });

// $("#logo-on-scroll").click(
//   function() {

//     let imgLogo = $("#logo-on-scroll")

//     if(imgLogo.hasClass('rotate25neg')) {

//         imgLogo.removeClass('rotate25neg').addClass('rotate25pos');

//       }
//     else {

//       imgLogo.removeClass('rotate25pos').addClass('rotate25neg');
//     }
//   }

    

// )




// $(document).ready(function() {
  
//   $(document).on('click','#logo-on-scroll',function(){

    
//       $("#logo-on-scroll").css({'transform': 'rotate(-25deg) scaleX(-1)'});
//   });
// });



// function calcscore(){
//   var score = 0;
//   $(".calc:checked").each(function(){
//     data= $(this).data('price');
//       // score+=parseInt($(this).val(),10);
//       score+=parseInt(data);
//   });
//   // $("input[name=sum]").val(score)
//   $('#results').text(score);
// }
// $().ready(function(){
//   $(".calc").change(function(){
//       calcscore()
//   });
// });







  



