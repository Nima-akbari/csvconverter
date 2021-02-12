var container1 = document.getElementById('example1');
var hot1 = new Handsontable(container1, {
  data: Handsontable.helper.createSpreadsheetData(7, 7),
  colHeaders: true,
  rowHeaders: true,
  hiddenRows: { rows: [1, 3, 5], indicators: true },
  hiddenColumns: { columns: [1, 3, 5], indicators: true }
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

var data = [
    ['', 'Ford', 'Tesla', 'Toyota', 'Honda'],
    ['2017', 10, 11, 12, 13],
    ['2018', 20, 11, 14, 13],
    ['2019', 30, 15, 12, 13]
  ];
  
  var container = document.getElementById('example');
  var hot = new Handsontable(container, {
    data: data,
    rowHeaders: true,
    colHeaders: true,
    filters: true,
    dropdownMenu: true
  });