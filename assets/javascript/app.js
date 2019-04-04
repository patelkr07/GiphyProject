

var queryURL = "http://api.giphy.com/v1/gifs/search?q=&api_key=ke46yN1pXZHc3sQU577y1Y4KoyJBtIZy&limit=10";


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