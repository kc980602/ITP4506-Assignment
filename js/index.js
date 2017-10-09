$('.modal-trigger').click(async function(e) {
  if ($(this).data('toggle')) {
    e.preventDefault()
    let modal = $(this).data('target')
    await $(modal).css({
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: 0
    }).promise()
    $(modal).addClass('show')
    $('body').append('<div class="modal-backdrop fade show"></div>')
  }
})

$('body').on('click', '.modal.show', function(e) {
  if (e.target !== this)
    return;
  let activeModal = $('.modal.show')
  activeModal.removeClass('show')
  $('.modal-backdrop').remove()
  activeModal.on('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(e) {
    if (!$(this).hasClass('show')) {
      $(this).attr('style', '')
    }
  })
})

$(document).ready(function() {
  $('.ht_searchBox,.ht_caption').addClass('show')
  $('.ht_searchBox_content#flights').hide()
})

$('.ht_searchBox_tab > .tablinks').click(function(e) {
  $(this).siblings().removeClass('active')
  $(this).addClass('active')
})

$('.tablinks#hotels').click(function(){
  $('.ht_searchBox_content#flights').hide();
  $('.ht_searchBox_content#hotels').show();
});

$('.tablinks#flights').click(function(){
  $('.ht_searchBox_content#hotels').hide();
  $('.ht_searchBox_content#flights').show();
});

// $.fn.preload = function() {
//     this.each(function(){
//         $('<img/>')[0].src = this;
//     });
// }
// var images = Array("img/korea.jpg","img/tokyo.jpg","img/taiwan.jpg");
//
// $([images[0],images[1],images[2]]).preload();
//
// var currimg = 1;
// $(document).ready(function(){
//   function changeImg(){
//     $('.ht_banner').animate({ opacity: 1 }, 500,function(){
//       $('.ht_banner').animate({ opacity: 0.9 }, 100,function(){
//         currimg++;
//         if(currimg > images.length-1){
//           currimg=0;
//         }
//         var newimage = images[currimg];
//         $('.ht_banner').css("background-image", "url("+newimage+")");
//         $('.ht_banner').animate({ opacity: 1 }, 400,function(){
//           setTimeout(changeImg,1000);
//         });
//       });
//     });
//   }
//   setTimeout(changeImg,1000);
// });
