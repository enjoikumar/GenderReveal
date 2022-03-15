console.log('testing')
$(function () {
	setTimeout(function () {
		loopFloaters($("#left_inner"));
	}, getRandomIntegerInRange(0, 3000));
	setTimeout(function () {
		loopFloaters($("#right_outer"));
	}, getRandomIntegerInRange(0, 3000));
	setTimeout(function () {
		loopFloaters($("#right_inner"));
	}, getRandomIntegerInRange(0, 3000));
	setTimeout(function () {
		loopFloaters($("#left_outer"));
	}, getRandomIntegerInRange(0, 3000));

	$(document).on("click touchstart", ".btn-jake", function () { popBubble(this); });
});

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

function getRandomIntegerInRange(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);

	return Math.floor(Math.random() * (max - (min + 1)) + min);
}

function popBubble(el) {
	var $el = $(el);
	var counter = parseInt($("#counter").val(), 10) + 1;
	$("#counter").val(counter);

	if (counter === 4) {
		$(".btn-jake").addClass("hide");
	} else {
		$el.addClass("hide");
	}

	switch (counter) {
		case 1:
			$("#first_hint").text("Mommy");
			break;
		case 2:
			$("#second_hint").text("is carrying");
			break;
		case 3:
			$("#third_hint").text("my little");
			break;
		case 4:
			$("#reveal").text("BROTHER!!!").css({ "text-decoration": "underline" });
			$("body").addClass("bg-primary");
			break;
	}
}
