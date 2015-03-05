
(function($){
	var ref = new Firebase("https://mtgdeckpricerweb.firebaseio.com/");
	
	$(document).ready(function(){
		var userEmail = localStorage["user"]
		$('input.box-text').bind('focus blur', function(){
			$(this).toggleClass('focus');
		});

		$('.bg-thumbnail-img').hover(function(){
			$(this).find('.overlay').show();
			$(this).find('.overlay').next().css({'opacity': 0.1});
		},function(){
			$(this).find('.overlay').hide();
			$(this).find('.overlay').next().css({'opacity': 1});
		});
		
		$("#loginSubmit").bind("click",login)
		
		
	});

	function login(){
		var checked = $("#checkToRemember").attr('checked')
		var session = "default"
		if(!checked){
			session = "sessionOnly"
		}
		console.log(session)
		ref.authWithPassword({
				email : $("#loginUsername").val(),
				password : $("#loginPassword").val(),
				remember : session
			},authDataCallback)
	}



	function authDataCallback(error,authData) {
  		if (authData) {
			console.log("User " + authData.uid + " is logged in with " + authData.provider);
			window.location.replace("index.html");
  		} else {
    		console.log(error.code);
    		//window.location.replace("index.html");
  		}
	}


})(jQuery);


