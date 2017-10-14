$(document).ready(() => {
  $('#step2, #step3').hide()
})

$('#registerBack').click(() => {
  let step = $('#registerBox').data('step')
  $('#registerNext').text('Next')
  $('#registerBack').attr('disabled', false)
  step--
  if (step <= 1) {
    $('#registerNext').attr('disabled', false)
    $('#registerBack').attr('disabled', true)
    step = 1
  }
  $('.step.active').removeClass('active').addClass('disabled')
  $('.steps').children().eq(step - 1).removeClass('disabled').addClass('active')
  $('#step1, #step2, #step3').hide()
  $('#step' + step).show()
  $('#registerBox').data('step', step)
})

$('#registerNext').click(() => {
  let step = $('#registerBox').data('step')
  if (step === 3) {
    alert('Account registeration successful.')
  } else {
    $('#registerBack').attr('disabled', false)
    step++
    if (step > 2) {
      $('#registerNext').text('Submit')
    }
    $('.step.active').removeClass('active').addClass('disabled')
    $('.steps').children().eq(step - 1).removeClass('disabled').addClass('active')
    $('#step1, #step2, #step3').hide()
    $('#step' + step).show()
    $('#registerBox').data('step', step)
  }
})
