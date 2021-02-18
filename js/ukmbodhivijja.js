const endpoint_url = 'https://51018023.p-web.click/ukmapp/api';
var url2;

function getAnggota(tahun) {
  if(tahun==2017){url2="/member/daftarmember/?tahun=2017"}
  else if(tahun==2018){url2="/member/daftarmember/?tahun=2018"}
  else if(tahun==2019){url2="/member/daftarmember/?tahun=2019"}
  else {url2="/member/daftarmember"};
// caramu ambil query bemana? yg itu kyk ?tahun-=8
  fetch(endpoint_url + url2)
  .then(status)
  .then(json)
  .then(function(data){
    var tb_header = `
      <table id="tb_anggota">
        <thead>
          <tr>
            <th>Nama</th>
            <th>Prodi</th>
            <th>Angkatan</th>
            <th>Telepon</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    `;

    $("#dttable").html(tb_header);

    $('#tb_anggota').DataTable({
      "data": data.members,
      "columns": [
        {"data": "nama"},
        {"data": "prodi"},
        {"data": "angkatan"},
        {"data": "telepon"}
      ]
    });
    $('select').formSelect();
  })
  .catch(error);
}

function getJadwal(nama_jadwal) {
  fetch(endpoint_url + "/jadwal/daftarjadwal")
  .then(status)
  .then(json)
  .then(function(data){
    var jadwalHTML = "";
    data.jadwal.forEach(function(jadwal) {
      jadwalHTML += `
      <div class="divider"></div>
        <div class="section">
          <h5><a href="detail_kegiatan.html?jadwal=${jadwal.nama}">${jadwal.nama}</a></h5>
          <p>${jadwal.tanggal} - ${jadwal.tempat}</p>
      </div>
    `;
  });

    document.getElementById("jadwal_list").innerHTML = jadwalHTML;
  })
  .catch(error);
}

function getDetail(nama_jadwal) {
  fetch(endpoint_url + "/jadwal/daftarjadwal")
  .then(status)
  .then(json)
  .then(function(data){
    var deskripsi=null;
    data.jadwal.forEach(el=> {
      if (el.nama==nama_jadwal){deskripsi=el};
    });
    var deskripsiHTML = "";
      deskripsiHTML += `
        <div class="section">
          <h5>${deskripsi.nama}</h5>
          <p>${deskripsi.tanggal} - ${deskripsi.tempat}</p>
          <div class="divider"></div>
        </div>
        <div class="row">
          <div class="col s12 m3 l4">
            <img src="${deskripsi.foto1}" alt="${deskripsi.nama}" class="responsive-img"/>
            <img src="${deskripsi.foto2}" alt="${deskripsi.nama}" class="responsive-img"/>
            <img src="${deskripsi.foto3}" alt="${deskripsi.nama}" class="responsive-img"/>
          </div>
          <div class="col s12 m9 l8">
            <p>${deskripsi.detail}</p>
            <p>Penanggung jawab kegiatan:</p>
              <ul>
                <li>${deskripsi.pj2}</li>
                <li>${deskripsi.pj1}</li>
              </ul>
          </div>
    `;
    document.getElementById("detail_kegiatan").innerHTML = deskripsiHTML;
  })
  .catch(error);
}

function getMessageBox(){
  alert("Terima kasih atas ide yang diberikan. Semoga harimu menyenangkan! ☺");
}

function getStruktur() {
  fetch(endpoint_url + "/member/strukturorganisasi")
  .then(status)
  .then(json)
  .then(function(data){
    var orangHTML = "";
    data.members.forEach(function(orang) {
      if(orang.nama=="William Bentley"){
        x="s8 bluechef";
      } else if(orang.nama=="Fira Mulia"){
        x="s8 offset-s4 redchef";
      } else if(orang.nama=="Evelyn Winny"){
        x="s8 redchef";
      } else {
        x="s8 offset-s4 bluechef"
      };
      orangHTML += `
      <div class="container">
        <div class="row">
          <div class="col ${x}">
            <p>
              <img src="${orang.foto}" style="float:left;" class="responsive-img"/>
              ${orang.nama} <br>
              ${orang.prodi} - ${orang.angkatan} <br>
              ${orang.status} <br>
              ${orang.telepon} <br>
            </p>
          </div>
        </div>
      </div>
    `;
  });

    document.getElementById("struktur_list").innerHTML = orangHTML;
  })
  .catch(error);
}
