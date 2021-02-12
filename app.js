var container1 = document.getElementById('example1');
var hot1 = new Handsontable(container1, {
  data: [],
  dataSchema: {name: {first: null, last: null}, job_title: null, identifier: null, email: null, phoneNumber: null, groupidentifier: null, groupuuid: null},
  startRows: 5,
  startCols: 8,
  colHeaders: ['First Name', 'Last Name', 'Job Title', 'Identifier', 'Email', 'Phone Number','Group Identifiers','Group UUIDS'],
  columns: [
    {data: 'id'},
    {data: 'name.first'},
    {data: 'name.last'},
    {data: 'job_title'},
    {data: 'identifier'},
    {data: 'email'},
    {data: 'phoneNumber'},
    {data: 'groupidenfier'},
    {data: 'groupuuid'}
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
