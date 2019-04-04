

$("button").on("click", function() {
    var car = $(this).attr("data-car");

    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + car + "&api_key=ke46yN1pXZHc3sQU577y1Y4KoyJBtIZy&limit=10";

    $.ajax({
        url: queryURL,
        method: "GET"
    })

        .then(function(response) {
            console.log(queryURL);
            console.log(response);

            var results = response.data;

            for (var i = 0; i < results.length; i++) {
                var carDiv = $("<div>");

                var para = $("<p>").text("Rating: " + results[i].rating);

                var carImage = $("<img>").attr('src', results[i].images.fixed_height.url);

                carDiv.append(para);
                carDiv.append(carImage);

                $("#gif-holder").prepend(carDiv);
            }
        });
});