
console.log("File Linked");

// Initial array of politicians

var politicians = ["Donald Trump", "Hillary Clinton", "Mike Pence", "Rick Scott", "Marco Rubio", "Nancy Pelosi", "Elizabeth Warren", "Bernie Sanders", "Ross Perot", "George Bush", "Bill Clinton", "Barack Obama"];


// Function for displaying politician buttons

function makeButtons() {

// Ensures the politician_buttons div is empty when the page loads.  Prevents duplicate buttons

$("#politician_buttons").empty();

// Loops through the array of politicians

for (var i = 0; i < politicians.length; i++) {
  var politician = $("<button>");

// Adds a data-attribute with a value of the politician at index i

  politician.addClass("politician");
  politician.attr("data-name", politician[i]);

// Lables the button with the text in the array

  politician.text(politicians[i]);

// Adding the button to the HTML

  $("#politician_buttons").append(politician);

  }  //Closes the for loop

};  //Closes the makeButtons function 



// Allows for adding a new politican name to the array when the submit button is clicked by the user
// Reruns the makeButtons function to add the button to the list of availale choices


$("#add_politician").on("click", function(event) {
  event.preventDefault();
  var newpolitician = $("#politician_input").val().trim();
  console.log(newpolitician);
  politicians.push(newpolitician);
  makeButtons();
  $("#politician_input").empty();
  
});  //Closes the on click listener for the form


// Calls the make buttons function when the page originally loads

makeButtons();

 



// Giphy API Query

$("button").on("click", function() {
  var person = $(this).attr("data-person");
  var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + person + "&api_key=dc6zaTOxFJmzC&limit=10";

  $.ajax({
    url: queryURL,
    method: "GET"
  })

.done(function(response) {
    var results = response.data;

    console.log(results.data);

    for (var i = 0; i < results.length; i++) {

      var gifDiv = $("<div class='item'>");

      var rating = results[i].rating;

      var p = $("<p>").text("Rating: " + rating);

      var personImage = $("<img>");
      personImage.attr("src", results[i].images.fixed_height.url);

      gifDiv.prepend(p);
      gifDiv.prepend(personImage);

  $("#politicians").prepend(gifDiv);

}
});
});


    