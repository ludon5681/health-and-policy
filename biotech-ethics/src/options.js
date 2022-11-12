$(function() {
    var instance = $("body").overlayScrollbars({ }).overlayScrollbars();

    $("#back-button").on("click", () => {
        window.location = "./main.html";
    })

    document.getElementById("cards").onmousemove = e => {
        for (const card of document.getElementsByClassName("card")) {
            const rect = card.getBoundingClientRect(),
                x = e.clientX - rect.left,
                y = e.clientY - rect.top;
      
            card.style.setProperty("--mouse-x", `${x}px`);
            card.style.setProperty("--mouse-y", `${y}px`);
        };
    }

    $(".card").on("click", function() {
        window.location = `./${ $( this ).attr("id") }.html`
    })
})