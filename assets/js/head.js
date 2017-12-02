(function() {
	var $headings = $('section h2[id]');
	if ($headings.length < 1) {
		return;
	}

	var path = window.location.pathname;//.replace(/[\/]+$/, '');
	var $navLink = $('nav a[href="' + path + '"]');
	var $subNav = $navLink.next('.subNav');

	$subNav = $subNav[0] ? $subNav : $('<ul class="subNav"/>').insertAfter($navLink);

	$subNav.append($headings.toArray().map(function(a) {
			var $a = $(a);

			return $('<li class="tag-h2"><a href="#' + $a.attr('id') + '">' + $a.text() + '</a></li>')[0];
		}));

	if (!$navLink.length) {
		$('nav > ul')
			.append(
				$('<li><br/><strong class="current">' + window.__page.title + '</strong></li>')
					.append($subNav)[0]
			)
	}
})();

$(function() {
	$('a[href^="http"]:not([href^="' + window.location.origin + '"]')
		.attr('target', '_blank');
})
