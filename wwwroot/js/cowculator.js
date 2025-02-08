$(document).ready(function () {
    $("#calculate-btn").click(function () {
        let hours = $("#hours").val();
        let rate = parseFloat($("#rate").val());

        // Validate input (must be a positive number)
        if (!hours || isNaN(hours) || hours <= 0) {
            $("#error-message").show();
            $("#total").val("");
            return;
        } else {
            $("#error-message").hide();
        }

        // Calculate total cost
        let totalCost = (parseFloat(hours) * rate).toFixed(2);
        $("#total").val(totalCost);
    });
});
