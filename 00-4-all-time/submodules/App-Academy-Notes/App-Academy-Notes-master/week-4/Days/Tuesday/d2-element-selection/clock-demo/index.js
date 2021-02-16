

document.addEventListener('DOMContentLoaded', () => {

	const title = document.getElementById('title');

	const getTime = () => {
		const date = new Date();
		const seconds = date.getSeconds();
		const minutes = date.getMinutes();
		const hours = date.getHours();

		title.innerHTML = hours + ":" + minutes + ":" + seconds;
	}

	setInterval(getTime, 1000);
})