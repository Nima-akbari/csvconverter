var container1 = document.getElementById('example1');
var hot1 = new Handsontable(container1, {
  data: [],
  dataSchema: {id: null, name: {first: null, last: null}, address: null},
  startRows: 5,
  startCols: 4,
  colHeaders: ['ID', 'First Name', 'Last Name', 'Address'],
  columns: [
    {data: 'id'},
    {data: 'name.first'},
    {data: 'name.last'},
    {data: 'address'}
  ],
  minSpareRows: 1
});
var button1 = document.getElementById('export-file');
var exportPlugin1 = hot1.getPlugin('exportFile');

button1.addEventListener('click', function() {
  exportPlugin1.downloadFile('csv', {
    bom: false,
    columnDelimiter: ',',
    columnHeaders: false,
    exportHiddenColumns: true,
    exportHiddenRows: true,
    fileExtension: 'csv',
    filename: 'Handsontable-CSV-file_[YYYY]-[MM]-[DD]',
    mimeType: 'text/csv',
    rowDelimiter: '\r\n',
    rowHeaders: true
  });
});
