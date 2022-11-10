$(function() {
    var instance = $("body").overlayScrollbars({ }).overlayScrollbars();

    $(".arrow").on("click", function() {
        instance.scroll($("#content"), 1000, "easeInOutCubic");
    })

    $("#back-button").on("click", () => {
        window.location = "../index.html";
    })
})

