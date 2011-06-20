/**
 * @author User
 */

jQuery(document).ready(function(){
	
	setLayout();
	$(window).resize(function(){
		setLayout();
	});
	
});


function setLayout(){
	var headerHeightPercentage=10;
	var contentHeightPercentage=90;
	var windowHeight=jQuery(window).height();
	var windowWidth=jQuery(window).width();
	var headerHeight=windowHeight*headerHeightPercentage/100;
	var contentHeight=windowHeight*contentHeightPercentage/100-15;
	$('#header').height(headerHeight);
	$('.secondaryColumns').height(contentHeight);
   
	
}

