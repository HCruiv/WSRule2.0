const dataPekerja = [
  {
    no: '001',
    nama: 'Sulis Tiana',
    nopek: '161460',
    shift: 'Harian',
    tmt: '1.09.2025',
    endDate: '31.12.9999',
    date: '25.07.2025',
    status: "Approved",
    action: "Edit"
  },
  
  // Tambahkan data lainnya sesuai kebutuhan
];

const tbody = document.getElementById('table-body-history');

dataPekerja.forEach(pekerja => {
  const row = document.createElement('tr');

  row.innerHTML = `
    <td>${pekerja.no}</td>
    <td>${pekerja.nama}</td>
    <td>${pekerja.nopek}</td>
    <td>${pekerja.shift}</td>
    <td>${pekerja.tmt}</td>
    <td>${pekerja.endDate}</td>
    <td>${pekerja.date}</td>
    <td>${pekerja.status}</td>
    <td>${pekerja.action}</td>
  `;

  tbody.appendChild(row);
});
