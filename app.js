var example = document.getElementById('example1');
var hot1 = new Handsontable(example, {
  data: Handsontable.helper.createSpreadsheetData(7, 7),
  colWidths: 100,
  width: '100%',
  height: 320,
  rowHeights: 23,
  rowHeaders: true,
  colHeaders: true
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