(function () {
	var rankBars = document.querySelectorAll('i[data-rank-bar]');
	
	[].forEach.call(rankBars, function(bar) {
		var html = '';
		var rows = bar.dataset.rankBar.split('-');

		rows.forEach(function(row) {
			var tiles = row.split('');
			html += '<span>';
			
			tiles.forEach(function(tileColor) {
				html += '<i data-rank-tile="' + tileColor + '"></i>';
			});
			
			html += '</span>';
		});
	});
})();
