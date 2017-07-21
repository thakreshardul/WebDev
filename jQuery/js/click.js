(function () {
    $(init);

    function init(){
        $("#clickBtn").click(function () {
            alert("Hello");
        });

        $("#dblclick").dblclick(function () {
            alert($("#doublemsg").val());
        });

        $("#hoverme").hover(function () {
            alert($("#hover").val());
        });

    }

})();