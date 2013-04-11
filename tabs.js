console.log('hey class!');

$(document).ready(function () {
	
	$('.tab').click(function () {
		
		// remove chosen class from all  .tab elemtns
		$('.tab').removeClass('chosen')
		
		// add chosen class to clicked .tab
		$(this).addClass('chosen');
		
		// store clicked tab's id
		var id = $(this).attr('id');
		
		// remove chosen class from all tab-data divs
		$('.tab-data').removeClass('chosen');
		
		// apply chosen to any div whose
		// class is the same as clicked div's id
		$('.' + id).addClass('chosen');

	})

})