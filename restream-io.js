$("body").unbind("click").on("click", "div.jss655", function () {
var chatname = $(this).find(".MuiTypography-subtitle2").text();
	console.log(chatname)
	if(chatname){	
	$(".hl-c-cont").remove();
	
	
	// Show just the first name. Comment this out to show the full name.
	//chatname = chatname.replace(/ .*/,'');
	
	var chatmessage = $(this).find(".MuiTypography-body1").html();
	var chatimg = $(this).find(".MuiAvatar-img").attr('src');
	//chatimg = chatimg.replace("32", "128");
	//var chatdonation = $(this).find("#purchase-amount").html();
	//var chatmembership = $(this).find(".yt-live-chat-membership-item-renderer #header-subtext").html();
	$(this).addClass("show-comment");

	//var hasDonation;
	//if(chatdonation) {
	//	hasDonation = '<div class="donation">' + chatdonation + '</div>';
	//} else {
		//hasDonation = '';
	//}

	//var hasMembership;
	//if(chatmembership) {
	//	hasMembership = '<div class="donation membership">NEW MEMBER!</div>';
	//	chatmessage = chatmembership;
	//} else {
//hasMembership = '';
	//}

	var backgroundColor = "";
	var textColor = "";
	if(this.style.getPropertyValue('--yt-live-chat-paid-message-primary-color')) {
		backgroundColor = "background-color: "+this.style.getPropertyValue('--yt-live-chat-paid-message-primary-color')+";";
		textColor = "color: #111;";
	}

	// This doesn't work yet
	if(this.style.getPropertyValue('--yt-live-chat-sponsor-color')) {
		backgroundColor = "background-color: "+this.style.getPropertyValue('--yt-live-chat-sponsor-color')+";";
		textColor = "color: #111;";
	}


	$( "highlight-chat" ).append('<div class="hl-c-cont fadeout"><div class="hl-name">' + chatname + '</div>' + '<div class="hl-message" style="'+backgroundColor+' '+textColor+'">' + chatmessage + '</div><div class="hl-img"><img src="' + chatimg + '"></div></div>')
	.delay(10).queue(function(next){	
		$( ".hl-c-cont" ).removeClass("fadeout");
		next();
	});	
}
});

$("body").on("click", ".btn-clear", function () {
	$(".hl-c-cont").addClass("fadeout").delay(300).queue(function(){
		$(".hl-c-cont").remove().dequeue();
	});
});

$( "#root" ).before( '<div id="overlay-zone"><highlight-chat></highlight-chat><button class="btn-clear">CLEAR</button></div>' );
