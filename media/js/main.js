// Run on document load.
$(document).ready(function() {});

function getRandom(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

// Randomize Button Functionality
$("button#randomize").click(function(e){
  e.preventDefault(); // prevent page reload
  // Collect value from input field, clean it, and place words in an array
  var words_to_randomize = $("input#words_to_randomize").val();
  words_to_randomize = words_to_randomize.replace(/\s+/g, '');
  var words_array = words_to_randomize.split(",").filter(Boolean);
  var words_array = Array.from(new Set(words_array))
  // Send Success to Console.
  console.log("Collected the following \"" + words_array.length + "\" words:");
  console.log(words_array);

  var number_of_words = parseInt($("input#number_of_words").val(), 10);
  console.log(number_of_words);

  var random_words = [];
  var counter = 0;
  for (var i = 0; i < number_of_words; i++) {
    time_out_label: while (random_words.length < number_of_words){
      var drawn_word = words_array[getRandom(1,words_array.length)];
      if (random_words.includes(drawn_word)){
        counter++;
        if (counter >= number_of_words*100){
          console.log("Timed out")
          break time_out_label;
        }
        continue
      } else {
        random_words.push(drawn_word);
      }
    }
  }

  console.log(random_words);

});