
var queries = ["BMW", "Ford", "Lincoln", "Audi", "Toyota", "Volvo", "Hyundai", "Nissan", "Infiniti"];

function displayCarInfo() {

  var car = $(this).attr("placeholder");
  var queryURL = "http://api.giphy.com/v1/gifs/search?q=&api_key=ke46yN1pXZHc3sQU577y1Y4KoyJBtIZy&limit=10";

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {

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

    $("#car-view").empty();

    for (var i = 0; i < queries.length; i++) {
      
      var a = $("<button">);

      a.text(queries[i]);

      const button2 = $("<button>").addClass('car-btn')
                      .text(queries[i]);

            $("#car-view").append(a);
    }

  }

  $("#add-car").on("click", function(event) {
    event.preventDefault();
    var car = $("#car-input")
  }

    })
  
  }

  )
}
}

var queryURL = "


$.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    console.log(response);
  });



  var queries = ["BMW", "Ford", "Lincoln", "Mercedes-Benz", "Audi", "Toyota", "Volvo", "Kia", "Hyundai", "Nissan", "Infiniti"];

  function renderButtons() {
    $("#buttons-view").empty()
  };

  var i; 

  for (i=0; i < queries.length; i++) {
  
  var b = $("<button>");
    b.text(queries[i]);

    $("#")
  }