var file = config;
var button = document.getElementById('submitBtn');
var get = document.getElementById('getBtn');

var key = file.javascript_api;
var discoveryDocs = ["https://sheets.googleapis.com/$discovery/rest?version=v4"];
var sheet_id = '18NmM9GqkKHkeysfgG3_ljjypDbdwuFQG7gec4lxWhGQ';
var sheet_range = '2020 Logs';
var sheet_name = 'Listen Log';
var scopes = ['https://www.googleapis.com/auth/spreadsheets', 'https://www.googleapis.com/auth/drive.file', 'https://www.googleapis.com/auth/drive']

get.addEventListener("click", function(e){
	e.preventDefault();

	getValues(sheet_id, sheet_range, function(response){
		var values = response.result.values;
		assert.isNotNull(values);
		assert.equal(values[0].length, 3);
		console.log(values);
		done();
	})
});

function handleClientLoad(){
	console.log('Loaded Client');
	gapi.load('client:auth2', initClient);
}

function initClient(){
	gapi.client.init({
		clientId: key,
		scope: scopes.join(' ')
	}).then(() => {
		console.log('Initiated Client');
	})
}

function getValues(spreadsheetId, range, callback){
	gapi.client.sheets.spreadsheets.values.get({
		spreadsheetId: spreadsheetId,
		range: range
	}).then((response) => {
		var result = response.result;
		var numRows = result ? result.values.length : 0;
		console.log(`${numRows} rows retrieved`);
		callback(response);
	});
}

button.addEventListener("click", function(e){
	e.preventDefault();

	const req = new XMLHttpRequest(); 
});