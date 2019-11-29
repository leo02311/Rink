$(function() {
    // Sidebar toggle behavior
    $('#sidebarCollapse').on('click', function() {
        $('#sidebar, #content').toggleClass('active')
        var text = $('#sidebarCollapse').text()
        $small = $('<small>').addClass('text-uppercase').addClass('font-weight-bold')
        if (text === "展開") {
            $("#sidebarCollapse small").text('摺疊');
        } else {
            $("#sidebarCollapse small").text('展開');
        }

    });
});