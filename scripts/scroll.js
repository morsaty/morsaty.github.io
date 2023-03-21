const $root = $('html, body')

$('a[href^="#"]').click(function () {
	$root.animate(
		{
			scrollTop: $($.attr(this, 'href')).offset().top,
		},
		400
	)

	return false
})
