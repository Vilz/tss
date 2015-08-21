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

var menu = {
    showClass: "active", //название класса открытого окна
    init:function(btn,block){ //кнопка, на которую жмем и блок, который надо открыть.
      $(btn).click(function(){ //на кнопку вешаем событие клик
        menu.showMenu(block); //показываем блок
        return false;
      });
    },
    showMenu:function(block){ // показываем блок

      if(block.is("."+menu.showClass)) { // если блок уже показывается
        menu.closeMenu(block); // то закрываем его
      } else { // если еще не показан
        menu.closeMenu(block.parent().find('.active'));
        block.addClass(menu.showClass); //показываем блок
        menu.closeInit(block); //вешаем события на закрытие блока
      }
    },
    closeInit:function(block) { //события на закрытие блока
      $(document).bind('click.closeMenu', function(e) { //событие клик по документу
        if (!block.is(e.target) && $(e.target).closest(block).length === 0) { //если это не тот блок, что показывается
          menu.closeMenu(block); //закрываем блок
        }
      });
      $(document).bind('keyup.closeMenu', function(e) { //событие "отпустили клавишу"
        if(e.keyCode===27) { //если это ESC
          menu.closeMenu(block); //закрываем блок
          event.preventDefault(); //стандартный эскейп блочим
        }
      });
    },
    closeMenu:function(block) {
      block.removeClass(menu.showClass); //закрываем блок
      $(document).unbind('.closeMenu'); //анбиндим клик по документу и эскейп
      return false;
    }
};



$(document).ready(function(){

  $(".header-menu>li>a").on('click', function(){
    menu.showMenu($(this).parent());
    return false;
  })


  $(".header-menu-toggler").on('click touchend', function(){
    var h = $(".header-menu")
    if($(this).is('.active')) {
      $(this).removeClass("active");
      h.removeClass("active");
      $(document).unbind('.closeMobileMenu');
    } else {
      $(this).addClass("active");
      h.addClass("active");
      $(document).bind('touchend.closeMobileMenu click.closeMobileMenu', function(e) { //событие клик по документу
        console.log(e.target);
        if (!h.is(e.target) && $(e.target).closest(h).length === 0 && !$(".header-menu-toggler").is(e.target)) { //если это не тот блок, что показывается
          $(".header-menu-toggler").click();
        }
      });
    }
    return false;
  });


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
      percentPosition: false//,
      //stamp: '.twitter'
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






})
