var example = document.getElementById('example1');
var hot1 = new Handsontable(example, {
  //ta: Handsontable.helper.createSpreadsheetData(1000, 1000),
  data: [
      {id: 1, name: 'ABC', desc: 'Example', kat: 2}
  ],
  colHeaders: ['ID', 'NAME', 'DESCRIPTION', 'KATEGORIE'],
  columns: [{
      type: 'numeric',
      readOnly: true
    },
    {
      type: 'text',
      readOnly: false
    },
    {
      type: 'text',
      readOnly: false
    },
    {
      type: 'dropdown',
      source: ['POI', 'SNAPSHOT', 'Verified Store', 'Kids', 'Adult']
    }
  ]
});