var hotels = [
  {
    id: 1,
    name: 'Hotel Gracery Shinjuku Tokyo',
    star: 4,
    rate: 4.7,
    review: 'Outstanding',
    location: 'Tokyo',
    service: ['wifi', 'restaurant', 'pool'],
    price: 1465
  },
  {
    id: 2,
    name: 'Hotel Metropolitan Tokyo Ikebukuro',
    star: 4,
    rate: 4.7,
    review: 'Outstanding',
    location: 'Tokyo',
    service: ['wifi', 'restaurant'],
    price: 1299
  },
  {
    id: 3,
    name: 'Keio Plaza Hotel Tokyo',
    star: 5,
    rate: 4.7,
    review: 'Outstanding',
    location: 'Tokyo',
    service: ['wifi', 'restaurant', 'parking'],
    price: 1946
  },
  {
    id: 4,
    name: 'Jr Kyushu Hotel Blossom Shinjuku',
    star: 4,
    rate: 4.7,
    review: 'Outstanding',
    location: 'Tokyo',
    service: ['wifi', 'restaurant', 'parking'],
    price: 1938
  },
  {
    id: 5,
    name: 'Shinjuku Washington Hotel Tokyo',
    star: 3,
    rate: 4.6,
    review: 'Outstanding',
    location: 'Tokyo',
    service: ['wifi', 'restaurant'],
    price: 3868
  },
  {
    id: 6,
    name: 'Hotel Metropolitan Tokyo Ikebukuro',
    star: 4,
    rate: 4.7,
    review: 'Outstanding',
    location: 'Ikebukuro/Itabashi',
    service: ['wifi', 'restaurant'],
    price: 1465
  },
  {
    id: 7,
    name: 'Hotel Sunroute Plaza Shinjuku',
    star: 4,
    rate: 4.6,
    review: 'Outstanding',
    location: 'Tokyo',
    service: ['wifi', 'restaurant', 'parking'],
    price: 1758
  },
  {
    id: 8,
    name: 'Hyatt Regency Tokyo',
    star: 5,
    rate: 4.9,
    review: 'Perfect',
    location: 'Tokyo',
    service: ['wifi','restaurant','parking','pool','shuttle','gym','bar','spa'],
    price: 1903
  },
];

var serviceItem = {
  wifi: '<span class="service"><i class="material-icons">wifi</i>Wifi</span>',
  restaurant: '<span class="service"><i class="material-icons">restaurant</i>Restaurant</span>',
  parking: '<span class="service"><i class="material-icons">local_parking</i>Parking</span>',
  pool: '<span class="service"><i class="material-icons">pool</i>Swimming pool</span>',
  shuttle: '<span class="service"><i class="material-icons">airport_shuttle</i>Airport shuttle</span>',
  gym: '<span class="service"><i class="material-icons">fitness_center</i>Gym</span>',
  bar: '<span class="service"><i class="material-icons">local_bar</i>Bar</span>',
  spa: '<span class="service"><i class="material-icons">spa</i>Spa</span>'
};

$(document).ready(function(){
  hotels.forEach(function(element){
    var stars = '&#9733;'.repeat(element.star);
    var services = "";
    element.service.forEach(function(i){
      services += serviceItem[i];
    });
    $( ".ht_searchContent" ).prepend(`<div id="item" class="card ht_s_item flex-row mb-4 mt-4" onclick="window.location = './hotels_detail.html'">
      <div class="card-item-image"><img src="./img/hotels/hotel${element.id}.jpg"></div>
      <div class="card-content">
        <div class="row">
          <div class="col-8">
            <h5><a href="#">${element.name}</a>
              <p><span class="star">${stars}</span></p>
            </h5>
            <p>Shinjuku/Nakano</p>
            <div class="ht_item_service">
              ${services}
            </div>
          </div>
          <div class="col-4 text-right">
            <p class="ht_item_review"><span class="score">${element.rate}</span>/5<span class="review">${element.review}</span></p>
          </div>
        </div>
        <div class="row">
          <div class="col-12 text-right">
            <p><span class="price">HK$${element.price.toLocaleString()}</span></p>
          </div>
        </div>
        <div class="row">
          <div class="col-8"></div>
          <div class="col-4">
            <button id="hotelsSearch" type="button" class="btn btn-search btn-lg btn-block">Select</button>
          </div>
        </div>
      </div>
    </div>`);
  });
});
