const { google } = require("googleapis");
const keys = require('./keys.json');

const client = new google.auth.JWT(
    keys.client_email,
    null,
    keys.private_key,
    ['https://www.googleapis.com/auth/spreadsheets']
);

client.authorize(function(err, tokens){
    if(err){
       console.log(err);
       return;
    }
    else{
        console.log('Connection Successful...');
    }
});

async function gsrun(cl){
    const gsapi = google.sheets({version:'v4', auth: cl });

    const opt = {
        spreadsheetId: '18NmM9GqkKHkeysfgG3_ljjypDbdwuFQG7gec4lxWhGQ',
        range: '2020 Logs'
    };

    let data = await gsapi.spreadsheets.values.get(opt);
    console.log(data.data.values);
    
}

gsrun(client);