$(document).ready(function(){

  $('.direction').fadeOut(2000, "linear");

  $('#hint1').click(function(){
    $('#hint1').css('display', 'none');
    $('#hint2').css('display', 'block');
    $("#first").text("Christina and Kumar");
  });

  $('#hint2').click(function(){
    $('#hint2').css('display', 'none');
    $('#hint3').css('display', 'block');
    $("#second").text("are expecting");
  });

  $('#hint3').click(function(){
    $('#hint3').css('display', 'none');
    $('#hint4').css('display', 'block');
    $("#third").text("a beautiful");
  });

  $('#hint4').click(function(){
    $('#hint4').css('display', 'none');
    $("#fourth").text("BOY!!!!");
    $("body").css('background-color', '#89CFF0');
    $('.gifs img').css('display', 'block');
  });

  function getRandomIntegerInRange(min, max) {
  	min = Math.ceil(min);
  	max = Math.floor(max);
  	return Math.floor(Math.random() * (max - (min + 1)) + min);
  }

  function loopFloaters($el) {
  	var desiredBottom = $(window).height();
  	var desiredTop = -220
  	var speed = getRandomIntegerInRange(7000, 12000);

  	$el.css({ top: desiredBottom });
  	$el.removeClass("hide");
  	$el.animate({ top: desiredTop }, speed, function () {
  		if (parseInt($("#counter").val(), 10) < 4) {
  			loopFloaters($el);
  		}
  	});
  }

  function popBubble(el) {
  	var $el = $(el);
  	var counter = parseInt($("#counter").val(), 10) + 1;
  	$("#counter").val(counter);

  	if (counter === 4) {
  		$(".button").addClass("hide");
  	} else {
  		$el.addClass("hide");
  	}

  	switch (counter) {
  		case 1:
  			$("#first").text("Christina and Kumar");
  			break;
  		case 2:
  			$("#second").text("are expecting");
  			break;
  		case 3:
  			$("#third").text("a beautiful");
  			break;
  		case 4:
  			$("#fourth").text("BOY!!!!");
        $("body").css('background-color', '#89CFF0');
        $('.gifs img').css('display', 'block');
  			break;
  	}
  }

  $(function () {
  	setTimeout(function () {
  		loopFloaters($("#left-top"));
  	}, getRandomIntegerInRange(0, 3000));
  	setTimeout(function () {
  		loopFloaters($("#left-center"));
  	}, getRandomIntegerInRange(0, 3000));
  	setTimeout(function () {
  		loopFloaters($("#right-center"));
  	}, getRandomIntegerInRange(0, 3000));
  	setTimeout(function () {
  		loopFloaters($("#right-top"));
  	}, getRandomIntegerInRange(0, 3000));

    $(document).on("click touchstart", ".button", function () { popBubble(this); });

  });

  $('.button').click(function(){
    $(this).css('display', 'none')
  })




});
