$("#parrafos p").each(function () {
    if ($(this).text().length < 100) {
        $(this).css("background-color", "#ff0");
    }
});