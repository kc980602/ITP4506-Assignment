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
