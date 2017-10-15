$(document).ready(() => {
  $('#step2, #step3').hide()
})

$('#email, #username, #password, #password_confirmation').change(() => {
  let username = $('#username').val(),
  password = $('#password').val(),
  password_confirmation = $('#password_confirmation').val(),
  valid = true
  if (!validateEmail($('#email').val())) {
    $('#error').append('<li>Invalid Email address.</li>')
    $('#email').addClass('invalid')
    valid = false
  } else {
    $('#email').removeClass('invalid')
  }
  if (username.length < 6) {
    $('#error').append('<li>Username cannot less than 6 characters.</li>')
    $('#username').addClass('invalid')
    valid = false
  } else {
    $('#username').removeClass('invalid')
  }
  if (password.length < 6) {
    $('#error').append('<li>Password cannot less than 6 characters.</li>')
    $('#password').addClass('invalid')
    valid = false
  } else {
    $('#password').removeClass('invalid')
  }
  if (password != password_confirmation) {
    $('#error').append('<li>Two password is not match.</li>')
    $('#password_confirmation').addClass('invalid')
    valid = false
  } else {
    $('#password_confirmation').removeClass('invalid')
  }
  if (valid) {
    $('#registerNext').attr('disabled', false)
  }
})

$('#registerBack').click(() => {
  let step = $('#registerBox').data('step')
  $('#registerNext').text('Next')
  $('#registerBack').attr('disabled', false)
  $('#registerNext').attr('disabled', true)
  step--
  if (step <= 1) {
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
  $('#registerNext').attr('disabled', true)
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


function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email)
}
