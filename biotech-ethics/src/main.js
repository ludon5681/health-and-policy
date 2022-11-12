$(function() {
    var instance = $("body").overlayScrollbars({ }).overlayScrollbars();

    $(".arrow").on("click", function() {
        instance.scroll($("#content"), 1000, "easeInOutCubic");
    })

    // header buttons
    $("#quiz-button").on("click", () => {
        window.location = "./options.html";
    })
    $("#back-button").on("click", () => {
        window.location = "../index.html";
    })
})

