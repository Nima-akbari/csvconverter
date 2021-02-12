var example = document.getElementById('example1');
var hot1 = new Handsontable(example, {
  data: Handsontable.helper.createSpreadsheetData(100011, 100011),
  colWidths: 100,
  width: '100%',
  height: 320,
  rowHeights: 23,
  rowHeaders: true,
  colHeaders: true
});