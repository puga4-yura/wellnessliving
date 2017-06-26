$(document).ready(function() {
	$(document).on('change', 'input ', function() {
		var inputSection=$(this).parent().parent().parent();
	    var isChecked = false;
		$(inputSection.find('input')).each(function(){
			if($(this).is(':checked')){
				isChecked = true
			}
		})
	   inputSection.children('button').prop('disabled', !isChecked);
   })
});