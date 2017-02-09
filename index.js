//When user types in fields
function enableBtn() {
  if ($('#input-title').val().length >= 1 && $('#input-url').val().length >= 1) {
    console.log('True');
    $('#btn-enter').prop('disabled', false);
  } else {
    console.log('False');
    $('#btn-enter').prop('disabled', true);
  }
}

var inputs = $('input');

for (var i = 0; i < inputs.length; i++) {
  $(inputs[i]).on('keyup', function () {
    enableBtn();
  });
}


//When user clicks ENTER button
function hideExample() {
  $('.example').addClass('hide');
};

$('#btn-enter').on('click', function() {
    var inputTitle = $('#input-title').val();
    var inputURL = $('#input-url').val();
    $('#card-side').prepend("<section class='card'><h2 id='card-title' class='card-text'>" + inputTitle + "</h2><hr><p class='card-text'><a href='http://" + inputURL + "' id='card-url'>" + inputURL + "</a></p><hr><button class='card-btn btn-read'>Read</button><button class='card-btn btn-remove'>Delete</button></section>");
    hideExample();
});

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
