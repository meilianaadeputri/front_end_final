const endpoint_url = 'https://51018023.p-web.click/srv4/api';

document.addEventListener("DOMContentLoaded", function(){
  getRoomRate();
});

function getRoomRate() {
  fetch(endpoint_url + "/rooms/roomcountbytype")
  .then(status)
  .then(json)
  .then(function(data){
    var tb_header = `
      <table id="tb_roomrate">
        <thead>
          <tr>
            <th>Room Type</th>
            <th>Room Rate</th>
            <th>Available</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    `;

    $("#dttable").html(tb_header);
    $("#tb_title").html("Room Rate");

    $('#tb_roomrate').DataTable({
      "data": data.rooms,
      "columns": [
        {"data": "rtype"},
        {"data": "rate"},
        {"data": "jumlah_kamar"}
      ]
    });
    $('select').formSelect();
  })
  .catch(error);
}

function getRoomList(){
  fetch(endpoint_url + "/rooms/daftarkamar")
  .then(status)
  .then(json)
  .then(function(data){
    var tb_header = `
      <table id="tb_roomrate">
        <thead>
          <tr>
            <th>Room</th>
            <th>Type</th>
            <th>View</th>
            <th>Rate/th>
          </tr>
        </thead>
      <tbody></tbody>
    </table>
    `;

    $("#dttable").html(tb_header);
    $("#tb_title").html("Rooms");

    $('#tb_roomrate').DataTable({
      "data": data.rooms,
      "columns": [
        {"data": "room"},
        {"data": "rtype"},
        {"data": "dview"},
        {"data": "vrate"}
      ]
    });
    $('select').formSelect();
  })
  .catch(error);
}

function getGuestList(){
  fetch(endpoint_url + "/guest/daftartamunginap")
  .then(status)
  .then(json)
  .then(function(data){
    var tb_header = `
      <table id="tb_roomrate">
        <thead>
          <tr>
            <th>Room#</th>
            <th>From</th>
            <th>Room</th>
            <th>Check-in/th>
          </tr>
        </thead>
      <tbody></tbody>
    </table>
    `;

    $("#dttable").html(tb_header);
    $("#tb_title").html("Guests");

    $('#tb_roomrate').DataTable({
      "data": data.guests,
      "columns": [
        {"data": "nama"},
        {"data": "Country"},
        {"data": "room"},
        {"data": "date_in"}
      ]
    });
    $('select').formSelect();
  })
  .catch(error);
}

function getMemberList(){
  fetch(endpoint_url + "/member/daftarmembernginap")
  .then(status)
  .then(json)
  .then(function(data){
    var tb_header = `
      <table id="tb_roomrate">
        <thead>
          <tr>
            <th>Room#</th>
            <th>From</th>
            <th>Room</th>
            <th>Check-in/th>
          </tr>
        </thead>
      <tbody></tbody>
    </table>
    `;

    $("#dttable").html(tb_header);
    $("#tb_title").html("Members");

    $('#tb_roomrate').DataTable({
      "data": data.members,
      "columns": [
        {"data": "nama"},
        {"data": "Country"},
        {"data": "room"},
        {"data": "date_in"}
      ]
    });
    $('select').formSelect();
  })
  .catch(error);
}
