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
    const gsapi = google.sheets({version:'v4'});

    // const opt = {
    //     spreadsheetId: '18NmM9GqkKHkeysfgG3_ljjypDbdwuFQG7gec4lxWhGQ',
    //     range: '2020 Logs'
    // };

    // let fullSheet = await gsapi.spreadsheets.values.get(opt);
    // console.log(fullSheet.data.values);

    const request = {
        // spreadsheetId: '18NmM9GqkKHkeysfgG3_ljjypDbdwuFQG7gec4lxWhGQ',
        // range: '2020 Logs',
        spreadsheetId: '1ByqGxCjhGTu7nvQq29FpMI-G3VPajSD6OjWydIgEIdI',
        range: 'Sheet1',
        valueInputOption: 'RAW',
        insertDataOption: 'INSERT_ROWS',

        resource: {
            values: [
                ["testappend", "testappend2"]
            ]
        },
        auth: cl
    }

    try{
        const response = (await gsapi.spreadsheets.values.append(request)).data;
        console.log(JSON.stringify(response, null, 2));
    } catch(err){
        console.log(err);
    }
    
}

gsrun(client);