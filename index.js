// function displayTitle() {
//   var userTitle = $('#input-title').val();
//   $('#card-title').text(userTitle);
// };
//
// function displayURL() {
//   var userURL = $('#input-url').val();
//   $('#card-url').text(userURL);
// };
//
// $('#btn-enter').on('click', function() {
//   var btnEnter = $('#btn-enter');
//   displayTitle();
//   displayURL();
// });

$('#btn-enter').on('click', function() {
    var inputTitle = $('#input-title').val();
    var inputURL = $('#input-url').val();
    $('#card-side').prepend("<section class='card'><h2 id='card-title' class='card-text'>" + inputTitle + "</h2><hr><p class='card-text'><a href= '#' id='card-url'>" + inputURL + "</a></p><hr><button id='btn-read' class='card-btn'>Read</button><button id='btn-remove' class='card-btn'>Delete</button></section>");
})
