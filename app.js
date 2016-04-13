//.................
// document.ready
//..................
$(document).ready(function(){
$('.js-liked').on('click', function(event){
event.preventDefault();
$(this).text('Like').closest('.news-item').addClass('is-liked');
});
});