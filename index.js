$('.tab').on('click', toggleTab);


function toggleTab(event) {
  $(event.target).addClass('selected');
  $(event.target).removeClass('unselected');
  [...$(event.target).siblings('li').removeClass('selected')];
  [...$(event.target).siblings('li').addClass('unselected')];
  // toggleDisplay();
}

// function toggleDisplay() {
//   $('.image--content-container').removeClass('active');
//   $('.image--content-container').addClass('inactive');

//   const contentDisplays = [...$(event.target).parents('ul').siblings('.image--content-container')];
//   console.log(event.target.id)
//   contentDisplays.forEach(display => {
//     const id = display.id.split('content')
//     const index = id[1];
//   })
//  Find the image--content-container w/ same number in id as event.target and add active class / remove inactive class

// }