// Run on document load.
$(document).ready(function() {});

// Pick a random number between a minimum and a maximum.
function getRandom(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

// Reset page
$("button#reset").click(function(e){
  e.preventDefault();
  $(".result").empty();
  $(".result").append("<li>Nothing here yet...</li>");
  $(".result li").addClass("list-group-item nothing_here");
  $("#words_to_randomize").val("");
  $("#number_of_words").val(3);
  console.log("Random Words form reset.");
});

// Randomize Button Functionality.
$("button#randomize").click(function(e){
  e.preventDefault();
  // Collect value from input field, clean it, and place words in an array.
  var words_to_randomize = $("input#words_to_randomize").val();
  words_to_randomize = words_to_randomize.replace(/\s+/g, '');
  var words_array = words_to_randomize.split(",").filter(Boolean);
  var words_array = Array.from(new Set(words_array));
  // Console success.
  console.log("Collected Words: " + words_array.length);
  console.log(words_array);

  // How many words should be randomely chosen.
  var number_of_words = parseInt($("input#number_of_words").val(), 10);
  console.log("number_of_words: " + number_of_words);

  // Random word picker.
  var random_words = [];
  var counter = 0;
  for (var i = 0; i < number_of_words; i++) {
    time_out_label: while (random_words.length < number_of_words){
      // Draw words randomly from words_array.
      var drawn_word = words_array[getRandom(1,words_array.length)];
      if (random_words.includes(drawn_word)){
        // If the drawn word has been picked before, add 1 to the counter and try again.
        counter++;
        if (counter >= number_of_words*100){
          // Cause the function to timeout if it's made too many draw attempts based on the counter.
          console.log("Timed out word picker.");
          random_words = [];
          random_words[0] = "There was an error, check your entry and try again."
          break time_out_label;
        }
        continue
      } else {
        // Keep the word if it hasn't already been drawn.
        random_words.push(drawn_word);
      }
    }
  }

  // Post random_words array to DOM.
  console.log("random_words:");
  console.log(random_words);
  $(".result").empty();
  random_words.forEach(function(word){
    $(".result").append("<li>" + word + "</li>");
  });
  $(".result li").addClass("list-group-item");

});