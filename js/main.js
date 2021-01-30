const range = document.getElementById('range');
const pageviewsCount = document.getElementById('pageviews-count');
const toggleDiscount = document.getElementById('toggle_discount');
const price = document.getElementById('price');

function handlePricingChanges(value) {
	let pricing = 8;

	if ((value > 0) & (value <= 20)) {
		pageviewsCount.textContent = '10K Pageviews';
		pricing = 8;
	} else if (value > 20 && value <= 40) {
		pageviewsCount.textContent = '50K Pageviews';
		pricing = 12;
	} else if (value > 40 && value <= 60) {
		pageviewsCount.textContent = '100K Pageviews';
		pricing = 16;
	} else if (value > 60 && value <= 80) {
		pageviewsCount.textContent = '500K Pageviews';
		pricing = 24;
	} else if (value > 80 && value <= 100) {
		pageviewsCount.textContent = '1M Pageviews';
		pricing = 36;
	}

	if (toggleDiscount.checked) {
		const totalValue = pricing - pricing * 0.25;
		price.textContent = `$${totalValue}.00`;
	} else {
		price.textContent = `$${pricing}.00`;
	}

	range.style.background = `linear-gradient(
		to right,
		hsl(174, 77%, 80%) 0%,
		hsl(174, 77%, 80%) ${value}%,
		 hsl(224, 65%, 95%) 50%,
		 hsl(224, 65%, 95%) 100%
	)`;
}

range.addEventListener('input', function (event) {
	console.log('range value :>> ', event.target.value);
	const value = range.value;
	handlePricingChanges(value);
});

toggleDiscount.addEventListener('input', function (event) {
	console.log('range value :>> ', event.target.value);
	const value = range.value;
	handlePricingChanges(value);
});
