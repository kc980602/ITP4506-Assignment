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
    await $('body').append('<div class="modal-backdrop fade"></div>').css('overflow-y', 'hidden').promise()
    $('.modal-backdrop').addClass('show')
  }
})

$('body').on('click', '.modal.show', async function(e) {
  if (e.target !== this)
    return;
  let activeModal = $('.modal.show, .modal-backdrop')
  await activeModal.removeClass('show')
  activeModal.on('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(e) {
    if ($(this).hasClass('modal-backdrop')) {
      $('body').css('overflow-y', 'scroll')
      $(this).remove()
    } else if (!$(this).hasClass('show')) {
      $('body').css('overflow-y', 'scroll')
      $(this).attr('style', '')
    }
  })
})

$(document).ready(function() {
  $('.ht_searchBox,.ht_caption').addClass('show')
});

$('.ht_searchBox_tab > .tablinks').click(function(e) {
  let content = $(this).data('target')
  $(this).siblings().removeClass('active')
  $(this).addClass('active')
  $(content).siblings().hide()
  $(content).show()
});

$('#hotelsSearch').click(function(){
  window.location.href = './hotel.html';
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
