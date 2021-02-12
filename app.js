var people = [
  {name: {first: null, last: null}, phoneNumber: null, email: 'Joe.Fabiano@ex.com'}
],
example1 = document.getElementById('example1'),
example1console = document.getElementById('example1console'),
settings1,
phoneValidator,
emailValidator;

phoneValidator = /^+^(?:\b(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\b|null)$/;
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
},
afterChange: function (changes, source) {
if (source !== 'loadData') {
  example1console.innerText = JSON.stringify(changes);
}
},
rowHeaders: true,
contextMenu: true,
colHeaders: ['ID', 'First name', 'Last name', 'PhoneNumber', 'E-mail'],
columns: [
{data: 'id', type: 'numeric'},
{data: 'name.first'},
{data: 'name.last'},
{data: 'phoneNumber', validator: phoneValidator, allowInvalid: true},
{data: 'email', validator: emailValidator, allowInvalid: false}
],
minSpareRows: 1
};
var hot = new Handsontable(example1, settings1);
