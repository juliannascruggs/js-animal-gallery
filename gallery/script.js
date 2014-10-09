// Add your code here
$(document).ready(function() {

$('.filter-button').on('click', function(e){
	var species = this.id;

	// if ($(this).hasClass('active')) {
	// 	hideAnimals(species);
	// }else{
	// 	showAnimals(species);
	// }
	$('.' + species).toggle();
	$('#' + species).toggleClass('active');
	alertify.log('toggled ' + species + 's');
});

// function hideAnimals(species){
// 	$('.'+ species).hide();
	// $('#' + species).removeClass('active');
// }
 
// function showAnimals(species){
// 	$('.' + species).show();
// 	// $('#' + species).addClass('active');
// }

});




