
var queries = ["BMW", "Ford", "Lincoln", "Audi", "Toyota", "Volvo", "Hyundai", "Nissan", "Infiniti"];

function displayCarInfo() {

  var car = $(this).attr("placeholder");
  var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + car + "&api_key=ke46yN1pXZHc3sQU577y1Y4KoyJBtIZy&limit=10";

  $.ajax({
    url: queryURL,
    method: "GET"
  })
  
    .then(function(response) {
      console.log(queryURL);

    var carDiv = $("<div class='car'>");

    var rating = response.Rated;

    var ratingDisplay = $("<p>").text("Rating: " + rating);

    carDiv.append(ratingDisplay);

    var title = response.Title;

    var titleDisplay = $("<p>").text("Title: " + title);

    carDiv.append(titleDisplay);

    $("#car-view").prepend(carDiv);
  });

  }

  function renderButtons() {

    $("#button-holder").empty();

    for (var i = 0; i < queries.length; i++) {
      
      var a = $("<button>");

      a.addClass("car-btn");

      a.text(queries[i]);

      const button2 = $("<button>").addClass('car-btn')
                      .text(queries[i]);

            $("#button-holder").append(a);
    }

  }

  $("#add-car").on("click", function(event) {
    event.preventDefault();
    var car = $("#car-input").val().trim();

    queries.push(car);

    renderButtons();
  });

  $(document).on("click", ".car-btn", displayCarInfo);

  renderButtons();