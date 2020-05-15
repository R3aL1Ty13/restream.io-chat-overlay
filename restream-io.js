$('.MuiGrid-root.MuiGrid-container section div:first-child div > div').click(function () {
	const chatname = $(this).find(".MuiTypography-subtitle2").text();
	if(chatname){
			$(".hl-c-cont").remove();
			
			
			// Show just the first name. Comment this out to show the full name.
			//chatname = chatname.replace(/ .*/,'');
			
			var chatmessage = $(this).find(".MuiTypography-body1").html();
			var chatimg = $(this).find(".MuiAvatar-img").attr('src');
			
			$(this).addClass("show-comment");
		
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
	
	$(document).on('click',".btn-clear", function () {
		$(".hl-c-cont").addClass("fadeout").delay(300).queue(function(){
			$(".hl-c-cont").remove().dequeue();
		});
	});
	
	$( "#root" ).before( '<button class="btn-clear">CLEAR</button><div id="overlay-zone"><highlight-chat></highlight-chat></div>' );
