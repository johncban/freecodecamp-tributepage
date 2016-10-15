jQuery(function($) {
    	
  
		//Test
		$(function() {
			$("#main").hide();
			$("#header").on("click", function() {
				$("#main").fadeToggle("slow", "linear");
			});
		});
		//Test
        
        
        
        $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.scrollup').fadeIn();
        } else {
            $('.scrollup').fadeOut();
        }
        });

        $('.scrollup').click(function () {
            $("html, body").animate({
                scrollTop: 0
            }, 600);
            return false;
        });
        
	

      $('#module-video').YTPlayer({
        fitToBackground: false,
        videoId: 'jKCyFB5LmPo',
        pauseOnScroll: false,
        playerVars: {
          modestbranding: 0,
          autoplay: 1,
          controls: 1,
          showinfo: 0,
          branding: 0,
          rel: 0,
          autohide: 0
        }
      });
      
      $('#background-video').YTPlayer({
        fitToBackground: true,
        videoId: '1_ifgJqLqTY',
        pauseOnScroll: true,
        callback: function() {
          videoCallbackEvents();
        }
      });
      
      var videoCallbackEvents = function() {
        var player = $('#background-video').data('ytPlayer').player;
      
        player.addEventListener('onStateChange', function(event){
            console.log("Player State Change", event);
            // OnStateChange Data
            if (event.data === 0) {          
                console.log('video ended');
            }
            else if (event.data === 2) {          
              console.log('paused');
            }
            mute: true;
        });
      }
});