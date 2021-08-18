
  $("#getting-started")
  .countdown("2077/01/01", function(event) {

    $("#meses").text(
      event.strftime('%m')
    );
    $("#dias").text(
      event.strftime('%D')
    );
    $("#horas").text(
      event.strftime('%H')
    );
    $("#minutos").text(
      event.strftime('%M')
    );
    $("#segundos").text(
      event.strftime('%S')
    );
  });
