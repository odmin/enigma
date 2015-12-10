$(document).ready(function() {

// select
var select = $('.select');
select.find('.select__el').on('change', function() {
  var optionSelected = $('option:selected', this),
    valueSelected = this.value;
  $(this).prev().find('.select__value').html(valueSelected);
});

$('.form-control').datepicker({
	startDate: "+1d",
  language: "ru",
  autoclose: true
});

});
function showElement(layer){
	var myLayer = document.getElementById(layer);
	if(myLayer){
	if(myLayer.style.display=="none") {
	 myLayer.style.display="block";
	 myLayer.backgroundPosition="top";
	 } else {
	 myLayer.style.display="none";
	 }
	}}
	function hideElement(){
	for (var i=0; i<arguments.length; i++) {
		var myLayer = document.getElementById(arguments[i]);
		if(myLayer.style.display=="block"){
		 myLayer.style.display="none";
  }
 }
};
