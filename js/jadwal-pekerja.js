const dataPekerja = [
  {
    no: '001',
    nama: 'Sulis Tiana',
    nopek: '161460',
    fungsi: 'Fungsi Apa',
    bagian: 'Bagian Apa',
    shift: 'Harian',
    code: 'Code shift'
  },
  {
    no: '002',
    nama: 'Budi Santoso',
    nopek: '161461',
    fungsi: 'Operasional',
    bagian: 'Produksi',
    shift: 'Shift A',
    code: 'A'
  },
  // Tambahkan data lainnya sesuai kebutuhan
  {
    no: '003',
    nama: 'Budi Santoso',
    nopek: '161461',
    fungsi: 'Operasional',
    bagian: 'Produksi',
    shift: 'Shift B',
    code: 'A'
  },
  {
    no: '004',
    nama: 'Budi Santoso',
    nopek: '161461',
    fungsi: 'Operasional',
    bagian: 'Produksi',
    shift: 'Shift D',
    code: 'A'
  },
  {
    no: '005',
    nama: 'Budi Santoso',
    nopek: '161461',
    fungsi: 'Operasional',
    bagian: 'Produksi',
    shift: 'Shift A',
    code: 'A'
  },
  {
    no: '006',
    nama: 'Budi Santoso',
    nopek: '161461',
    fungsi: 'Operasional',
    bagian: 'Produksi',
    shift: 'Harian',
    code: 'A'
  },
  {
    no: '007',
    nama: 'Budi Santoso',
    nopek: '161461',
    fungsi: 'Operasional',
    bagian: 'Produksi',
    shift: 'Pagi',
    code: 'A'
  },
  {
    no: '008',
    nama: 'Budi Santoso',
    nopek: '161461',
    fungsi: 'Operasional',
    bagian: 'Produksi',
    shift: 'Pagi',
    code: 'A'
  },
  {
    no: '009',
    nama: 'Budi Santoso',
    nopek: '161461',
    fungsi: 'Operasional',
    bagian: 'Produksi',
    shift: 'Pagi',
    code: 'A'
  },
  {
    no: '010',
    nama: 'Budi Santoso',
    nopek: '161461',
    fungsi: 'Operasional',
    bagian: 'Produksi',
    shift: 'Pagi',
    code: 'A'
  },
  {
    no: '011',
    nama: 'Budi Santoso',
    nopek: '161461',
    fungsi: 'Operasional',
    bagian: 'Produksi',
    shift: 'Pagi',
    code: 'A'
  },
  {
    no: '012',
    nama: 'Budi Santoso',
    nopek: '161461',
    fungsi: 'Operasional',
    bagian: 'Produksi',
    shift: 'Pagi',
    code: 'A'
  },
  {
    no: '013',
    nama: 'Budi Santoso',
    nopek: '161461',
    fungsi: 'Operasional',
    bagian: 'Produksi',
    shift: 'Pagi',
    code: 'A'
  },
  {
    no: '014',
    nama: 'Budi Santoso',
    nopek: '161461',
    fungsi: 'Operasional',
    bagian: 'Produksi',
    shift: 'Pagi',
    code: 'A'
  },
  {
    no: '015',
    nama: 'Budi Santoso',
    nopek: '161461',
    fungsi: 'Operasional',
    bagian: 'Produksi',
    shift: 'Pagi',
    code: 'A'
  },
  {
    no: '016',
    nama: 'Budi Santoso',
    nopek: '161461',
    fungsi: 'Operasional',
    bagian: 'Produksi',
    shift: 'Pagi',
    code: 'A'
  },
  {
    no: '017',
    nama: 'Budi Santoso',
    nopek: '161461',
    fungsi: 'Operasional',
    bagian: 'Produksi',
    shift: 'Pagi',
    code: 'A'
  },
  {
    no: '018',
    nama: 'Budi Santoso',
    nopek: '161461',
    fungsi: 'Operasional',
    bagian: 'Produksi',
    shift: 'Pagi',
    code: 'A'
  },
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


