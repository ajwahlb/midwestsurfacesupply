

if ($(window).width() < 768) {
	$('.new-break').replaceWith('<br>');
}

$('.carousel').carousel({
  interval: 5000,
  pause: "hover"
})