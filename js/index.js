$('.modal-trigger').click(async function(e) {
  if ($(this).data('toggle')) {
    e.preventDefault()
    let modal = $(this).data('target')
    await $(modal).css({
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: 0
    }).promise();
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


$('.ht_searchBox_tab > .tablinks').click(function(e) {
  $(this).siblings().removeClass('active')
  $(this).addClass('active')
})
