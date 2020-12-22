
// Reservation Information (DATA)
// =============================================================
var reservations = [
    {
      name: "John Smith",
      phone: "000-000-0000",
      email: "john.s@gmail.com",
      id: 1234
    }
  ];

  var waitingList = [
    {
      name: "John Smith",
      phone: "000-000-0000",
      email: "john.s@gmail.com",
      id: 1234
    }
  ];

  
  exports.addReservation = function(reservation){
    if (reservations.length < 5){
        reservations.push(reservation);  
    }
    else {
        waitingList.push(reservation);
    }
  }

exports.getReservations = function(){
    return {
        current: reservations,
        waitingList: waitingList
    }
}