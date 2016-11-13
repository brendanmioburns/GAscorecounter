$(document).ready(function() {

    var score = 0;

    // Add 5 points to score box
    $("#increase-5").on("click", function() {
        score += 5;

        $("#score").html(score + " points");

    });

// Subtract 5 points to score box, but not below 0
    $("#decrease-5").on("click", function() {

        if (score - 5 >=5){
            score -= 5;

        $("#score").html(score + " points");
    } else {
        score = 0;
        $("#score").html(score + " points");
    }
    });


    // Submit custom score, make sure it's not a string but a addable/subtractable number
    $("#submit-custom-score").on("click", function() {

        var customScore = parseInt($("#custom-score").val());
            event.preventDefault();

            if (customScore >= 0) {
                score = customScore;

            $("#score").html(score + " points");

            }


    });
});
