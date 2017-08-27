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
    var $icon = $("#sidebarToggle i.fa");

    var sidebarToggle = $("#sidebarToggle");
    sidebarToggle.on("click", function () {

        
        $sideBarAndWrapper.toggleClass("hide-sidebar");
        if ($sideBarAndWrapper.hasClass("hide-sidebar")) {
            console.log(1);
            $icon.removeClass("fa-angle-left");
            $icon.addClass("fa-angle-right");
        }
        else
        {
            console.log(1);
            $icon.addClass("fa-angle-left");
            $icon.removeClass("fa-angle-right");
        }
       
    });


})();