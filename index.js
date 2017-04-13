requirejs.config({
    baseUrl: 'js/'
});
(function(window, document, requirejs){
requirejs(['_'], function(){
  componentHandler.upgradeDom();
});
})(window, document, requirejs);
