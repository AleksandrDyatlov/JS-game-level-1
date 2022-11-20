document.addEventListener('DOMContentLoaded', function () {
	const screen = document.getElementById('canvas');
	const figures = screen.querySelectorAll('.figure');
	const btnStart = document.querySelector('.btn-start');
	const btnStop = document.querySelector('.btn-stop');

	function showFigures(items) {
		items.forEach(function(item) {
			item.style.display = 'block';
		});
	}

	function hideFigures(items) {
		items.forEach(function(item) {
			item.removeAttribute('style');
		});
	}

	btnStart.addEventListener('click', () => showFigures(figures));
	btnStop.addEventListener('click', () => hideFigures(figures));
}, false);
