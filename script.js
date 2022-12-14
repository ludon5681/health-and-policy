document.addEventListener("DOMContentLoaded", function() {
	OverlayScrollbars(document.querySelectorAll("body"), { });
});

var visible = []

function refresh(show, boolCheck) {
	$("article").css("display", "none")
	for (const element of visible) {
		$("article." + element).css("display", "block")
	}
	if (boolCheck) {
		$("#" + show + "-check").html("&#10003")
		$("#" + show).addClass("checked")
	} else {
		$("#" + show + "-check").html("")
		$("#" + show).removeClass("checked")
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
			visible = []

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
			
			visible.push(show)
			refresh(show, true)
		// if all is not currently checked
		} else {
			// if the thing that was pressed is currently checked, remove everything in that category from display
			if ($("#" + show).hasClass("checked")) {
				index = visible.indexOf(show)
				if (index != -1) {
					visible.splice(index, 1)
					refresh(show, false)
				}
			// otherwise, display it
			} else {
				visible.push(show)
				refresh(show, true)
			}
			
		}
	}
})

