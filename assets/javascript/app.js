$(function () {
  var topics = ["World of Warcraft", "Settlers of Catan", "Twilight Imperium", "Warhammer 40k", "Munchkin", "Super Smash Bros.", "The Legend of Zelda", "Star Fox", "Mountains", "Music", "Books"];

  // generates button from items in array on load 
  function gifButtons() {
    $.each(topics, function (i) {
      var topicBtn = $(`<button> ${topics[i]} </button>`);
      topicBtn.addClass("gif-btn btn btn-dark mb-2")
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
    $(".new-button-create").val("");
    newGifButtons()
  });


  //generating gif on button click
  $(".gif-btn").click(function () {

    var buttonTopic = $(this).attr("btn-topics");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + buttonTopic + "&api_key=NPUUBuc8aRDejugI9RNTcyhKIXuC1B95&limit=10";


    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function (response) {

      var results = response.data;

      for (var i = 0; i < results.length; i++) {
        if (results[i].rating !== "r" && results[i].rating !== "pg-13") {
          var gifDiv = $("<div>");
          var rating = results[i].rating;
          var p = $("<p>").text("Rating: " + rating);
          var thingGif = $("<img>");
          thingGif.attr("src", results[i].images.fixed_height.url);
          gifDiv.append(p);
          gifDiv.append(thingGif);
          $("#gif-space").prepend(gifDiv);
        }
      }
    });
  });

  //each item in topics array should have a button generated on load
  // on button click, generate 10 gifs

  //user submit should create new button from what was inputed













});