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
  $('.offers-container .grid').masonry({
    // options...
    itemSelector: '.tile',
    columnWidth: 290
  });
  $('.blog-container .grid').masonry({
    // options...
    itemSelector: '.tile',
    columnWidth: 272,
    gutter:14
  });
})
