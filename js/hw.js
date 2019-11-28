$(function() {
    // Sidebar toggle behavior
    $('#sidebarCollapse').on('click', function() {
        $('#sidebar, #content').toggleClass('active');
        var text = $('#sidebarCollapse').text()
        if (text === "展開") {
            e.appendChild('<i class="fa fa-bars mr-2"></i>')
            $(this).html('摺疊')
        } else {
            e.appendChild('<i class="fa fa-bars mr-2"></i>')
            $(this).text('展開')
        }
    });
});