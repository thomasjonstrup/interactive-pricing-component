const range = document.getElementById('range');

range.addEventListener('input', function (event) {
	console.log('range :>> ', event.target.value);

	range.style.background = `linear-gradient(
		to right,
		hsl(174, 77%, 80%) 0%,
		hsl(174, 77%, 80%) ${event.target.value}%,
		 hsl(224, 65%, 95%) 50%,
		 hsl(224, 65%, 95%) 100%
	)`;
});
