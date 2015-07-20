/*
 Third party
*/

//= ../../bower_components/jquery/dist/jquery.min.js
//= ../../bower_components/masonry/dist/masonry.pkgd.js


/*
    Custom
 */
//= partials/support/console.js
//= partials/support/debug-grid.js
//= partials/support/content-height.js
//= partials/support/ie10-mq.js



$(document).ready(function(){

  var offersContainer = document.querySelector('.offers-container .grid');
  $('.offers-container .grid').masonry({
    columnWidth: offersContainer.querySelector('.min-tile'),
    itemSelector:'.tile',
    gutter:0,
    percentPosition: false
  });
  var blogContainer = document.querySelector('.blog-container .grid');
  $('.blog-container .grid').masonry({
    columnWidth: blogContainer.querySelector('.min-tile'),
    itemSelector:'.tile',
    gutter:0,
    percentPosition: false
  })
})
