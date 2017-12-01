$(document).ready(function(){
  let id = getUrlParams(location.search).id
  if (id) {
    let selectedTour = data.tours[id - 1]
    $( ".ht_searchContent" ).prepend(`<div id="item" class="card ht_s_item flex-row mb-4 mt-4">
      <div class="card-content">
        <div class="row">
          <div class="col-12">
            <h4 class="card-title"><a href="./tour.html" style="padding: 5px; margin-right: 32px;">&lt; Back</a>Tour Details</h4>
            <div class="divider"></div>
          </div>
          <div class="col-6">
            <div class="card-item-image" style="min-width: 100%; max-width: 100%;"><img src="./img/${selectedTour.img}"></div>
          </div>
          <div class="col-6 details">
            <h5><a href="#!">${selectedTour.name} [${selectedTour.tid}]</a></h5>
            <p>${selectedTour.date}</p><br>
            <p> - I am a string.</p>
            <p> - I am a string.</p>
            <p> - I am a string.</p>
            <p> - I am a string.</p>
            <p> - I am a string.</p>
            <p> - I am a string.</p>
            <p><span class="price">HK$${selectedTour.price}</span></p>
            <a href="./tours_order.html?id=${selectedTour.id}" class="btn btn-search btn-lg btn-block" id="auth-btn">Select</a>
          </div>
        </div>
      </div>
    </div>`);
  } else {
    alert('ID not exists')
    location = 'index.html'
  }
});

$('#sendReview').click(() => {
  $('#comment').prepend(`<div class="col-12 mb-3">
    <div class="divider"></div>
    <div class="summary">
      <div class="recommendation ">
        <div class="user-information">
          <div class="user cf">
            <span itemprop="author">A verified user</span>
          </div>
        </div>
        <div class="date-posted">
          ${new Date().toLocaleString("en-US", {year: 'numeric', month: 'long', day: 'numeric' })}
        </div>
      </div>
    </div>
    <div class="details">
      <div class="rating-header-container">
        <div class="review"><span>${$('input[name=rating]:checked').val()}</span> out of 5</div>
        <h3 class="review-title">${$('#review_title').val()}</h3>
      </div>
      <div class="review-text">
        <span class="translate-text">${$('#review_comment').val()}</span>
      </div>
    </div>
  </div>`)
})

$()
