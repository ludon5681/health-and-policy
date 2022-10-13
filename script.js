document.addEventListener("DOMContentLoaded", function() {
	OverlayScrollbars(document.querySelectorAll("body"), { });
});

$(".dropdown-item").on("click", (e) => {
	e.preventDefault()
	var show = e.target.id
	if (e.target.id !== "all") {
		elements = $("article." + show)
		$("article").css("display", "none")
		elements.css("display", "block")
	} else {
		$("article").css("display", "block")
	}
})
