$('.tab').on('click', toggleTab);


function toggleTab(event) {
  $(event.target).addClass('selected');
  $(event.target).removeClass('unselected');
  [...$(event.target).siblings('li').removeClass('selected')];
  [...$(event.target).siblings('li').addClass('unselected')];
}
