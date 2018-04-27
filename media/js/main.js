// Run on document load.
$(document).ready(function() {});

// Randomize Button Functionality
$("button#randomize").click(function(e){
  e.preventDefault(); // prevent page reload
  // Collect value from input field, clean it, and place words in an array
  var words_to_randomize = $("input#words_to_randomize").val();
  words_to_randomize = words_to_randomize.replace(/\s+/g, '');
  var words_array = words_to_randomize.split(",")
  // Send Success to Console.
  console.log("Collected the following \"" + words_array.length + "\" words:");
  console.log(words_array);
});