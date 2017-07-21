(function () {
    $(init);

    function init() {
        var hello = $("#hello");
        var list = $("#courseList");
        var students = $("#studentList");

        hello.append("Hello World!!!")
            .append("It's me Shardul");

        var li = $("<li>AngularJS</li>");
        list.append(li);

        li = $("<li>");
        li.append("MongoDB");
        console.log(li);
        list.append(li);

        var studentNames = ["Shardul", "Garrett", "Maxfield", "Swati"];
        for (var i in studentNames){
            var element = $("<li>");
            element.append(studentNames[i]);
            students.prepend(element);

        }
    }

})();
/*
(function(){

    $(init);

    function init()
    {
        // simple append
        $("#hello")
            .append("Hello World!")
            .append("Is there anyone out there?");

        // Example: appending a new element
        // grab list
        var ulElement = $("#courseList");
        // create DOM element in local variable
        var li = $("<li>AngularJS</li>");
        // append new DOM element to list
        ulElement.append(li);

        // Example: appending to local exports
        // create DOM element in local variable
        li = $("<li>");
        // append to local variable
        li.append("MongoDB");
        // append to list
        ulElement.append(li);

        // Example: appending to beginning
        var studentNames = ["Alice", "Bob", "Charlie", "Dan"];
        var studentList = $("#studentList");
        for(var s = 0; s < studentNames.length; s++)
        {
            var studentLi = $("<li>");
            var studentName = studentNames[s];
            studentLi.append(studentName);
            studentList.prepend(studentLi);
        }
    }
})();*/