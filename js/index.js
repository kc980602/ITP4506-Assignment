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

$('body').on('click', '.modal.show, .modal-dismiss', async function(e) {
  if (e.target !== this)
    return;
  let activeModal = $('.modal.show, .modal-backdrop')
  await activeModal.removeClass('show')
  activeModal.on('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(e) {
    if ($(this).hasClass('modal-backdrop')) {
      $('body').css('overflow-y', 'scroll')
      $(this).remove()
    } else if (!$(this).hasClass('show')) {
      $('body').css({'overflow-y': 'scroll'})
      $(this).attr('style', '')
    }
  })
})

$(document).ready(function() {
  $('.ht_searchBox,.ht_caption').addClass('show');
  if (location.hash) {
    try {
      let position = $(location.hash).offset().top - 70
      $('html, body').animate({scrollTop: position},1000)
    } catch(e) {}
  }
  $("#toursTag, #hotelsTag, #flightsTag").click(function(){
    try {
      let scrollTo = $(this).attr('href')
      let position = $(scrollTo).offset().top - 70
      $('html, body').animate({scrollTop: position},1000)
    } catch(e) {}
  });
});

$('.ht_searchBox_tab > .tablinks').click(function(e) {
  let content = $(this).data('target')
  $(this).siblings().removeClass('active')
  $(this).addClass('active')
  $(content).siblings().hide()
  $(content).show()
});

$('.carousel-prev').click(function(e) {
  let item = $(this).siblings('.carousel-items')
  let index = item.data('index')
  let totalPage = Math.ceil(item.children().length / 3) - 1
  index--
  let position = index * 200
  if (index < 0) {
    index = totalPage
  }
  item.data('index', index)
  item.children().css({transform: 'translateX('+position+'%)'})
});
$('.carousel-next').click(function(e) {
  let item = $(this).siblings('.carousel-items')
  let index = item.data('index')
  let totalPage = Math.ceil(item.children().length / 3) - 1
  index++
  if (index > totalPage) {
    index = 0
  }
  let position = index * -200
  item.data('index', index)
  item.children().css({transform: 'translateX('+position+'%)'})
});
