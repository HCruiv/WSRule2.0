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
  },
  {
    no: '002',
    nama: 'Budi Santoso',
    nopek: '161461',
    shift: 'Shift A',
    tmt: '1.10.2025',
    endDate: '31.12.9999',
    date: '26.07.2025',
    status: "Waiting",
  },
  {
    no: '003',
    nama: 'Rina Ayu',
    nopek: '161462',
    shift: 'Shift B',
    tmt: '1.11.2025',
    endDate: '31.12.9999',
    date: '27.07.2025',
    status: "Rejected",
  },
];

const tbody = document.getElementById('table-body-history');

dataPekerja.forEach(pekerja => {
  const row = document.createElement('tr');

  // Tentukan warna badge berdasarkan status
  let badgeClass = '';
  switch (pekerja.status.toLowerCase()) {
    case 'approved':
      badgeClass = 'badge bg-success text-white';
      break;
    case 'waiting':
      badgeClass = 'badge bg-warning text-white';
      break;
    case 'rejected':
      badgeClass = 'badge bg-danger text-white';
      break;
    default:
      badgeClass = 'badge bg-secondary';
  }

  row.innerHTML = `
    <td>${pekerja.no}</td>
    <td>${pekerja.nama}</td>
    <td>${pekerja.nopek}</td>
    <td>${pekerja.shift}</td>
    <td>${pekerja.tmt}</td>
    <td>${pekerja.endDate}</td>
    <td>${pekerja.date}</td>
    <td><span class="${badgeClass}">${pekerja.status}</span></td>
  `;

  tbody.appendChild(row);
});
