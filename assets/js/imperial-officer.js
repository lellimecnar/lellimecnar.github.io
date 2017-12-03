$(document).on('click', '#FrontPiecesList li', function(e) {
	var $this = $(this);
	var pieceId = $this.find('strong').first().text();
	var text = $this.clone().find('em').remove().end().html();
	var $wrapper = $this.closest('#FrontPiecesList').siblings('.PatternPieces__frontPiecesWrapper');

	$wrapper
		.attr('data-current', pieceId)
		.find('figcaption').html(text);

	$this.addClass('current')
		.siblings('li').removeClass('current');
});
