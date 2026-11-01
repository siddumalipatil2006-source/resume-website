function showMessage() {
    document.getElementById("message").innerHTML =
        "Thank you for visiting my website!";
}

$(document).ready(function() {

    $("h1").click(function() {
        $(this).css("color", "yellow");
    });

    $("#contactForm").submit(function(e) {

        e.preventDefault();

        let name = $("#name").val();

        $("#result").text(
            "Thank you " + name +
            "! Your message is submitted successfully."
        );

        this.reset();

    });

});