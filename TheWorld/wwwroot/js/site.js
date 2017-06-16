// Write your Javascript code.
(function () {


    var ele = $("#username");
    ele.text("bla  prezime");

    var main = $("#main");

    main.on("mouseenter", function () {
        main.css('background-color', '#888');
        console.log(1);
    });

    //$(document).on("mouseenter", "#main", function () {
    //    main.style = "background-color: #888;";
    //    console.log(2);
    //});

    main.on("mouseleave", function () {
        main.css('background-color', '');
    });

    var menuitems = $("ul.menu li a");
    menuitems.on("click", function () {
        var me = $(this);
        alert(me.text());
    });

    //var $sideBarAndWrapper = $("#sidebar,#wrapper");

    //$("sidebarToggle").on("click", function () {

    //    $sideBarAndWrapper.toggleClass("hide-sidebar");
    //});


})();