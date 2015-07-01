$.fn.toEm = function(settings){
    settings = jQuery.extend({
        scope: 'html'
    }, settings);
    var that = parseInt(this[0],10),
        scopeTest = jQuery('<div style="display: none; font-size: 1em; margin: 0; padding:0; height: auto; line-height: 1; border:0;">&nbsp;</div>').appendTo(settings.scope),
        scopeVal = scopeTest.height();
    scopeTest.remove();
    return (that / scopeVal).toFixed(3);
};


$.fn.toPx = function(settings){
    settings = jQuery.extend({
        scope: 'html'
    }, settings);
    var that = parseFloat(this[0]),
        scopeTest = jQuery('<div style="display: none; font-size: 1em; margin: 0; padding:0; height: auto; line-height: 1; border:0;">&nbsp;</div>').appendTo(settings.scope),
        scopeVal = scopeTest.height();
    scopeTest.remove();
    return Math.round(that * scopeVal);
};