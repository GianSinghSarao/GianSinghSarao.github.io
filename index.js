requirejs.config({
  baseUrl: 'js/'
});
(function(window, document, requirejs){
requirejs(['-'], function(){
  componentHandler.upgradeDom();
});
})(window, document, requirejs);
