(function(window, document, requirejs){
requirejs.config({
    baseUrl: 'js/'
});
requirejs(['_'], function(){
  componentHandler.upgradeDom();
});
})(window, document, requirejs);
