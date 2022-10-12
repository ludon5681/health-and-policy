document.addEventListener("DOMContentLoaded", function() {
	OverlayScrollbars(document.querySelectorAll("body"), { });
});

$(".dropdown-item").on("click", (e) => {
	e.preventDefault()
	console.log(e.currentTarget.id)
})
