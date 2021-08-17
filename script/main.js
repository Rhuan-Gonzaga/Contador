
  $("#getting-started")
  .countdown("2022/01/01", function(event) {
    $(this).text(
      event.strftime('%D days %H:%M:%S')
    );
  });
