$(function () {
    $('#inicio-link').on('click', function(){
        window.location.href = $(this).href;
    });

    $('#manual-link').on('click', function(){
        window.location.href = $(this).href;
    });

    $('#log-link').on('click', function(){
        window.location.href = $(this).href;
    });

    $("#log-button").on("click", function (e) {
        e.preventDefault();

        var username = $("#username").val();
        var password = $("#password").val();
        
        $("#loginForm").submit();
    });
});