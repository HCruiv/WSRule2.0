$(document).ready(function () {
  const table = $('#dataTable').DataTable({
    dom: 'lrtip', // hilangkan search box default (hilangkan "f")
    lengthChange: false 
  });

  $('#searchBox').on('keyup', function () {
    table.column(1).search(this.value).draw();
  });

  // Filter Fungsi
  $('#filterFungsi').on('change', function () {
    const value = $(this).val();
    table.column(3).search(value).draw(); // Kolom 4 (index 3)
  });

  // Filter Bagian
  $('#filterBagian').on('change', function () {
    const value = $(this).val();
    table.column(3).search(value).draw(); // Kolom 4 (index 3)
  });

  // Filter Shift
  $('#filterShift').on('change', function () {
    const value = $(this).val();
    table.column(5).search(value).draw(); // Kolom 6 (index 5)
  });
});
