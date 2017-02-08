function hideExample() {
  $('.example').addClass('hide');
};

//When user clicks ENTER button
$('#btn-enter').on('click', function() {
    var inputTitle = $('#input-title').val();
    var inputURL = $('#input-url').val();
    $('#card-side').prepend("<section class='card'><h2 id='card-title' class='card-text'>" + inputTitle + "</h2><hr><p class='card-text'><a href='#' id='card-url'>" + inputURL + "</a></p><hr><button class='card-btn btn-read'>Read</button><button class='card-btn btn-remove'>Delete</button></section>");
    hideExample();
    //BIND to new event only (not all)
    $('.btn-read:first').on('click', function() {
      markRead();
    });
    $('.btn-remove:first').on('click', function () {
      clickDelete();
    });
    console.log($('.btn-read:first'));
    console.log($('.btn-remove:first'));
})

//When user clicks READ button
function markRead() {
  $('.card').toggleClass('read');
  $('#card-url').toggleClass('read');
  $('.btn-read').toggleClass('read');
};

$('.btn-read').on('click', function() {
  markRead();
});

//WHen user clicks DELETE button
function clickDelete() {
  $('.card').addClass('hide');
};

$('.btn-remove').on('click', function () {
  clickDelete();
});
