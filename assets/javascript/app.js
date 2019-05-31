$(function() {

const topics = ["World of Warcraft", "Settlers of Catan", "Twilight Imperium", "Warhammer 40k", "Munchkin", "Super Smash Bros.", "The Legend of Zelda", "Star Fox",];

// for (var i = 0; i < topics.length; i++)
$.each(topics, function (i) { 
    var topicBtn = $("<button>"+ topics[i] + "</button>");
    topicBtn.addClass("btn btn-dark mb-2")
    $("#thing-btn").append(topicBtn);
  });


$("#add-thing").on("click", function() {

    var thing = $(this).attr("data-person");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + person + "&api_key=NPUUBuc8aRDejugI9RNTcyhKIXuC1B95&limit=10";


    $.ajax({
      url: queryURL,
      method: "GET"
    }) .then(function(response) {

        
      });
  });

  //each item in topics array should have a button generated on load
    // on button click, generate 10 gifs

  //user submit should create new button from what was inputed













});