(function () {
    $(init);
    function init() {

        $("#search").click(searchMovie);
        var movieTitle = $("#title");
        var tbody = $("#container");
        var template = $("#template");
        tbody.empty();


        function searchMovie() {
            var title = movieTitle.val();

            $.ajax()
        }

    }

})();