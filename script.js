

     //  /*boton menu depto*/
    
    $("#btn-menu").click(function(){
      
        $("#lista-menu").toggle()
    })
  
    $("#lista-menu").hover(function(){
                console.log("entrar")
    },function(){
        
         $("#lista-menu").hide()
    })
    
    
  $('.item').click(function() {
                $(this).toggleClass('active');
              });


                //  /*OTRO*/















$(document).ready(function() {
    $("#lista-menu").hide()
   $(".atrasbtn ").click(function(){
        
        console.log("hola mundo atras")
       $(".atrasevent").show();
       $(".frenteevent").hide();
    }) 
    $(".frentebtn").click(function(){
        
        console.log("hola mundo frente")
       $(".atrasevent").hide();
       $(".frenteevent ").show();
    }) 
    

    
    
    
      $("#btn-menu").click(function(){
      
        $("#lista-menu").toggle()
    })
  
    $("#lista-menu").hover(function(){
                console.log("entrar")
    },function(){
        
         $("#lista-menu").hide()
    })
    
    
  $('.item').click(function() {
                $(this).toggleClass('active');
              });  
    
    
    
    $("#btn-menu").click(function(){
      
        $("#lista-menu").toggle()
    })
  
    $("#lista-menu").hover(function(){
                console.log("entrar")
    },function(){
        
         $("#lista-menu").hide()
    })
    
    
  $('.item').click(function() {
                $(this).toggleClass('active');
              });


                //  /*OTRO*/
        

                     $('.email').on("change keyup paste",
  function(){
    if($(this).val()){
      $('.icon-paper-plane').addClass("next");
    } else {
      $('.icon-paper-plane').removeClass("next");
    }
  }
);

$('.next-button').hover(
  function(){
    $(this).css('cursor', 'pointer');
  }
);

$('.next-button.email').click(
  function(){
    console.log("Something");
    $('.email-section').addClass("fold-up");
    $('.password-section').removeClass("folded");
  }
);

$('.password').on("change keyup paste",
  function(){
    if($(this).val()){
      $('.icon-lock').addClass("next");
    } else {
      $('.icon-lock').removeClass("next");
    }
  }
);

$('.next-button').hover(
  function(){
    $(this).css('cursor', 'pointer');
  }
);

$('.next-button.password').click(
  function(){
    console.log("Something");
    $('.password-section').addClass("fold-up");
    $('.repeat-password-section').removeClass("folded");
  }
);

$('.repeat-password').on("change keyup paste",
  function(){
    if($(this).val()){
      $('.icon-repeat-lock').addClass("next");
    } else {
      $('.icon-repeat-lock').removeClass("next");
    }
  }
);

$('.next-button.repeat-password').click(
  function(){
    console.log("Something");
    $('.repeat-password-section').addClass("fold-up");
    $('.success').css("marginTop", 0);
  }
);   
                       

                         // portfolio GALERY
                         $('.gallery ul li a').click(function() {
                        var itemID = $(this).attr('href');
                        $('.gallery ul').addClass('item_open');
                        $(itemID).addClass('item_open');
                        return false;
                        });
                        $('.close').click(function() {
                         $('.port, .gallery ul').removeClass('item_open');
                         return false;
                        });

                        $(".gallery ul li a").click(function() {
                        $('html, body').animate({
                        scrollTop: parseInt($("#top").offset().top)
                         }, 400);
                        });



                  

				//responsive menu toggle
				$("#menutoggle").click(function() {
					$('.xs-menu').toggleClass('displaynone');

					});
				//add active class on menu
				$('ul li').click(function(e) {
					e.preventDefault();
					$('li').removeClass('active');
					$(this).addClass('active');
				});
			//drop down menu	
					$(".drop-down").hover(function() {
						$('.mega-menu').addClass('display-on');
					});
					$(".drop-down").mouseleave(function() {
						$('.mega-menu').removeClass('display-on');
					});
			
			});



$(document).ready(function() {
   $("#myCarousel").swiperight(function() {
      $(this).carousel('prev');
    });
   $("#myCarousel").swipeleft(function() {
      $(this).carousel('next');
   });
    
    
    
    
});


$("#showmenu").click(function(e){
			$("#menu").toggleClass("show");
		});
		$("#menu a").click(function(event){
			if($(this).next('ul').length){
        event.preventDefault();
				$(this).next().toggle('fast');
				$(this).children('i:last-child').toggleClass('fa-caret-down fa-caret-left');
			}
		});












/*
 * Icons by:
 * Font Awesome – http://fontawesome.io/
 * Those Icons – https://www.flaticon.com/authors/those-icons
 * EpicCoders – https://www.flaticon.com/authors/epiccoders
 * Smashicons – https://www.flaticon.com/authors/smashicons
 */

$(document).ready(function () {
	var songs = [
		{
			title: "rockstar",
			artist: "Post Malone, 21 Savage",
			cover: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/308622/rockstar-album-cover.jpg",
			audioFile: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/308622/Post%20Malone%20-%20rockstar%20ft.%2021%20Savage%20(1).mp3",
			color: "#c3af50"
		},
		{
			title: "Let You Down",
			artist: "NF",
			cover: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/308622/perception-album-cover.png",
			audioFile: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/308622/NF%20-%20Let%20You%20Down.mp3",
			color: "#25323b"
		},
		{
			title: "Silence",
			artist: "Marshmello, Khalid",
			cover: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/308622/silence-album-cover.jpg",
			audioFile: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/308622/Marshmello%20-%20Silence%20ft.%20Khalid.mp3",
			color: "#c1c1c1"
		},
		{
			title: "I Fall Apart",
			artist: "Post Malone",
			cover: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/308622/stoney-cover-album.jpg",
			audioFile: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/308622/Post%20Malone%20-%20I%20Fall%20Apart.mp3",
			color: "#cd4829"
		},
		{
			title: "Fireproof",
			artist: "VAX, Teddy Sky",
			cover: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/308622/fireproof-album-cover.jpeg",
			audioFile: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/308622/VAX%20-%20Fireproof%20Feat%20Teddy%20Sky.mp3",
			color: "#5d0126"
		}
	];
	
	for (let song of songs) {
		$("#songs").append('<li class="song" data-audio="' + song.audioFile + '" data-color="'+ song.color +'">' + 
			'<img src="' + song.cover + '">' +
			'<p class="song-title">' + song.title + '</p>' +
			'<p class="song-artist">' + song.artist + '</p>' + 
			'</li>');
	}
	
	$('.jcarousel').jcarousel({
			wrap: 'circular'
	});
});

/*
 * Replace all SVG images with inline SVG
 */
jQuery('img[src$=".svg"]').each(function(){
	var $img = jQuery(this);
	var imgID = $img.attr('id');
	var imgClass = $img.attr('class');
	var imgURL = $img.attr('src');

	jQuery.get(imgURL, function(data) {
		// Get the SVG tag, ignore the rest
		var $svg = jQuery(data).find('svg');

		// Add replaced image's ID to the new SVG
		if(typeof imgID !== 'undefined') {
			$svg = $svg.attr('id', imgID);
		}
		// Add replaced image's classes to the new SVG
		if(typeof imgClass !== 'undefined') {
			$svg = $svg.attr('class', imgClass+' replaced-svg');
		}

		// Remove any invalid XML tags as per http://validator.w3.org
		$svg = $svg.removeAttr('xmlns:a');

		// Replace image with new SVG
		$img.replaceWith($svg);

	}, 'xml');

});

// Current slide
$('.jcarousel').on('jcarousel:visiblein', 'li', function(event, carousel) {
	let cover = $(this).find("img").attr("src");
	let songTitle = $(this).find("p.song-title").html();
	let songArtist = $(this).find("p.song-artist").html();
	let audioSrc = $(this).attr("data-audio");
	let backgroundColor = $(this).attr("data-color");
	$("body").css('background', backgroundColor)
	$("#background").css('background-image', 'url('+cover+')');
	$("audio").find("source").attr("src", ""+audioSrc+"");
	player.load();
	player.currentTime = 0;
	$("#song-info").find("img").attr("src", cover);
	$("#song-info .artist-wrap p").find("span.title").html(songTitle);
	$("#song-info .artist-wrap p").find("span.artist").html(songArtist);
});

// Previous slide
$('#previous-btn').click(function() {
	$('.jcarousel').jcarousel('scroll', '-=1');
	$('#play-btn i').removeClass('fa-pause');
	player.pause();
});

// Next slide
$('#next-btn').click(function() {
	if ($(".fa-random").hasClass('active')) {
		let songs = $("#songs li").length - 1;
		let randomSong = Math.floor(Math.random() * songs) + 1;
		$('.jcarousel').jcarousel('scroll', '+=' + randomSong);
	} else {
		$('.jcarousel').jcarousel('scroll', '+=1');
	}
	$('#play-btn i').removeClass('fa-pause');
	player.pause();
});

// Play Icon Switcher
$('#play-btn').click(function() {
	$(this).find('i').toggleClass('fa-pause');
});

// Menu
$("#menu-btn").click(function() {
	$("#content-wrap").addClass('inactive');
	$("#sidemenu").addClass('active');
});

// Home Button
$("#home-btn").click(function() {
	$("#home-screen").addClass('active');
	$(".menu").removeClass('active');
	$("#content-wrap").addClass('minimized');
});

// App
$(".app-icon").click(function() {
	$("#content-wrap").removeClass('minimized');
	setTimeout(function(){ $("#home-screen").removeClass('active'); }, 300);
});

// Overlay
$("#overlay").click(function () {
	$("#content-wrap").removeClass('inactive');
	$("#sidemenu").removeClass('active');
});

// Options
$("#options-btn").click(function() {
	$("#song-options").addClass('active');
});

// Bluetooth
$("#bluetooth-btn").click(function() {
	$("#bluetooth-devices").addClass('active');
});

// Bluetooth Menu
$("#bluetooth-devices ul li").click(function() {
	$(this).toggleClass('connected');
	$(this).siblings().removeClass('connected');
	
	if ($("#bluetooth-devices ul li").hasClass('connected')) {
		$("#sub-controls i.fa-bluetooth-b").addClass('active');
	} else {
		$("#sub-controls i.fa-bluetooth-b").removeClass('active');
	}
});

// Close Menu
$(".close-btn").click(function() {
	$(".menu").removeClass('active');
});

$('#sub-controls i').click(function () {
	if(!$(this).hasClass('fa-bluetooth-b')) {
		$(this).toggleClass('active');
	}
	
	if ($("#heart-icon").hasClass('active')) {
		$("#heart-icon").removeClass('fa-heart-o');
		$("#heart-icon").addClass('fa-heart');
	} else {
		$("#heart-icon").removeClass('fa-heart');
		$("#heart-icon").addClass('fa-heart-o');
	}
});

/*
 * Music Player
 * By Greg Hovanesyan
 * https://codepen.io/gregh/pen/NdVvbm
 */

var audioPlayer = document.querySelector('#content');
var playpauseBtn = audioPlayer.querySelector('#play-btn');
var progress = audioPlayer.querySelector('.progress');
var sliders = audioPlayer.querySelectorAll('.slider');
var player = audioPlayer.querySelector('audio');
var currentTime = audioPlayer.querySelector('#current-time');
var totalTime = audioPlayer.querySelector('#total-time');

var draggableClasses = ['pin'];
var currentlyDragged = null;

window.addEventListener('mousedown', function(event) {
  
  if(!isDraggable(event.target)) return false;
  
  currentlyDragged = event.target;
  let handleMethod = currentlyDragged.dataset.method;
  
  this.addEventListener('mousemove', window[handleMethod], false);

  window.addEventListener('mouseup', () => {
    currentlyDragged = false;
    window.removeEventListener('mousemove', window[handleMethod], false);
  }, false);  
});

playpauseBtn.addEventListener('click', togglePlay);
player.addEventListener('timeupdate', updateProgress);
player.addEventListener('loadedmetadata', () => {
  totalTime.textContent = formatTime(player.duration);
});
player.addEventListener('ended', function(){
  player.currentTime = 0;
	
	if ($(".fa-refresh").hasClass('active')) {
		togglePlay();
	} else {
		if ($(".fa-random").hasClass('active')) {
			let songs = $("#songs li").length - 1;
			let randomSong = Math.floor(Math.random() * songs) + 1;
			$('.jcarousel').jcarousel('scroll', '+=' + randomSong);
		} else {
			$('.jcarousel').jcarousel('scroll', '+=1');
		}
		togglePlay();
	}
});

sliders.forEach(slider => {
  let pin = slider.querySelector('.pin');
  slider.addEventListener('click', window[pin.dataset.method]);
});

function isDraggable(el) {
  let canDrag = false;
  let classes = Array.from(el.classList);
  draggableClasses.forEach(draggable => {
    if(classes.indexOf(draggable) !== -1)
      canDrag = true;
  })
  return canDrag;
}

function inRange(event) {
  let rangeBox = getRangeBox(event);
  let direction = rangeBox.dataset.direction;
	let screenOffset = document.querySelector("#screen").offsetLeft + 26;
	var min = screenOffset - rangeBox.offsetLeft;
	var max = min + rangeBox.offsetWidth;   
	if(event.clientX < min || event.clientX > max) { return false };
  return true;
}

function updateProgress() {
  var current = player.currentTime;
  var percent = (current / player.duration) * 100;
  progress.style.width = percent + '%';
  
  currentTime.textContent = formatTime(current);
}

function getRangeBox(event) {
  let rangeBox = event.target;
  let el = currentlyDragged;
  if(event.type == 'click' && isDraggable(event.target)) {
    rangeBox = event.target.parentElement.parentElement;
  }
  if(event.type == 'mousemove') {
    rangeBox = el.parentElement.parentElement;
  }
  return rangeBox;
}

function getCoefficient(event) {
  let slider = getRangeBox(event);
	let screenOffset = document.querySelector("#screen").offsetLeft + 26;
  let K = 0;
	let offsetX = event.clientX - screenOffset;
	let width = slider.clientWidth;
	K = offsetX / width;
  return K;
}

function rewind(event) {
  if(inRange(event)) {
    player.currentTime = player.duration * getCoefficient(event);
  }
}

function formatTime(time) {
  var min = Math.floor(time / 60);
  var sec = Math.floor(time % 60);
  return min + ':' + ((sec<10) ? ('0' + sec) : sec);
}

function togglePlay() {
	player.volume = 0.5;
	
  if(player.paused) {
    player.play();
  } else {
    player.pause();
  }  
}













$("#filter").focus().keyup(function() {
//$("#filter").keyup(function() {
  var filter = $(this).val();
  $("#slats li").each(function () {
    if ($(this).text().search(new RegExp(filter, "i")) < 0) {
      $(this).addClass('hidden');
    } else {
      $(this).removeClass('hidden');
    }
  });
});



(function () {
	'use strict';

	var sideTabsPaneHeight = function() {
		var navHeight = $('.nav-tabs.nav-tabs-left').outerHeight() || $('.nav-tabs.nav-tabs-right').outerHeight() || 0;

		var paneHeight = 0;

		$('.tab-content.side-tabs .tab-pane').each(function(idx) {
			paneHeight = $(this).outerHeight() > paneHeight ? $(this).outerHeight() : paneHeight;
		});

		$('.tab-content.side-tabs .tab-pane').each(function(idx) {
			$(this).css('min-height', navHeight + 'px');
		});
	};
	
  $(function() {
    sideTabsPaneHeight();

		$( window ).resize(function() {
			sideTabsPaneHeight();
		});

		$( '.nav-tabs.nav-tabs-left' ).resize(function() {
			sideTabsPaneHeight();
		});
	});
}());







































'use strict';

$(document).ready(function() {

  var animating = false;
  var step1 = 500;
  var step2 = 500;
  var step3 = 500;
  var reqStep1 = 600;
  var reqStep2 = 800;
  var reqClosingStep1 = 500;
  var reqClosingStep2 = 500;
  var $scrollCont = $(".phone__scroll-cont");

  function initMap($card) {
    // my first experience with google maps api, so I have no idea what I'm doing
    var latLngFrom = {lat: 40.7878581, lng: -73.9671309};
    var latLngTo = {lat: 40.746433, lng: -73.9503613};
    var latLngCenter = {
      lat: (latLngFrom.lat + latLngTo.lat)/2,
      lng: (latLngFrom.lng + latLngTo.lng)/2
    };
    var themeColor = $card.data("color");

    var map = new google.maps.Map($(".card__map__inner", $card)[0], {
      zoom: 12,
      center: latLngCenter,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      disableDefaultUI: true
    });

    map.set('styles', [
      {
        "featureType": "landscape",
        "elementType": "geometry",
        "stylers": [
          { "hue": "#00ffdd" },
          { "gamma": 1 },
          { "lightness": 100 }
        ]
      },{
        "featureType": "road",
        "stylers": [
          { "lightness": 60 },
          { "hue": "#006eff" }
        ]
      }
    ]);

    var pinImage = new google.maps.MarkerImage(
      "https://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|" + themeColor.slice(1),
      new google.maps.Size(21, 34),
      new google.maps.Point(0,0),
      new google.maps.Point(10, 34)
    );

    var marker = new google.maps.Marker({
      position: latLngFrom,
      map: map,
      title: 'From',
      icon: pinImage
    });

    var marker = new google.maps.Marker({
      position: latLngTo,
      map: map,
      title: 'To',
      icon: pinImage
    });

    var polylineOpts = new google.maps.Polyline({
      strokeColor: themeColor,
      strokeWeight: 3
    });
    var rendererOptions = {map: map, polylineOptions: polylineOpts, suppressMarkers: true};
    var directionsDisplay = new google.maps.DirectionsRenderer(rendererOptions);

    var request = {
      origin: latLngFrom,
      destination: latLngTo,
      travelMode: google.maps.DirectionsTravelMode.DRIVING
    };

    var directionsService = new google.maps.DirectionsService();
    directionsService.route(request, function(response, status) {
      if (status == google.maps.DirectionsStatus.OK) {
        directionsDisplay.setDirections(response);
      }
      else {
        console.log("wtf")
      }
    });
  };
  
  initMap($(".card"));

  $(document).on("click", ".card:not(.active)", function() {
    if (animating) return;
    animating = true;
    
    var $card = $(this);
    var cardTop = $card.position().top;
    var scrollTopVal = cardTop - 30;
    $card.addClass("flip-step1 active");

    $scrollCont.animate({scrollTop: scrollTopVal}, step1);

    setTimeout(function() {
      $scrollCont.animate({scrollTop: scrollTopVal}, step2);
      $card.addClass("flip-step2");

      setTimeout(function() {
        $scrollCont.animate({scrollTop: scrollTopVal}, step3);
        $card.addClass("flip-step3");

        setTimeout(function() {
          animating = false;
        }, step3);

      }, step2*0.5);

    }, step1*0.65);
  });

  $(document).on("click", ".card:not(.req-active1) .card__header__close-btn", function() {
    if (animating) return;
    animating = true;
    
    var $card = $(this).parents(".card");
    $card.removeClass("flip-step3 active");

    setTimeout(function() {
      $card.removeClass("flip-step2");

      setTimeout(function() {
        $card.removeClass("flip-step1");

        setTimeout(function() {
          animating = false;
        }, step1);

      }, step2*0.65);

    }, step3/2);
  });

  $(document).on("click", ".card:not(.req-active1) .card__request-btn", function(e) {
    if (animating) return;
    animating = true;

    var $card = $(this).parents(".card");
    var cardTop = $card.position().top;
    var scrollTopVal = cardTop - 30;

    $card.addClass("req-active1 map-active");

    initMap($card);

    setTimeout(function() {
      $card.addClass("req-active2");
      $scrollCont.animate({scrollTop: scrollTopVal}, reqStep2);

      setTimeout(function() {
        animating = false;
      }, reqStep2);

    }, reqStep1);
  });
  
  $(document).on("click", 
                 ".card.req-active1 .card__header__close-btn, .card.req-active1 .card__request-btn", 
                 function() {
    if (animating) return;
    animating = true;
    
    var $card = $(this).parents(".card");
    
    $card.addClass("req-closing1");
    
    setTimeout(function() {
      $card.addClass("req-closing2");
      
      setTimeout(function() {
        $card.addClass("no-transition hidden-hack")
        $card.css("top");
        $card.removeClass("req-closing2 req-closing1 req-active2 req-active1 map-active flip-step3 flip-step2 flip-step1 active");
        $card.css("top");
        $card.removeClass("no-transition hidden-hack");
        animating = false;
      }, reqClosingStep2);
      
    }, reqClosingStep1);
  });

});

// angular used only for templating, I was too tired to find more lightweight solution

var delivcardDefaultData = [
  {id: '2618-3157', price: 25, requests: 5, pledge: 150, weight: 50,
   sender: 'Edward Norton', senderImg: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/deliv-sender.jpg',
   themeColor: 'purple', themeColorHex: '#BA68C8',
   bgImgUrl: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/deliv-1.jpg', rating: 5, ratingCount: 26,
   fromStreet: 'W 90th St', fromCity: 'New York, NY 10025',
   toStreet: '46th Ave', toCity: 'Woodside, NY 11101',
   delivTime: '06:30 pm', delivDate: 'May 16, 2015', delivDateNoun: 'Today',
   reqDl: '24 minutes'},
  {id: '2618-3156', price: 37, requests: 7, pledge: 222, weight: 66,
   sender: 'Edward Norton', senderImg: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/deliv-sender.jpg',
   themeColor: 'green', themeColorHex: '#52A43A',
   bgImgUrl: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/deliv-2.jpg', rating: 4, ratingCount: 21,
   fromStreet: 'W 85th St', fromCity: 'New York, NY 1025',
   toStreet: 'E 30th Ave', toCity: 'New York, NY 1001',
   delivTime: '07:30 am', delivDate: 'May 16, 2015', delivDateNoun: 'Today',
   reqDl: '33 minutes'},
  {id: '2618-3155', price: 12, requests: 3, pledge: 80, weight: 20,
   sender: 'Edward Norton', senderImg: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/deliv-sender.jpg',
   themeColor: 'orange', themeColorHex: '#F7AA17',
   bgImgUrl: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/deliv-3.jpg', rating: 5, ratingCount: 15,
   fromStreet: 'W 79th St', fromCity: 'New York, NY 1024',
   toStreet: 'W 139th Ave', toCity: 'New York, NY 1030',
   delivTime: '09:22 pm', delivDate: 'May 16, 2015', delivDateNoun: 'Today',
   reqDl: '15 minutes'},
  {id: '2618-3154', price: 80, requests: 25, pledge: 550, weight: 250,
   sender: 'Edward Norton', senderImg: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/deliv-sender.jpg',
   themeColor: 'red', themeColorHex: '#EF5350',
   bgImgUrl: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/deliv-4.jpg', rating: 5, ratingCount: 66,
   fromStreet: 'W 90th St', fromCity: 'New York, NY 125',
   toStreet: '46th Ave', toCity: 'Woodside, NY 11',
   delivTime: '06:30 pm', delivDate: 'May 16, 2015', delivDateNoun: 'Today',
   reqDl: '24 minutes'},
  {id: '2618-3153', price: 49, requests: 17, pledge: 299, weight: 149,
   sender: 'Edward Norton', senderImg: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/deliv-sender.jpg',
   themeColor: 'purple', themeColorHex: '#BA68C8',
   bgImgUrl: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/deliv-5.jpg', rating: 5, ratingCount: 26,
   fromStreet: 'W 90th St', fromCity: 'New York, NY 1025',
   toStreet: '46th Ave', toCity: 'Woodside, NY 11101',
   delivTime: '06:30 pm', delivDate: 'May 16, 2015', delivDateNoun: 'Today',
   reqDl: '24 minutes'},
  {id: '2618-3152', price: 99, requests: 33, pledge: 611, weight: 432,
   sender: 'Edward Norton', senderImg: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/deliv-sender.jpg',
   themeColor: 'green', themeColorHex: '#52A43A',
   bgImgUrl: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/deliv-6.jpg', rating: 2, ratingCount: 26,
   fromStreet: 'W 90th St', fromCity: 'New York, NY 1025',
   toStreet: '46th Ave', toCity: 'Woodside, NY 11101',
   delivTime: '06:30 pm', delivDate: 'May 16, 2015', delivDateNoun: 'Today',
   reqDl: '24 minutes'},
  {id: '2618-3151', price: 61, requests: 15, pledge: 318, weight: 130,
   sender: 'Edward Norton', senderImg: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/deliv-sender.jpg',
   themeColor: 'orange', themeColorHex: '#F7AA17',
   bgImgUrl: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/deliv-7.jpg', rating: 3, ratingCount: 26,
   fromStreet: 'W 90th St', fromCity: 'New York, NY 10025',
   toStreet: '46th Ave', toCity: 'Woodside, NY 11101',
   delivTime: '06:30 pm', delivDate: 'May 16, 2015', delivDateNoun: 'Today',
   reqDl: '24 minutes'},
  {id: '2618-3150', price: 13, requests: 9, pledge: 231, weight: 55,
   sender: 'Edward Norton', senderImg: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/deliv-sender.jpg',
   themeColor: 'red', themeColorHex: '#EF5350',
   bgImgUrl: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/deliv-8.jpg', rating: 4, ratingCount: 26,
   fromStreet: 'W 90th St', fromCity: 'New York, NY 10025',
   toStreet: '46th Ave', toCity: 'Woodside, NY 11101',
   delivTime: '06:30 pm', delivDate: 'May 16, 2015', delivDateNoun: 'Today',
   reqDl: '24 minutes'}
];

var app = angular.module("delivcard", []);
app.controller("DelivCtrl", ['$scope', function($scope) {

  $scope.cards = delivcardDefaultData;

}]);



$(document).ready(function() {
  $('.button').on('click', function() {
    $('.content').toggleClass('isOpen');
  });
});










