function groceryCalculator(monthlySalary) {
  var weeks = 4;
  var oneFourth = 0.25;
  var affordableGrocery = (monthlySalary / 4) * oneFourth;
  return Math.round(affordableGrocery);
}


$(document).ready(function() {
    $("#submit").click(function() {
      var income = $("#money").val();
      var result = groceryCalculator(income);
      var friendlyResult = "You should not spend more than $" + result + " on groceries each week";

      $(".result").text(friendlyResult);
    });
});
