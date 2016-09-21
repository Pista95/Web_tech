		$(document).ready(function(){
			$("#email").click(function(){ 				// E-mail input value törlés
				 $('#email').val('');
			});

			$("#password").click(function(){			//Password input value törlés
				 $('#password').val('');
				  $('#password').attr('type', 'password'); // type  atributum átírása
			});
			
			$('#ccontent').load('kezdolap.html'); 			// a ccontent id-jű divbe betölti a kezdőlapot
						
			$("nav a").each(function() {				
					$(this).click(function(event) {
						event.preventDefault();						
						$('#ccontent').load($(this).attr('href'));
					});
				});
				
			$("footer a").each(function() {				
					$(this).click(function(event) {
						event.preventDefault();
						$('#ccontent').load($(this).attr('href'));
					});
				});
								
			$("#zenei").mouseover(function(event) {
			
				if (document.getElementById("comment").style.display == "none"){
				
				$( "#comment" ).show();
				$( "#zen" ).text( "Zene kérés aktiv" );
				$("#zen").css("color", "red");
				$("#zen").css("background", "yellow");
				setTimeout(function(){
				  $( "#comment" ).hide();
				}, 60000);
				
				} else {
				$( "#comment" ).hide();
				$( "#zen" ).text( "Zene kérés" );
				$("#zen").css("color", "#191943");
				$("#zen").css("background", "lime");
				}
			});
			
			
			$.getJSON('jsonfile.json', function(data) {
					$.each(data, function(key, val) {
						
						$('#json').append('<div>'+ val['title']+ '</div><div>'+ val['teaser']+ '</div><br>');
					});
				});	
						
		});			