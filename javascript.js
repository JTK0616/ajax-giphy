
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

// Adds a class with a value of politician

  politician.addClass("politician");

  // Assigns a data-name based on the name of the politician

  politician.attr("data-name", politicians[i]);

// Lables the button with the text in the array

  politician.text(politicians[i]);

// Adding the button to the HTML

  $("#politician_buttons").prepend(politician);

// Clears the form input on submission

  $("#politician_form").each(function(){
    this.reset();
});


  }  //Closes the for loop

};  //Closes the makeButtons function 



// Allows for adding a new politican name to the array when the submit button is clicked by the user
// Reruns the makeButtons function to add the button to the list of availale choices


$("#add_politician").on("click", function(event) {
  event.preventDefault();
  var newpolitician = $("#politician_input").val().trim();
  politicians.push(newpolitician);
  makeButtons();
  
});  //Closes the on click listener for the form


// Calls the make buttons function when the page originally loads

makeButtons();

 



// Giphy API Query

$(document).on("click", ".politician", function() {
  var person = $(this).attr("data-name");
  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + person + "&api_key=dc6zaTOxFJmzC&limit=10";

   $.ajax({
    url: queryURL,
    method: "GET"
  })


// Returns Giphy results to #politicians div


  .done(function(response) {
    var results = response.data;

    console.log(results);

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

   });  // Closes .done response fuction

});

  // Pauses the GIF when clicked.  Resumes animation when clicked again.


 // $(.clown)on("click", function() {
 //      console.log("This works!!!!!");

      // var state = $(this).attr("data-state");
      // if (state === "still") {
      //   $(this).attr("src", $(this).attr("data-animate"));
      //   $(this).attr("data-state", "animate");
      // } else {
      //   $(this).attr("src", $(this).attr("data-still"));
      //   $(this).attr("data-state", "still");
      // });  




    