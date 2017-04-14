requirejs.config({
    baseUrl: '/js/'
});
(function(window, document, requirejs){
requirejs(['_'], function(){
  componentHandler.upgradeDom();
  document.querySelector('#HomeBTN').addEventListener('click', function(){
    window.location = "/";
  });
});
})(window, document, requirejs);
