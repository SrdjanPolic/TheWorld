// Write your Javascript code.
(function () {


    //var ele = $("#username");
    //ele.text("bla  prezime");

    //var main = $("#main");

    //main.on("mouseenter", function () {
    //    main.css('background-color', '#888');
    //    console.log(1);
    //});

    //main.on("mouseleave", function () {
    //    main.css('background-color', '');
    //});

    //var menuitems = $("ul.menu li a");
    //menuitems.on("click", function () {
    //    var me = $(this);
    //    alert(me.text());
    //});

    var $sideBarAndWrapper = $("#sidebar,#wrapper");

    var sidebarToggle = $("#sidebarToggle");
    sidebarToggle.on("click", function () {

        console.log(1);
        $sideBarAndWrapper.toggleClass("hide-sidebar");
        if ($sideBarAndWrapper.hasClass("hide-sidebar")) {
            $(this).text("Show sidebar");
        }
        else
        {
            $(this).text("Hide sidebar");
        }
       
    });


})();