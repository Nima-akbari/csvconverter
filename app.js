var people = [
  {name: {first: null, last: null}, job_title: null, identifier: null, email: null, phoneNumber: null, groupidentifier: null, groupuuid: null}
],
example1 = document.getElementById('example1'),
example1console = document.getElementById('example1console'),
settings1,
phoneValidator,
emailValidator;

phoneValidator = /\+\d[\d]{8,15}\d/g;
emailValidator = function (value, callback) {
setTimeout(function(){
if (/.+@.+/.test(value)) {
  callback(true);
}
else {
  callback(false);
}
}, 1000);
};

settings1 = {
data: people,
beforeChange: function (changes, source) {
for (var i = changes.length - 1; i >= 0; i--) {
  // gently don't accept the word "foo" (remove the change at index i)
  if (changes[i][3] === 'foo') {
    changes.splice(i, 1);
  }
  // if any of pasted cells contains the word "nuke", reject the whole paste
  else if (changes[i][3] === 'nuke') {
    return false;
  }
  // capitalise first letter in column 1 and 2
  else if ((changes[i][1] === 'name.first' || changes[i][1] === 'name.last')) {
    if(changes[i][3] !== null){
      changes[i][3] = changes[i][3].charAt(0).toUpperCase() + changes[i][3].slice(1);
    }
  }
}
licenseKey: 'non-commercial-and-evaluation'
},
afterChange: function (changes, source) {
if (source !== 'loadData') {
  example1console.innerText = JSON.stringify(changes);
}
},
rowHeaders: true,
contextMenu: true,
colHeaders: ['First Name', 'Last Name', 'Job Title', 'Identifier', 'Email', 'Phone Number','Group Identifiers','Group UUIDS'],
columns: [
{data: 'name.first'},
{data: 'name.last'},
{data: 'job_title'},
{data: 'identifier'},
{data: 'email', validator: emailValidator, allowInvalid: false},
{data: 'phoneNumber', validator: phoneValidator, allowInvalid: true},
{data: 'groupidenfier'},
{data: 'groupuuid'}
],
minSpareRows: 1,
licenseKey: 'non-commercial-and-evaluation'

};
var hot = new Handsontable(example1, settings1);

var button1 = document.getElementById('export-file');
var exportPlugin1 = hot.getPlugin('exportFile');

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

function uploadFile()
{
  var url = $("#fileUpload").val();  //gets filename from html input field

  var xhr = (window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP"));
  xhr.onreadystatechange = XHRhandler;
  xhr.open("GET", url, true);
  xhr.send(null);

  function XHRhandler() {
    if (xhr.readyState == 4) {

      //the raw text from the file
      var rawText = xhr.responseText;
      xhr = null;
      makeDataArray(); //Make a function that uses the rawText 
                       //and parse out an array for the data portion of the table.
      makeTable();     //Make a function that renders the table with the data
    }

  }
}

