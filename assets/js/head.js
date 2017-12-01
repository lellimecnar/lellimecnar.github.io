(function() {
	var $headings = $('section h2[id]');
	if ($headings.length < 1) {
		return;
	}

	var $subNav = $('<ul class="subNav"/>')
		.append($headings.toArray().map(function(a) {
			var $a = $(a);

			return $('<li class="tag-h2"><a href="#' + $a.attr('id') + '">' + $a.text() + '</a></li>')[0];
		}));

	var path = window.location.pathname.replace(/[\/]+$/, '');
	var $navLink = $('nav a[href^="' + path + '"]');

	if ($navLink.length > 0) {
		$navLink
			.after($subNav);
	} else {
		$('nav > ul')
			.append(
				$('<li><br/><strong class="current">' + window.__page.title + '</strong></li>')
					.append($subNav)[0]
			)
	}
})();
