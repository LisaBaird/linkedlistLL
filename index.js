//When user types in fields


//When user clicks ENTER button
function hideExample() {
  $('.example').addClass('hide');
};

$('#btn-enter').on('click', function() {
    var inputTitle = $('#input-title').val();
    var inputURL = $('#input-url').val();
    $('#card-side').prepend("<section class='card'><h2 id='card-title' class='card-text'>" + inputTitle + "</h2><hr><p class='card-text'><a href='#' id='card-url'>" + inputURL + "</a></p><hr><button class='card-btn btn-read'>Read</button><button class='card-btn btn-remove'>Delete</button></section>");
    hideExample();
});

//When user clicks READ button
function markRead() {
  $('.card').toggleClass('.read');
  $('#card-url').toggleClass('read');
  $('.btn-read').toggleClass('read');
};

$('.btn-read').on('click', function() {
  markRead();

//When user clicks READ button on card
$('#card-side').on('click', '.btn-read', function() {
    $(this).parent().toggleClass('read');
    $(this).siblings('.card-text').children('#card-url').toggleClass('read');
    $(this).toggleClass('read');
});

//When user clicks DELETE button on card
$('#card-side').on('click', '.btn-remove', function() {
  $(this).parent().remove();
});
