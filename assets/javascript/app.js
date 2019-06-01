$(function () {
  var topics = ["World of Warcraft", "Settlers of Catan", "Star Wars", "The Ocean", "Pizza", "Super Smash Bros.", "The Legend of Zelda", "Blues Guitar", "Mountains", "Music", "Books", "Mexican Food"];

  // generates button from items in array on load 
  function gifButtons() {
    $.each(topics, function (i) {
      var topicBtn = $(`<button> ${topics[i]} </button>`);
      topicBtn.addClass("gif-btn btn btn-dark mb-2");
      topicBtn.attr("btn-topics", topics[i]);
      $("#thing-btn").append(topicBtn);
    });
  };

  //function to generate a new button from last item in array 

  function newGifButtons() {
    var topicBtn = $(`<button> ${topics[topics.length-1]} </button>`);
    topicBtn.addClass("gif-btn btn btn-dark mb-2")
      topicBtn.attr("btn-topics", topics[topics.length-1]);
      $("#thing-btn").append(topicBtn);
  };

  gifButtons();

  //generating new button on sumbit

  $("#add-thing").click(function (event) {
    event.preventDefault();
    var newBtn = $(".new-btn-create").val().trim();
    topics.push(newBtn);
    $(".new-btn-create").val("");
    newGifButtons()
  });


  //generating gif on button click

  $(document).on("click", ".gif-btn", function () {

    var buttonTopic = $(this).attr("btn-topics");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + buttonTopic + "&api_key=NPUUBuc8aRDejugI9RNTcyhKIXuC1B95&limit=10";

    $.ajax({
      url: queryURL,
      method: "GET",
    }).then(function (response) {

      var results = response.data;
      console.log(results);
      for (var i = 0; i < results.length; i++) {
        if (results[i].rating !== "r" && results[i].rating !== "pg-13") {
          var gifDiv = $("<div>");
          var rating = results[i].rating;
          var p = $("<p>").text("Rating: " + rating);
          var thingGif = $("<img>");
          thingGif.attr("id", "gif-to-click");
          thingGif.attr("src", results[i].images.original_still.url);
          thingGif.attr("data-still", results[i].images.original_still.url);
          thingGif.attr("data-animate", results[i].images.original.url);
          thingGif.attr("data-state", "stop");
          gifDiv.append(p);
          gifDiv.append(thingGif);
          $("#gif-space").prepend(gifDiv);
        }
      }
    })
  });

  
//function that toggles betweewn animating a gif an stopping the animation 

$(document).on("click", "#gif-to-click", function () {
  var state = $(this).attr("data-state");
  if (state === "stop") {
    $(this).attr("src", $(this).attr("data-animate"));
    $(this).attr("data-state", "animate");
  } else {
    $(this).attr("src", $(this).attr("data-still"));
    $(this).attr("data-state", "stop");
  }
});

});