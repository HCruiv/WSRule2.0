const dataPekerja = [
  {
    no: '001',
    nama: 'Sulis Tiana',
    nopek: '161460',
    fungsi: 'Fungsi Apa',
    bagian: 'Bagian Apa',
    shift: 'Shift Apa',
    code: 'Code shift'
  },
  {
    no: '002',
    nama: 'Budi Santoso',
    nopek: '161461',
    fungsi: 'Operasional',
    bagian: 'Produksi',
    shift: 'Pagi',
    code: 'A'
  },
  // Tambahkan data lainnya sesuai kebutuhan
];

const tbody = document.getElementById('table-body');

dataPekerja.forEach(pekerja => {
  const row = document.createElement('tr');

  row.innerHTML = `
    <td>${pekerja.no}</td>
    <td>${pekerja.nama}</td>
    <td>${pekerja.nopek}</td>
    <td>${pekerja.fungsi}</td>
    <td>${pekerja.bagian}</td>
    <td>${pekerja.shift}</td>
    <td>${pekerja.code}</td>
  `;

  tbody.appendChild(row);
});
