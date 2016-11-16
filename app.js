$(document).ready(function() {
//upon page load
    var score = 0;

    // Add 5 points to score box
    $("#increase-5").on("click", function() {
        score += 5;

        $("#score").html(score + " points");

    });

// Subtract 5 points to score box, but not below 0
    $("#decrease-5").on("click", function() {
        score -= 5;
        // if (score - 5 >=5){
        //     score -= 5;

      if (score >= 0) {
        $("#score").html(score + " points");
    } else {
        score = 0;
        $("#score").html(score + " points");
    }
    });


    // Submit custom score, make sure it's not a string but a addable/subtractable number
    $("#custom-score-form").on("submit", function(event) {
        event.preventDefault();

        // var customScore = parseInt($("#custom-score").val());
        var customScore = $("#custom-score").val();
        var customScoreInt = parseInt(customScore);
        // parseInt turns string into integer


            if (customScoreInt >= 0) {
                score = customScoreInt;
                $("#score").html(score + " points");
                $("#custom-score").val("");

            } else {
                score = 0;
                $("#score").html(score + " points");
                alert("You can't enter a negative score");
            }


    });
});
