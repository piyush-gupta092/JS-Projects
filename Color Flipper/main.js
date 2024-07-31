const color = document.querySelector("h2 span");
const btn = document.querySelector("button");

btn.addEventListener("click", handleBgColor);
window.addEventListener("keydown", (e) => {
	if (e.code === "Space") {
		handleBgColor();
	}
});

function handleBgColor() {
	const randomHex = `#${getRandomHex()}`;
	document.body.style.backgroundColor = randomHex;
	color.textContent = randomHex;
	btn.classList.toggle("active");
}

function getRandomHex() {
	const randomHex = Math.floor(Math.random() * 0xf00000 + 0xfffff).toString(16);
	return randomHex;
}