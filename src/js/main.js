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

  if ($('.offers-container .grid').length){
    var offersContainer = document.querySelector('.offers-container .grid');
    $('.offers-container .grid').masonry({
      columnWidth: offersContainer.querySelector('.min-tile'),
      itemSelector:'.tile',
      gutter:0,
      percentPosition: false
    });
  }
  if ($('.blog-container .grid').length){
    var blogContainer = document.querySelector('.blog-container .grid');
    $('.blog-container .grid').masonry({
      columnWidth: blogContainer.querySelector('.min-tile'),
      itemSelector:'.tile',
      gutter:0,
      percentPosition: false,
      stamp: '.twitter'
    })
  }

  if ($(".js-tab-menu").length){
    $(".js-tab-menu a").on('click', function(){
      var self = $(this);
      var dataTabId = self.attr('data-tab-id');
      if (!self.is('.active')) {
        self.parent().find('a').removeClass('active');
        self.addClass('active');
        $(".js-tab").removeClass('active')
        $(".js-tab-id-"+dataTabId).addClass('active')
      }
      return false;
    });
  }

  $(".header-menu-toggler").on('click', function(){
    $(".header-menu").toggleClass("active");
    return false;
  })
})
