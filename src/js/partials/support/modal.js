//closer 
var modal = {
    sbst: $(".substrate"), //объект серой подложки
    closeBtn: ".js-close", //класс крестика внутри окна
    showClass: "active", //название класса открытого окна 
    init:function(btn,block){ //кнопка, на которую жмем и блок, который надо открыть.
        $(btn).click(function(){ //на кнопку вешаем событие клик
            modal.showModal(block); //показываем блок
            return false;
        });
    },
    showModal:function(block){ // показываем блок
        if($(block).is("."+modal.showClass)) { // если блок уже показывается
            modal.closeModal(block); // то закрываем его
        } else { // если еще не показан
            $(block).addClass(modal.showClass); //показываем блок
            modal.sbst.fadeIn(); // показываем подложку серую
            modal.closeInit(block); //вешаем события на закрытие блока
        }    
    },
    closeInit:function(block) { //события на закрытие блока
        $(document).bind('click.closeModal', function(e) { //событие клик по документу
            if ($(e.target).closest(block).length === 0) { //если это не тот блок, что показывается
                modal.closeModal(block); //закрываем блок
            }
        });
        $(document).bind('keyup.closeModal', function(e) { //событие "отпустили клавишу" 
            if(e.keyCode===27) { //если это ESC 
                modal.closeModal(block); //закрываем блок
                event.preventDefault(); //стандартный эскейп блочим
            }
        });
        $(block).find(modal.closeBtn).click(function(){ //событие клик по кнопку 
            modal.closeModal(block);  //закрываем блок
            return false;
        });
    },
    closeModal:function(block) {
        $(block).removeClass(modal.showClass); //закрываем блок
        modal.sbst.fadeOut(); //прячем подложку
        $(document).unbind('.closeModal'); //анбиндим клик по документу и эскейп
        $(block).find(modal.closeBtn).unbind('click'); //анбиндим клик по крестику
        return false;
    }
};
