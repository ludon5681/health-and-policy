document.addEventListener("DOMContentLoaded", function() {
	OverlayScrollbars(document.querySelectorAll("body"), { });
});

var visible = []

function refresh() {
	for (const element of visible) {
		$("article." + element).css("display", "block")
	}
}

var from_all = true
$(".dropdown-item").on("click", (e) => {
	e.preventDefault()

	var show = e.target.id
	var all = $("#all")
	var allCheck = $("#all-check")
	// if the pressed button was all
	if (show == "all") {
		// if all is currently displayed, display nothing
		if (all.hasClass("checked")) {
			$("article").css("display", "none")
			allCheck.html("")
			all.removeClass("checked")
		// if the all button is currently off, display everything
		} else {
			$("article").css("display", "block")

			$(".dropdown-menu").children().each(function() {
				var childClassList = $(this).children("a").eq(0).attr("class")
				if (childClassList.indexOf("checked") !== -1) {
					$(this).children().eq(0).children().eq(0).html("")
					$(this).children("a").eq(0).removeClass("checked")
				}
			})

			allCheck.html("&#10003")
			all.addClass("checked")
		}
	// if the button that was pressed was not all
	} else {
		// if all is currently checked, uncheck it and then display only things in the category that was pressed
		if (all.hasClass("checked")) {
			$("article").css("display", "none")
			allCheck.html("")
			all.removeClass("checked")
			
			$("article." + show).css("display", "block")
			$("#" + show + "-check").html("&#10003")
			$("#" + show).addClass("checked")
		// if all is not currently checked
		} else {
			// if the thing that was pressed is currently checked, remove everything in that category from display
			if ($("#" + show).hasClass("checked")) {
				$("article." + show).css("display", "none")
				$("#" + show + "-check").html("")
				$("#" + show).removeClass("checked")
			// otherwise, display it
			} else {
				$("article." + show).css("display", "block")
				$("#" + show + "-check").html("&#10003")
				$("#" + show).addClass("checked")
			}
			
		}
	}
})

