// Run on document load.
$(document).ready(function() {});

// Randomize Button Functionality
$("button#randomize").click(function(e){
  e.preventDefault();
  var words_to_randomize = $("input#words_to_randomize").val();
  console.log(words_to_randomize)
});