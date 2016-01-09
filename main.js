'use strict';

$(document).ready(init);

function init() {
  $('.cup').on('click', cupClicked);
  $('#play').click(resetGame);
}

function cupClicked(e) {
  $('.cup').off('click');

  var rand = Math.floor(Math.random() * 3);
  var $randomCup = $('#cup' + rand);
  var $randomCupId = 'cup' + rand;

  // var boxIndex = $(e.target).index();
  // var randomIndex = Math.floor(Math.random() * 3);

  if($randomCupId === this.id) {
    $(this).css('background-color', 'green');
    $('#message').text('YOU WIN!');
  } else {
    $(this).css('background-color', 'red');
    $('.cup').eq(rand).css('background-color', 'green');
    $('#message').text('YOU LOSE, TRY AGAIN');
  }
}

function resetGame(e) {
  location.reload();
}
